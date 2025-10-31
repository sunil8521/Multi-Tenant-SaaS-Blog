import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Post
 *
 */
export type PostModel = runtime.Types.Result.DefaultSelection<Prisma.$PostPayload>;
export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
};
export type PostMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    excerpt: string | null;
    content: string | null;
    image: string | null;
    published: boolean | null;
    readTime: string | null;
    publishedAt: Date | null;
    featured: boolean | null;
    authorId: string | null;
    teamId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PostMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    excerpt: string | null;
    content: string | null;
    image: string | null;
    published: boolean | null;
    readTime: string | null;
    publishedAt: Date | null;
    featured: boolean | null;
    authorId: string | null;
    teamId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PostCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    excerpt: number;
    content: number;
    image: number;
    published: number;
    readTime: number;
    publishedAt: number;
    featured: number;
    authorId: number;
    teamId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PostMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    excerpt?: true;
    content?: true;
    image?: true;
    published?: true;
    readTime?: true;
    publishedAt?: true;
    featured?: true;
    authorId?: true;
    teamId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PostMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    excerpt?: true;
    content?: true;
    image?: true;
    published?: true;
    readTime?: true;
    publishedAt?: true;
    featured?: true;
    authorId?: true;
    teamId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PostCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    excerpt?: true;
    content?: true;
    image?: true;
    published?: true;
    readTime?: true;
    publishedAt?: true;
    featured?: true;
    authorId?: true;
    teamId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: Prisma.PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType;
};
export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePost[P]> : Prisma.GetScalarType<T[P], AggregatePost[P]>;
};
export type PostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithAggregationInput | Prisma.PostOrderByWithAggregationInput[];
    by: Prisma.PostScalarFieldEnum[] | Prisma.PostScalarFieldEnum;
    having?: Prisma.PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
};
export type PostGroupByOutputType = {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    image: string | null;
    published: boolean;
    readTime: string | null;
    publishedAt: Date | null;
    featured: boolean;
    authorId: string;
    teamId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PostCountAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
};
type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PostGroupByOutputType[P]>;
}>>;
export type PostWhereInput = {
    AND?: Prisma.PostWhereInput | Prisma.PostWhereInput[];
    OR?: Prisma.PostWhereInput[];
    NOT?: Prisma.PostWhereInput | Prisma.PostWhereInput[];
    id?: Prisma.StringFilter<"Post"> | string;
    title?: Prisma.StringFilter<"Post"> | string;
    slug?: Prisma.StringFilter<"Post"> | string;
    excerpt?: Prisma.StringNullableFilter<"Post"> | string | null;
    content?: Prisma.StringFilter<"Post"> | string;
    image?: Prisma.StringNullableFilter<"Post"> | string | null;
    published?: Prisma.BoolFilter<"Post"> | boolean;
    readTime?: Prisma.StringNullableFilter<"Post"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"Post"> | Date | string | null;
    featured?: Prisma.BoolFilter<"Post"> | boolean;
    authorId?: Prisma.StringFilter<"Post"> | string;
    teamId?: Prisma.StringFilter<"Post"> | string;
    createdAt?: Prisma.DateTimeFilter<"Post"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Post"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    team?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    tags?: Prisma.PostOnTagListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    bookmarks?: Prisma.BookmarkListRelationFilter;
};
export type PostOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    published?: Prisma.SortOrder;
    readTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    team?: Prisma.TeamOrderByWithRelationInput;
    tags?: Prisma.PostOnTagOrderByRelationAggregateInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    likes?: Prisma.LikeOrderByRelationAggregateInput;
    bookmarks?: Prisma.BookmarkOrderByRelationAggregateInput;
};
export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug_teamId?: Prisma.PostSlugTeamIdCompoundUniqueInput;
    AND?: Prisma.PostWhereInput | Prisma.PostWhereInput[];
    OR?: Prisma.PostWhereInput[];
    NOT?: Prisma.PostWhereInput | Prisma.PostWhereInput[];
    title?: Prisma.StringFilter<"Post"> | string;
    slug?: Prisma.StringFilter<"Post"> | string;
    excerpt?: Prisma.StringNullableFilter<"Post"> | string | null;
    content?: Prisma.StringFilter<"Post"> | string;
    image?: Prisma.StringNullableFilter<"Post"> | string | null;
    published?: Prisma.BoolFilter<"Post"> | boolean;
    readTime?: Prisma.StringNullableFilter<"Post"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"Post"> | Date | string | null;
    featured?: Prisma.BoolFilter<"Post"> | boolean;
    authorId?: Prisma.StringFilter<"Post"> | string;
    teamId?: Prisma.StringFilter<"Post"> | string;
    createdAt?: Prisma.DateTimeFilter<"Post"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Post"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    team?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    tags?: Prisma.PostOnTagListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    bookmarks?: Prisma.BookmarkListRelationFilter;
}, "id" | "slug_teamId">;
export type PostOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    published?: Prisma.SortOrder;
    readTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PostCountOrderByAggregateInput;
    _max?: Prisma.PostMaxOrderByAggregateInput;
    _min?: Prisma.PostMinOrderByAggregateInput;
};
export type PostScalarWhereWithAggregatesInput = {
    AND?: Prisma.PostScalarWhereWithAggregatesInput | Prisma.PostScalarWhereWithAggregatesInput[];
    OR?: Prisma.PostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PostScalarWhereWithAggregatesInput | Prisma.PostScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Post"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Post"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Post"> | string;
    excerpt?: Prisma.StringNullableWithAggregatesFilter<"Post"> | string | null;
    content?: Prisma.StringWithAggregatesFilter<"Post"> | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"Post"> | string | null;
    published?: Prisma.BoolWithAggregatesFilter<"Post"> | boolean;
    readTime?: Prisma.StringNullableWithAggregatesFilter<"Post"> | string | null;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null;
    featured?: Prisma.BoolWithAggregatesFilter<"Post"> | boolean;
    authorId?: Prisma.StringWithAggregatesFilter<"Post"> | string;
    teamId?: Prisma.StringWithAggregatesFilter<"Post"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Post"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Post"> | Date | string;
};
export type PostCreateInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutPostsInput;
    team: Prisma.TeamCreateNestedOneWithoutPostsInput;
    tags?: Prisma.PostOnTagCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutPostInput;
};
export type PostUncheckedCreateInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    authorId: string;
    teamId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: Prisma.PostOnTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutPostInput;
};
export type PostUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutPostsNestedInput;
    team?: Prisma.TeamUpdateOneRequiredWithoutPostsNestedInput;
    tags?: Prisma.PostOnTagUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.PostOnTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutPostNestedInput;
};
export type PostCreateManyInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    authorId: string;
    teamId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PostUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostListRelationFilter = {
    every?: Prisma.PostWhereInput;
    some?: Prisma.PostWhereInput;
    none?: Prisma.PostWhereInput;
};
export type PostOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PostSlugTeamIdCompoundUniqueInput = {
    slug: string;
    teamId: string;
};
export type PostCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    published?: Prisma.SortOrder;
    readTime?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PostMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    published?: Prisma.SortOrder;
    readTime?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PostMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    published?: Prisma.SortOrder;
    readTime?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PostScalarRelationFilter = {
    is?: Prisma.PostWhereInput;
    isNot?: Prisma.PostWhereInput;
};
export type PostCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutAuthorInput, Prisma.PostUncheckedCreateWithoutAuthorInput> | Prisma.PostCreateWithoutAuthorInput[] | Prisma.PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutAuthorInput | Prisma.PostCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.PostCreateManyAuthorInputEnvelope;
    connect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
};
export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutAuthorInput, Prisma.PostUncheckedCreateWithoutAuthorInput> | Prisma.PostCreateWithoutAuthorInput[] | Prisma.PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutAuthorInput | Prisma.PostCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.PostCreateManyAuthorInputEnvelope;
    connect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
};
export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutAuthorInput, Prisma.PostUncheckedCreateWithoutAuthorInput> | Prisma.PostCreateWithoutAuthorInput[] | Prisma.PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutAuthorInput | Prisma.PostCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput | Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.PostCreateManyAuthorInputEnvelope;
    set?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    disconnect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    delete?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    connect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    update?: Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput | Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.PostUpdateManyWithWhereWithoutAuthorInput | Prisma.PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.PostScalarWhereInput | Prisma.PostScalarWhereInput[];
};
export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutAuthorInput, Prisma.PostUncheckedCreateWithoutAuthorInput> | Prisma.PostCreateWithoutAuthorInput[] | Prisma.PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutAuthorInput | Prisma.PostCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput | Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.PostCreateManyAuthorInputEnvelope;
    set?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    disconnect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    delete?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    connect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    update?: Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput | Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.PostUpdateManyWithWhereWithoutAuthorInput | Prisma.PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.PostScalarWhereInput | Prisma.PostScalarWhereInput[];
};
export type PostCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutTeamInput, Prisma.PostUncheckedCreateWithoutTeamInput> | Prisma.PostCreateWithoutTeamInput[] | Prisma.PostUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutTeamInput | Prisma.PostCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.PostCreateManyTeamInputEnvelope;
    connect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
};
export type PostUncheckedCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutTeamInput, Prisma.PostUncheckedCreateWithoutTeamInput> | Prisma.PostCreateWithoutTeamInput[] | Prisma.PostUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutTeamInput | Prisma.PostCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.PostCreateManyTeamInputEnvelope;
    connect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
};
export type PostUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutTeamInput, Prisma.PostUncheckedCreateWithoutTeamInput> | Prisma.PostCreateWithoutTeamInput[] | Prisma.PostUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutTeamInput | Prisma.PostCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.PostUpsertWithWhereUniqueWithoutTeamInput | Prisma.PostUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.PostCreateManyTeamInputEnvelope;
    set?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    disconnect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    delete?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    connect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    update?: Prisma.PostUpdateWithWhereUniqueWithoutTeamInput | Prisma.PostUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.PostUpdateManyWithWhereWithoutTeamInput | Prisma.PostUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.PostScalarWhereInput | Prisma.PostScalarWhereInput[];
};
export type PostUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutTeamInput, Prisma.PostUncheckedCreateWithoutTeamInput> | Prisma.PostCreateWithoutTeamInput[] | Prisma.PostUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutTeamInput | Prisma.PostCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.PostUpsertWithWhereUniqueWithoutTeamInput | Prisma.PostUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.PostCreateManyTeamInputEnvelope;
    set?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    disconnect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    delete?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    connect?: Prisma.PostWhereUniqueInput | Prisma.PostWhereUniqueInput[];
    update?: Prisma.PostUpdateWithWhereUniqueWithoutTeamInput | Prisma.PostUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.PostUpdateManyWithWhereWithoutTeamInput | Prisma.PostUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.PostScalarWhereInput | Prisma.PostScalarWhereInput[];
};
export type PostCreateNestedOneWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutTagsInput, Prisma.PostUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutTagsInput;
    connect?: Prisma.PostWhereUniqueInput;
};
export type PostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutTagsInput, Prisma.PostUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutTagsInput;
    upsert?: Prisma.PostUpsertWithoutTagsInput;
    connect?: Prisma.PostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PostUpdateToOneWithWhereWithoutTagsInput, Prisma.PostUpdateWithoutTagsInput>, Prisma.PostUncheckedUpdateWithoutTagsInput>;
};
export type PostCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutCommentsInput, Prisma.PostUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.PostWhereUniqueInput;
};
export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutCommentsInput, Prisma.PostUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.PostUpsertWithoutCommentsInput;
    connect?: Prisma.PostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PostUpdateToOneWithWhereWithoutCommentsInput, Prisma.PostUpdateWithoutCommentsInput>, Prisma.PostUncheckedUpdateWithoutCommentsInput>;
};
export type PostCreateNestedOneWithoutLikesInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutLikesInput, Prisma.PostUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutLikesInput;
    connect?: Prisma.PostWhereUniqueInput;
};
export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutLikesInput, Prisma.PostUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutLikesInput;
    upsert?: Prisma.PostUpsertWithoutLikesInput;
    connect?: Prisma.PostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PostUpdateToOneWithWhereWithoutLikesInput, Prisma.PostUpdateWithoutLikesInput>, Prisma.PostUncheckedUpdateWithoutLikesInput>;
};
export type PostCreateNestedOneWithoutBookmarksInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutBookmarksInput, Prisma.PostUncheckedCreateWithoutBookmarksInput>;
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutBookmarksInput;
    connect?: Prisma.PostWhereUniqueInput;
};
export type PostUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: Prisma.XOR<Prisma.PostCreateWithoutBookmarksInput, Prisma.PostUncheckedCreateWithoutBookmarksInput>;
    connectOrCreate?: Prisma.PostCreateOrConnectWithoutBookmarksInput;
    upsert?: Prisma.PostUpsertWithoutBookmarksInput;
    connect?: Prisma.PostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PostUpdateToOneWithWhereWithoutBookmarksInput, Prisma.PostUpdateWithoutBookmarksInput>, Prisma.PostUncheckedUpdateWithoutBookmarksInput>;
};
export type PostCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutPostsInput;
    tags?: Prisma.PostOnTagCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutPostInput;
};
export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    teamId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: Prisma.PostOnTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutPostInput;
};
export type PostCreateOrConnectWithoutAuthorInput = {
    where: Prisma.PostWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostCreateWithoutAuthorInput, Prisma.PostUncheckedCreateWithoutAuthorInput>;
};
export type PostCreateManyAuthorInputEnvelope = {
    data: Prisma.PostCreateManyAuthorInput | Prisma.PostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.PostWhereUniqueInput;
    update: Prisma.XOR<Prisma.PostUpdateWithoutAuthorInput, Prisma.PostUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.PostCreateWithoutAuthorInput, Prisma.PostUncheckedCreateWithoutAuthorInput>;
};
export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.XOR<Prisma.PostUpdateWithoutAuthorInput, Prisma.PostUncheckedUpdateWithoutAuthorInput>;
};
export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.PostScalarWhereInput;
    data: Prisma.XOR<Prisma.PostUpdateManyMutationInput, Prisma.PostUncheckedUpdateManyWithoutAuthorInput>;
};
export type PostScalarWhereInput = {
    AND?: Prisma.PostScalarWhereInput | Prisma.PostScalarWhereInput[];
    OR?: Prisma.PostScalarWhereInput[];
    NOT?: Prisma.PostScalarWhereInput | Prisma.PostScalarWhereInput[];
    id?: Prisma.StringFilter<"Post"> | string;
    title?: Prisma.StringFilter<"Post"> | string;
    slug?: Prisma.StringFilter<"Post"> | string;
    excerpt?: Prisma.StringNullableFilter<"Post"> | string | null;
    content?: Prisma.StringFilter<"Post"> | string;
    image?: Prisma.StringNullableFilter<"Post"> | string | null;
    published?: Prisma.BoolFilter<"Post"> | boolean;
    readTime?: Prisma.StringNullableFilter<"Post"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"Post"> | Date | string | null;
    featured?: Prisma.BoolFilter<"Post"> | boolean;
    authorId?: Prisma.StringFilter<"Post"> | string;
    teamId?: Prisma.StringFilter<"Post"> | string;
    createdAt?: Prisma.DateTimeFilter<"Post"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Post"> | Date | string;
};
export type PostCreateWithoutTeamInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutPostsInput;
    tags?: Prisma.PostOnTagCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutPostInput;
};
export type PostUncheckedCreateWithoutTeamInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: Prisma.PostOnTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutPostInput;
};
export type PostCreateOrConnectWithoutTeamInput = {
    where: Prisma.PostWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostCreateWithoutTeamInput, Prisma.PostUncheckedCreateWithoutTeamInput>;
};
export type PostCreateManyTeamInputEnvelope = {
    data: Prisma.PostCreateManyTeamInput | Prisma.PostCreateManyTeamInput[];
    skipDuplicates?: boolean;
};
export type PostUpsertWithWhereUniqueWithoutTeamInput = {
    where: Prisma.PostWhereUniqueInput;
    update: Prisma.XOR<Prisma.PostUpdateWithoutTeamInput, Prisma.PostUncheckedUpdateWithoutTeamInput>;
    create: Prisma.XOR<Prisma.PostCreateWithoutTeamInput, Prisma.PostUncheckedCreateWithoutTeamInput>;
};
export type PostUpdateWithWhereUniqueWithoutTeamInput = {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.XOR<Prisma.PostUpdateWithoutTeamInput, Prisma.PostUncheckedUpdateWithoutTeamInput>;
};
export type PostUpdateManyWithWhereWithoutTeamInput = {
    where: Prisma.PostScalarWhereInput;
    data: Prisma.XOR<Prisma.PostUpdateManyMutationInput, Prisma.PostUncheckedUpdateManyWithoutTeamInput>;
};
export type PostCreateWithoutTagsInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutPostsInput;
    team: Prisma.TeamCreateNestedOneWithoutPostsInput;
    comments?: Prisma.CommentCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutPostInput;
};
export type PostUncheckedCreateWithoutTagsInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    authorId: string;
    teamId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutPostInput;
};
export type PostCreateOrConnectWithoutTagsInput = {
    where: Prisma.PostWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostCreateWithoutTagsInput, Prisma.PostUncheckedCreateWithoutTagsInput>;
};
export type PostUpsertWithoutTagsInput = {
    update: Prisma.XOR<Prisma.PostUpdateWithoutTagsInput, Prisma.PostUncheckedUpdateWithoutTagsInput>;
    create: Prisma.XOR<Prisma.PostCreateWithoutTagsInput, Prisma.PostUncheckedCreateWithoutTagsInput>;
    where?: Prisma.PostWhereInput;
};
export type PostUpdateToOneWithWhereWithoutTagsInput = {
    where?: Prisma.PostWhereInput;
    data: Prisma.XOR<Prisma.PostUpdateWithoutTagsInput, Prisma.PostUncheckedUpdateWithoutTagsInput>;
};
export type PostUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutPostsNestedInput;
    team?: Prisma.TeamUpdateOneRequiredWithoutPostsNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutPostNestedInput;
};
export type PostCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutPostsInput;
    team: Prisma.TeamCreateNestedOneWithoutPostsInput;
    tags?: Prisma.PostOnTagCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutPostInput;
};
export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    authorId: string;
    teamId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: Prisma.PostOnTagUncheckedCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutPostInput;
};
export type PostCreateOrConnectWithoutCommentsInput = {
    where: Prisma.PostWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostCreateWithoutCommentsInput, Prisma.PostUncheckedCreateWithoutCommentsInput>;
};
export type PostUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.PostUpdateWithoutCommentsInput, Prisma.PostUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.PostCreateWithoutCommentsInput, Prisma.PostUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.PostWhereInput;
};
export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.PostWhereInput;
    data: Prisma.XOR<Prisma.PostUpdateWithoutCommentsInput, Prisma.PostUncheckedUpdateWithoutCommentsInput>;
};
export type PostUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutPostsNestedInput;
    team?: Prisma.TeamUpdateOneRequiredWithoutPostsNestedInput;
    tags?: Prisma.PostOnTagUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.PostOnTagUncheckedUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutPostNestedInput;
};
export type PostCreateWithoutLikesInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutPostsInput;
    team: Prisma.TeamCreateNestedOneWithoutPostsInput;
    tags?: Prisma.PostOnTagCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutPostInput;
};
export type PostUncheckedCreateWithoutLikesInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    authorId: string;
    teamId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: Prisma.PostOnTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutPostInput;
    bookmarks?: Prisma.BookmarkUncheckedCreateNestedManyWithoutPostInput;
};
export type PostCreateOrConnectWithoutLikesInput = {
    where: Prisma.PostWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostCreateWithoutLikesInput, Prisma.PostUncheckedCreateWithoutLikesInput>;
};
export type PostUpsertWithoutLikesInput = {
    update: Prisma.XOR<Prisma.PostUpdateWithoutLikesInput, Prisma.PostUncheckedUpdateWithoutLikesInput>;
    create: Prisma.XOR<Prisma.PostCreateWithoutLikesInput, Prisma.PostUncheckedCreateWithoutLikesInput>;
    where?: Prisma.PostWhereInput;
};
export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: Prisma.PostWhereInput;
    data: Prisma.XOR<Prisma.PostUpdateWithoutLikesInput, Prisma.PostUncheckedUpdateWithoutLikesInput>;
};
export type PostUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutPostsNestedInput;
    team?: Prisma.TeamUpdateOneRequiredWithoutPostsNestedInput;
    tags?: Prisma.PostOnTagUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.PostOnTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutPostNestedInput;
};
export type PostCreateWithoutBookmarksInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutPostsInput;
    team: Prisma.TeamCreateNestedOneWithoutPostsInput;
    tags?: Prisma.PostOnTagCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeCreateNestedManyWithoutPostInput;
};
export type PostUncheckedCreateWithoutBookmarksInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    authorId: string;
    teamId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: Prisma.PostOnTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutPostInput;
};
export type PostCreateOrConnectWithoutBookmarksInput = {
    where: Prisma.PostWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostCreateWithoutBookmarksInput, Prisma.PostUncheckedCreateWithoutBookmarksInput>;
};
export type PostUpsertWithoutBookmarksInput = {
    update: Prisma.XOR<Prisma.PostUpdateWithoutBookmarksInput, Prisma.PostUncheckedUpdateWithoutBookmarksInput>;
    create: Prisma.XOR<Prisma.PostCreateWithoutBookmarksInput, Prisma.PostUncheckedCreateWithoutBookmarksInput>;
    where?: Prisma.PostWhereInput;
};
export type PostUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: Prisma.PostWhereInput;
    data: Prisma.XOR<Prisma.PostUpdateWithoutBookmarksInput, Prisma.PostUncheckedUpdateWithoutBookmarksInput>;
};
export type PostUpdateWithoutBookmarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutPostsNestedInput;
    team?: Prisma.TeamUpdateOneRequiredWithoutPostsNestedInput;
    tags?: Prisma.PostOnTagUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateWithoutBookmarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.PostOnTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput;
};
export type PostCreateManyAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    teamId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PostUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutPostsNestedInput;
    tags?: Prisma.PostOnTagUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.PostOnTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostCreateManyTeamInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    image?: string | null;
    published?: boolean;
    readTime?: string | null;
    publishedAt?: Date | string | null;
    featured?: boolean;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PostUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutPostsNestedInput;
    tags?: Prisma.PostOnTagUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.PostOnTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput;
    bookmarks?: Prisma.BookmarkUncheckedUpdateManyWithoutPostNestedInput;
};
export type PostUncheckedUpdateManyWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    published?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PostCountOutputType
 */
export type PostCountOutputType = {
    tags: number;
    comments: number;
    likes: number;
    bookmarks: number;
};
export type PostCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs;
    comments?: boolean | PostCountOutputTypeCountCommentsArgs;
    likes?: boolean | PostCountOutputTypeCountLikesArgs;
    bookmarks?: boolean | PostCountOutputTypeCountBookmarksArgs;
};
/**
 * PostCountOutputType without action
 */
export type PostCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: Prisma.PostCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PostCountOutputType without action
 */
export type PostCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostOnTagWhereInput;
};
/**
 * PostCountOutputType without action
 */
export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
/**
 * PostCountOutputType without action
 */
export type PostCountOutputTypeCountLikesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
};
/**
 * PostCountOutputType without action
 */
export type PostCountOutputTypeCountBookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookmarkWhereInput;
};
export type PostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    excerpt?: boolean;
    content?: boolean;
    image?: boolean;
    published?: boolean;
    readTime?: boolean;
    publishedAt?: boolean;
    featured?: boolean;
    authorId?: boolean;
    teamId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    tags?: boolean | Prisma.Post$tagsArgs<ExtArgs>;
    comments?: boolean | Prisma.Post$commentsArgs<ExtArgs>;
    likes?: boolean | Prisma.Post$likesArgs<ExtArgs>;
    bookmarks?: boolean | Prisma.Post$bookmarksArgs<ExtArgs>;
    _count?: boolean | Prisma.PostCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post"]>;
export type PostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    excerpt?: boolean;
    content?: boolean;
    image?: boolean;
    published?: boolean;
    readTime?: boolean;
    publishedAt?: boolean;
    featured?: boolean;
    authorId?: boolean;
    teamId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post"]>;
export type PostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    excerpt?: boolean;
    content?: boolean;
    image?: boolean;
    published?: boolean;
    readTime?: boolean;
    publishedAt?: boolean;
    featured?: boolean;
    authorId?: boolean;
    teamId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post"]>;
export type PostSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    excerpt?: boolean;
    content?: boolean;
    image?: boolean;
    published?: boolean;
    readTime?: boolean;
    publishedAt?: boolean;
    featured?: boolean;
    authorId?: boolean;
    teamId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "content" | "image" | "published" | "readTime" | "publishedAt" | "featured" | "authorId" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>;
export type PostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    tags?: boolean | Prisma.Post$tagsArgs<ExtArgs>;
    comments?: boolean | Prisma.Post$commentsArgs<ExtArgs>;
    likes?: boolean | Prisma.Post$likesArgs<ExtArgs>;
    bookmarks?: boolean | Prisma.Post$bookmarksArgs<ExtArgs>;
    _count?: boolean | Prisma.PostCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
};
export type PostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
};
export type $PostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Post";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        team: Prisma.$TeamPayload<ExtArgs>;
        tags: Prisma.$PostOnTagPayload<ExtArgs>[];
        comments: Prisma.$CommentPayload<ExtArgs>[];
        likes: Prisma.$LikePayload<ExtArgs>[];
        bookmarks: Prisma.$BookmarkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        slug: string;
        excerpt: string | null;
        content: string;
        image: string | null;
        published: boolean;
        readTime: string | null;
        publishedAt: Date | null;
        featured: boolean;
        authorId: string;
        teamId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["post"]>;
    composites: {};
};
export type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PostPayload, S>;
export type PostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostCountAggregateInputType | true;
};
export interface PostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Post'];
        meta: {
            name: 'Post';
        };
    };
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: Prisma.SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: Prisma.SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostFindManyArgs>(args?: Prisma.SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     */
    create<T extends PostCreateArgs>(args: Prisma.SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostCreateManyArgs>(args?: Prisma.SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     */
    delete<T extends PostDeleteArgs>(args: Prisma.SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostUpdateArgs>(args: Prisma.SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: Prisma.SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostUpdateManyArgs>(args: Prisma.SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: Prisma.SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(args?: Prisma.Subset<T, PostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PostCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Prisma.Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>;
    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PostGroupByArgs['orderBy'];
    } : {
        orderBy?: PostGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Post model
     */
    readonly fields: PostFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Post.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    team<T extends Prisma.TeamDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeamDefaultArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tags<T extends Prisma.Post$tagsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Post$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.Post$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    likes<T extends Prisma.Post$likesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookmarks<T extends Prisma.Post$bookmarksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Post$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Post model
 */
export interface PostFieldRefs {
    readonly id: Prisma.FieldRef<"Post", 'String'>;
    readonly title: Prisma.FieldRef<"Post", 'String'>;
    readonly slug: Prisma.FieldRef<"Post", 'String'>;
    readonly excerpt: Prisma.FieldRef<"Post", 'String'>;
    readonly content: Prisma.FieldRef<"Post", 'String'>;
    readonly image: Prisma.FieldRef<"Post", 'String'>;
    readonly published: Prisma.FieldRef<"Post", 'Boolean'>;
    readonly readTime: Prisma.FieldRef<"Post", 'String'>;
    readonly publishedAt: Prisma.FieldRef<"Post", 'DateTime'>;
    readonly featured: Prisma.FieldRef<"Post", 'Boolean'>;
    readonly authorId: Prisma.FieldRef<"Post", 'String'>;
    readonly teamId: Prisma.FieldRef<"Post", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Post", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Post", 'DateTime'>;
}
/**
 * Post findUnique
 */
export type PostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: Prisma.PostWhereUniqueInput;
};
/**
 * Post findUniqueOrThrow
 */
export type PostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: Prisma.PostWhereUniqueInput;
};
/**
 * Post findFirst
 */
export type PostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: Prisma.PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: Prisma.PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: Prisma.PostScalarFieldEnum | Prisma.PostScalarFieldEnum[];
};
/**
 * Post findFirstOrThrow
 */
export type PostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: Prisma.PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: Prisma.PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: Prisma.PostScalarFieldEnum | Prisma.PostScalarFieldEnum[];
};
/**
 * Post findMany
 */
export type PostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * Filter, which Posts to fetch.
     */
    where?: Prisma.PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     */
    cursor?: Prisma.PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    distinct?: Prisma.PostScalarFieldEnum | Prisma.PostScalarFieldEnum[];
};
/**
 * Post create
 */
export type PostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post.
     */
    data: Prisma.XOR<Prisma.PostCreateInput, Prisma.PostUncheckedCreateInput>;
};
/**
 * Post createMany
 */
export type PostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: Prisma.PostCreateManyInput | Prisma.PostCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Post createManyAndReturn
 */
export type PostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Posts.
     */
    data: Prisma.PostCreateManyInput | Prisma.PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Post update
 */
export type PostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post.
     */
    data: Prisma.XOR<Prisma.PostUpdateInput, Prisma.PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: Prisma.PostWhereUniqueInput;
};
/**
 * Post updateMany
 */
export type PostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: Prisma.XOR<Prisma.PostUpdateManyMutationInput, Prisma.PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: Prisma.PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
};
/**
 * Post updateManyAndReturn
 */
export type PostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * The data used to update Posts.
     */
    data: Prisma.XOR<Prisma.PostUpdateManyMutationInput, Prisma.PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: Prisma.PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Post upsert
 */
export type PostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: Prisma.PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: Prisma.XOR<Prisma.PostCreateInput, Prisma.PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PostUpdateInput, Prisma.PostUncheckedUpdateInput>;
};
/**
 * Post delete
 */
export type PostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    /**
     * Filter which Post to delete.
     */
    where: Prisma.PostWhereUniqueInput;
};
/**
 * Post deleteMany
 */
export type PostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: Prisma.PostWhereInput;
    /**
     * Limit how many Posts to delete.
     */
    limit?: number;
};
/**
 * Post.tags
 */
export type Post$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostOnTag
     */
    select?: Prisma.PostOnTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostOnTag
     */
    omit?: Prisma.PostOnTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostOnTagInclude<ExtArgs> | null;
    where?: Prisma.PostOnTagWhereInput;
    orderBy?: Prisma.PostOnTagOrderByWithRelationInput | Prisma.PostOnTagOrderByWithRelationInput[];
    cursor?: Prisma.PostOnTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostOnTagScalarFieldEnum | Prisma.PostOnTagScalarFieldEnum[];
};
/**
 * Post.comments
 */
export type Post$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: Prisma.CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
/**
 * Post.likes
 */
export type Post$likesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: Prisma.LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
/**
 * Post.bookmarks
 */
export type Post$bookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where?: Prisma.BookmarkWhereInput;
    orderBy?: Prisma.BookmarkOrderByWithRelationInput | Prisma.BookmarkOrderByWithRelationInput[];
    cursor?: Prisma.BookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookmarkScalarFieldEnum | Prisma.BookmarkScalarFieldEnum[];
};
/**
 * Post without action
 */
export type PostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Post.d.ts.map