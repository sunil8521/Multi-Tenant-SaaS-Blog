import prisma from "../db/client.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/errorHandler.js";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import slugify from "slugify";
import { nanoid } from "nanoid";
const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
const CreatePresignedUrl = async (key) => {
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        ContentType: "image/*",
    });
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });
    return url;
};
export const calculateReadTime = (content) => {
    const words = content.trim().split(/\s+/).length;
    const wordsPerMinute = 200;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
};
//  routes ----------------
export const CreatePost = TryCatch(async (req, res, next) => {
    const { title, excerpt, content, tags, coverImage } = req.body;
    const slug = slugify.default(title, { lower: true, strict: true });
    const uniqueId = nanoid(6);
    const uniqueSlug = `${slug}-${uniqueId}`;
    const teamId = req.teamId;
    //create post
    await prisma.$transaction(async (tx) => {
        const newPost = await tx.post.create({
            data: {
                title,
                excerpt,
                content,
                slug: uniqueSlug,
                authorId: req.user.id,
                teamId: req.teamId,
                readTime: calculateReadTime(content),
                publishedAt: new Date(),
                published: true,
                image: coverImage,
            },
        });
        for (const tagName of tags) {
            const tag = await tx.tag.upsert({
                where: {
                    name_teamId: { name: tagName, teamId: req.teamId },
                },
                update: {
                    usageCount: { increment: 1 }, // 👈 increase popularity
                },
                create: {
                    name: tagName,
                    teamId: req.teamId,
                    usageCount: 1,
                },
            });
            await tx.postOnTag.create({
                data: {
                    postId: newPost.id,
                    tagId: tag.id,
                },
            });
        }
        return newPost;
    });
    //connect or create tags
    res.status(201).json({
        success: true,
        message: "Post created successfully",
    });
});
export const GetAllPost = TryCatch(async (req, res, next) => {
    const { subDomain } = req.params;
    const { page = 1, limit = 10, search = "", tag, } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    // 1️⃣ Find Team by subDomain
    const team = await prisma.team.findUnique({
        where: { subdomain: subDomain },
        select: { id: true },
    });
    if (!team)
        return next(new ErrorHandler(404, "Team not found"));
    const filters = {
        published: true,
        teamId: team.id,
    };
    if (search) {
        filters.OR = [
            { title: { contains: search, mode: "insensitive" } },
            { excerpt: { contains: search, mode: "insensitive" } },
        ];
    }
    if (tag) {
        filters.tags = {
            some: {
                tag: {
                    name: { equals: tag, mode: "insensitive" },
                },
            },
        };
    }
    const [posts, total] = await Promise.all([
        prisma.post.findMany({
            where: filters,
            orderBy: { publishedAt: "desc" },
            skip,
            take: Number(limit),
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                image: true,
                readTime: true,
                publishedAt: true,
                featured: true,
                content: true,
                author: {
                    select: {
                        id: true,
                        fullName: true,
                        image: true,
                        email: true,
                    },
                },
                _count: {
                    select: {
                        comments: true,
                        likes: true,
                    },
                },
                tags: {
                    select: {
                        tag: { select: { name: true } },
                    },
                },
            },
        }),
        prisma.post.count({ where: filters }),
    ]);
    res.json({
        success: true,
        pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total / Number(limit)),
        },
        posts: posts.map((post) => ({
            ...post,
            commentCount: post._count.comments,
            likeCount: post._count.likes,
            tags: post.tags.map((t) => t.tag.name),
        })),
    });
});
export const GetAllTags = TryCatch(async (req, res, next) => {
    const { subDomain } = req.params;
    // 1️⃣ Find Team by subDomain
    const team = await prisma.team.findUnique({
        where: { subdomain: subDomain },
        select: { id: true },
    });
    if (!team)
        return next(new ErrorHandler(404, "Team not found"));
    const tags = await prisma.tag.findMany({
        where: { teamId: team.id },
        orderBy: { usageCount: "desc" },
        select: {
            name: true,
            usageCount: true,
        },
    });
    const trendingTags = tags
        .sort((a, b) => b.usageCount - a.usageCount) // Sort descending by usageCount
        .slice(0, 7); // Take top 7
    res.json({
        success: true,
        tags,
        trendingTags,
    });
});
export const GetPost = TryCatch(async (req, res, next) => {
    const { subDomain, slug } = req.params;
    const userId = req.user?.id;
    const team = await prisma.team.findUnique({
        where: { subdomain: subDomain },
        select: { id: true },
    });
    if (!team)
        return next(new ErrorHandler(404, "Team not found"));
    const post = await prisma.post.findFirst({
        where: { slug: slug, teamId: team.id, published: true },
        select: {
            id: true,
            title: true,
            slug: true,
            image: true,
            readTime: true,
            publishedAt: true,
            featured: true,
            content: true,
            author: {
                select: {
                    fullName: true,
                    image: true,
                    email: true,
                },
            },
            _count: {
                select: {
                    comments: true,
                    likes: true,
                },
            },
            tags: {
                select: {
                    tag: { select: { name: true } },
                },
            },
            likes: userId ? { where: { userId }, select: { id: true } } : false,
            bookmarks: userId ? { where: { userId }, select: { id: true } } : false,
        },
    });
    if (!post)
        return next(new ErrorHandler(404, "Post not found"));
    const response = {
        ...post,
        isLiked: post.likes?.length > 0,
        isBookmarked: post.bookmarks?.length > 0,
        commentCount: post._count.comments,
        likeCount: post._count.likes,
        tags: post.tags.map((t) => t.tag.name),
    };
    delete response.likes;
    delete response.bookmarks;
    res.json(response);
});
// GET /posts/:postId/comments?page=1&limit=20
export const GetPostComments = TryCatch(async (req, res, next) => {
    const { postId } = req.params;
    const { page = 1, limit = 20 } = req.query;
    console.log("Fetching comments for postId:", postId);
    const skip = (Number(page) - 1) * Number(limit);
    const [comments, total] = await Promise.all([
        prisma.comment.findMany({
            where: { postId: postId, parentId: null },
            skip,
            take: Number(limit),
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                content: true,
                createdAt: true,
                author: { select: { fullName: true, image: true } },
                _count: { select: { replies: true } },
            },
        }),
        prisma.comment.count({
            where: { postId: postId, parentId: null },
        }),
    ]);
    res.json({
        comments,
        pagination: {
            page: Number(page),
            limit: Number(limit),
            total,
            hasMore: skip + comments.length < total,
        },
    });
});
export const GetReplyComments = TryCatch(async (req, res, next) => {
    const { postId, commentId } = req.params;
    // Required fields check
    if (!postId || !commentId) {
        return next(new ErrorHandler(400, "Post ID and Comment ID are required."));
    }
    // Check parent comment exists
    const parentComment = await prisma.comment.findUnique({
        where: { id: commentId },
    });
    if (!parentComment) {
        return res.status(404).json({
            success: false,
            message: "Parent comment not found.",
        });
    }
    // Fetch replies
    const replies = await prisma.comment.findMany({
        where: {
            postId,
            parentId: commentId,
        },
        select: {
            id: true,
            content: true,
            createdAt: true,
            author: {
                select: {
                    id: true,
                    fullName: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: "asc",
        },
    });
    return res.status(200).json({
        success: true,
        count: replies.length,
        replies,
    });
});
export const CreatePostComment = TryCatch(async (req, res, next) => {
    const { postId } = req.params;
    const { content, authorId } = req.body;
    if (!content?.trim()) {
        return next(new ErrorHandler(400, "Comment content is required."));
    }
    if (!postId || !authorId) {
        return next(new ErrorHandler(400, "Unable to add comment — missing post or user information."));
    }
    // Create top-level comment
    const comment = await prisma.comment.create({
        data: {
            content,
            postId,
            authorId,
        },
        include: {
            author: {
                select: { id: true, fullName: true, image: true },
            },
        },
    });
    res.status(201).json({
        success: true,
        message: "Comment added successfully.",
    });
}); // add comment to a post
export const CreatePostReply = TryCatch(async (req, res, next) => {
    const { postId, commentId } = req.params;
    const { content, authorId } = req.body;
    if (!content?.trim()) {
        return next(new ErrorHandler(400, "Reply content is required."));
    }
    if (!postId || !authorId) {
        return next(new ErrorHandler(400, "Unable to add reply — missing post or user information."));
    }
    // Validate parent comment
    const parentComment = await prisma.comment.findUnique({
        where: { id: commentId },
    });
    if (!parentComment) {
        return res
            .status(404)
            .json({ message: "The comment you're replying to no longer exists." });
    }
    const reply = await prisma.comment.create({
        data: {
            content: content.trim(),
            postId,
            authorId,
            parentId: commentId,
        },
        include: {
            author: { select: { id: true, fullName: true, image: true } },
            parent: { select: { id: true, content: true } },
        },
    });
    res.status(201).json({
        success: true,
        message: "Reply added successfully.",
    });
}); // add reply to a comment
export const UpdateMyPost = TryCatch(async (req, res, next) => {
    const { slug } = req.params;
    const userId = req.user?.id;
    const teamId = req.teamId;
    const { title, content, image, tags } = req.body; // tags = string[]
    if (!slug) {
        return next(new ErrorHandler(400, "Slug is required"));
    }
    // 1. Get post
    const post = await prisma.post.findFirst({
        where: { slug, teamId: teamId, }
    });
    if (!post) {
        return next(new ErrorHandler(404, "Post not found in your team"));
    }
    // 2. Authorization check
    if (post.authorId !== userId) {
        return next(new ErrorHandler(403, "Not authorized to update this post"));
    }
    // 3. If title changed, generate new slug (optional)
    let newSlug = post.slug;
    if (title && title !== post.title) {
        newSlug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
        // ensure unique slug inside team
        const slugExists = await prisma.post.findFirst({
            where: { slug: newSlug, teamId, NOT: { id: post.id } }
        });
        if (slugExists) {
            return next(new ErrorHandler(409, "A post with this title already exists"));
        }
    }
    // 4. Update post
    const updatedPost = await prisma.post.update({
        where: { id: post.id },
        data: {
            title,
            slug: newSlug,
            content,
            image,
            updatedAt: new Date()
        }
    });
    // 5. Update tags if provided
    if (tags && Array.isArray(tags)) {
        await prisma.postOnTag.deleteMany({ where: { postId: post.id } });
        await prisma.postOnTag.createMany({
            data: tags.map((t) => ({
                postId: post.id,
                tagId: t // you should validate tags exist or create on fly
            }))
        });
    }
    return res.status(200).json({
        success: true,
        message: "Post updated successfully",
        data: updatedPost
    });
}); //TODO: improve tag handling
export const GetMyPost = TryCatch(async (req, res, next) => {
    const userId = req.user?.id; // user from auth middleware
    const teamId = req.teamId;
    const { slug } = req.params; // subdomain
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    if (!userId || !teamId || !slug) {
        return next(new ErrorHandler(400, "Unauthorized or missing team/subdomain"));
    }
    // ✅ verify team belongs to this subdomain (security protection)
    const team = await prisma.team.findFirst({
        where: { id: teamId, subdomain: slug },
    });
    if (!team) {
        return next(new ErrorHandler(404, "Team not found or access denied"));
    }
    // ✅ fetch only posts created by current user
    const posts = await prisma.post.findMany({
        where: {
            authorId: userId,
            teamId,
        },
        select: {
            id: true,
            title: true,
            slug: true,
            image: true,
            createdAt: true,
            updatedAt: true,
            _count: {
                select: { comments: true, likes: true },
            },
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
    });
    const total = await prisma.post.count({
        where: { authorId: userId, teamId },
    });
    return res.status(200).json({
        success: true,
        message: "My posts fetched successfully",
        posts,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    });
});
export const DeleteMyPost = TryCatch(async (req, res, next) => {
    const { slug } = req.params;
    const userId = req.user?.id;
    const teamId = req.teamId;
    // const role = req.user?.; // e.g., admin, editor, member
    // Ensure slug exists
    if (!slug) {
        return next(new ErrorHandler(400, "Slug is required"));
    }
    // Find post
    const post = await prisma.post.findFirst({
        where: {
            slug,
            teamId: teamId,
        }
    });
    if (!post) {
        return next(new ErrorHandler(404, "Post not found in your team"));
    }
    // Authorization: Only owner or admin can delete
    // if (post.authorId !== userId && role !== "ADMIN") {
    if (post.authorId !== userId) {
        return next(new ErrorHandler(403, "Not authorized to delete this post"));
    }
    // Delete post
    await prisma.post.delete({
        where: { id: post.id }
    });
    return res.status(200).json({
        success: true,
        message: "Post deleted successfully"
    });
});
export const PresignedUrl = TryCatch(async (req, res, next) => {
    const { filetype } = req.body;
    const filename = `${req.subdomain}/${Date.now()}.${filetype}`;
    const url = await CreatePresignedUrl(filename);
    res.status(200).json({
        success: true,
        url,
        filename,
    });
});
//# sourceMappingURL=post.js.map