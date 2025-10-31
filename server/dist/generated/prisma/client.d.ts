import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Verification
 *
 */
export type Verification = Prisma.VerificationModel;
/**
 * Model Team
 *
 */
export type Team = Prisma.TeamModel;
/**
 * Model TeamMember
 *
 */
export type TeamMember = Prisma.TeamMemberModel;
/**
 * Model Invite
 *
 */
export type Invite = Prisma.InviteModel;
/**
 * Model Post
 *
 */
export type Post = Prisma.PostModel;
/**
 * Model Tag
 *
 */
export type Tag = Prisma.TagModel;
/**
 * Model PostOnTag
 *
 */
export type PostOnTag = Prisma.PostOnTagModel;
/**
 * Model Comment
 *
 */
export type Comment = Prisma.CommentModel;
/**
 * Model Like
 *
 */
export type Like = Prisma.LikeModel;
/**
 * Model Bookmark
 *
 */
export type Bookmark = Prisma.BookmarkModel;
//# sourceMappingURL=client.d.ts.map