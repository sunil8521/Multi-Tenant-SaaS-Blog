import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PostOnTag
 *
 */
export type PostOnTagModel = runtime.Types.Result.DefaultSelection<Prisma.$PostOnTagPayload>;
export type AggregatePostOnTag = {
    _count: PostOnTagCountAggregateOutputType | null;
    _min: PostOnTagMinAggregateOutputType | null;
    _max: PostOnTagMaxAggregateOutputType | null;
};
export type PostOnTagMinAggregateOutputType = {
    postId: string | null;
    tagId: string | null;
};
export type PostOnTagMaxAggregateOutputType = {
    postId: string | null;
    tagId: string | null;
};
export type PostOnTagCountAggregateOutputType = {
    postId: number;
    tagId: number;
    _all: number;
};
export type PostOnTagMinAggregateInputType = {
    postId?: true;
    tagId?: true;
};
export type PostOnTagMaxAggregateInputType = {
    postId?: true;
    tagId?: true;
};
export type PostOnTagCountAggregateInputType = {
    postId?: true;
    tagId?: true;
    _all?: true;
};
export type PostOnTagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PostOnTag to aggregate.
     */
    where?: Prisma.PostOnTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostOnTags to fetch.
     */
    orderBy?: Prisma.PostOnTagOrderByWithRelationInput | Prisma.PostOnTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PostOnTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostOnTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostOnTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PostOnTags
    **/
    _count?: true | PostOnTagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PostOnTagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PostOnTagMaxAggregateInputType;
};
export type GetPostOnTagAggregateType<T extends PostOnTagAggregateArgs> = {
    [P in keyof T & keyof AggregatePostOnTag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePostOnTag[P]> : Prisma.GetScalarType<T[P], AggregatePostOnTag[P]>;
};
export type PostOnTagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostOnTagWhereInput;
    orderBy?: Prisma.PostOnTagOrderByWithAggregationInput | Prisma.PostOnTagOrderByWithAggregationInput[];
    by: Prisma.PostOnTagScalarFieldEnum[] | Prisma.PostOnTagScalarFieldEnum;
    having?: Prisma.PostOnTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostOnTagCountAggregateInputType | true;
    _min?: PostOnTagMinAggregateInputType;
    _max?: PostOnTagMaxAggregateInputType;
};
export type PostOnTagGroupByOutputType = {
    postId: string;
    tagId: string;
    _count: PostOnTagCountAggregateOutputType | null;
    _min: PostOnTagMinAggregateOutputType | null;
    _max: PostOnTagMaxAggregateOutputType | null;
};
type GetPostOnTagGroupByPayload<T extends PostOnTagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PostOnTagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostOnTagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PostOnTagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PostOnTagGroupByOutputType[P]>;
}>>;
export type PostOnTagWhereInput = {
    AND?: Prisma.PostOnTagWhereInput | Prisma.PostOnTagWhereInput[];
    OR?: Prisma.PostOnTagWhereInput[];
    NOT?: Prisma.PostOnTagWhereInput | Prisma.PostOnTagWhereInput[];
    postId?: Prisma.StringFilter<"PostOnTag"> | string;
    tagId?: Prisma.StringFilter<"PostOnTag"> | string;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
    tag?: Prisma.XOR<Prisma.TagScalarRelationFilter, Prisma.TagWhereInput>;
};
export type PostOnTagOrderByWithRelationInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
    post?: Prisma.PostOrderByWithRelationInput;
    tag?: Prisma.TagOrderByWithRelationInput;
};
export type PostOnTagWhereUniqueInput = Prisma.AtLeast<{
    postId_tagId?: Prisma.PostOnTagPostIdTagIdCompoundUniqueInput;
    AND?: Prisma.PostOnTagWhereInput | Prisma.PostOnTagWhereInput[];
    OR?: Prisma.PostOnTagWhereInput[];
    NOT?: Prisma.PostOnTagWhereInput | Prisma.PostOnTagWhereInput[];
    postId?: Prisma.StringFilter<"PostOnTag"> | string;
    tagId?: Prisma.StringFilter<"PostOnTag"> | string;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
    tag?: Prisma.XOR<Prisma.TagScalarRelationFilter, Prisma.TagWhereInput>;
}, "postId_tagId">;
export type PostOnTagOrderByWithAggregationInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
    _count?: Prisma.PostOnTagCountOrderByAggregateInput;
    _max?: Prisma.PostOnTagMaxOrderByAggregateInput;
    _min?: Prisma.PostOnTagMinOrderByAggregateInput;
};
export type PostOnTagScalarWhereWithAggregatesInput = {
    AND?: Prisma.PostOnTagScalarWhereWithAggregatesInput | Prisma.PostOnTagScalarWhereWithAggregatesInput[];
    OR?: Prisma.PostOnTagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PostOnTagScalarWhereWithAggregatesInput | Prisma.PostOnTagScalarWhereWithAggregatesInput[];
    postId?: Prisma.StringWithAggregatesFilter<"PostOnTag"> | string;
    tagId?: Prisma.StringWithAggregatesFilter<"PostOnTag"> | string;
};
export type PostOnTagCreateInput = {
    post: Prisma.PostCreateNestedOneWithoutTagsInput;
    tag: Prisma.TagCreateNestedOneWithoutPostsInput;
};
export type PostOnTagUncheckedCreateInput = {
    postId: string;
    tagId: string;
};
export type PostOnTagUpdateInput = {
    post?: Prisma.PostUpdateOneRequiredWithoutTagsNestedInput;
    tag?: Prisma.TagUpdateOneRequiredWithoutPostsNestedInput;
};
export type PostOnTagUncheckedUpdateInput = {
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PostOnTagCreateManyInput = {
    postId: string;
    tagId: string;
};
export type PostOnTagUpdateManyMutationInput = {};
export type PostOnTagUncheckedUpdateManyInput = {
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PostOnTagListRelationFilter = {
    every?: Prisma.PostOnTagWhereInput;
    some?: Prisma.PostOnTagWhereInput;
    none?: Prisma.PostOnTagWhereInput;
};
export type PostOnTagOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PostOnTagPostIdTagIdCompoundUniqueInput = {
    postId: string;
    tagId: string;
};
export type PostOnTagCountOrderByAggregateInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type PostOnTagMaxOrderByAggregateInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type PostOnTagMinOrderByAggregateInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type PostOnTagCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.PostOnTagCreateWithoutPostInput, Prisma.PostOnTagUncheckedCreateWithoutPostInput> | Prisma.PostOnTagCreateWithoutPostInput[] | Prisma.PostOnTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.PostOnTagCreateOrConnectWithoutPostInput | Prisma.PostOnTagCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.PostOnTagCreateManyPostInputEnvelope;
    connect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
};
export type PostOnTagUncheckedCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.PostOnTagCreateWithoutPostInput, Prisma.PostOnTagUncheckedCreateWithoutPostInput> | Prisma.PostOnTagCreateWithoutPostInput[] | Prisma.PostOnTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.PostOnTagCreateOrConnectWithoutPostInput | Prisma.PostOnTagCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.PostOnTagCreateManyPostInputEnvelope;
    connect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
};
export type PostOnTagUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.PostOnTagCreateWithoutPostInput, Prisma.PostOnTagUncheckedCreateWithoutPostInput> | Prisma.PostOnTagCreateWithoutPostInput[] | Prisma.PostOnTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.PostOnTagCreateOrConnectWithoutPostInput | Prisma.PostOnTagCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.PostOnTagUpsertWithWhereUniqueWithoutPostInput | Prisma.PostOnTagUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.PostOnTagCreateManyPostInputEnvelope;
    set?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    disconnect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    delete?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    connect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    update?: Prisma.PostOnTagUpdateWithWhereUniqueWithoutPostInput | Prisma.PostOnTagUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.PostOnTagUpdateManyWithWhereWithoutPostInput | Prisma.PostOnTagUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.PostOnTagScalarWhereInput | Prisma.PostOnTagScalarWhereInput[];
};
export type PostOnTagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.PostOnTagCreateWithoutPostInput, Prisma.PostOnTagUncheckedCreateWithoutPostInput> | Prisma.PostOnTagCreateWithoutPostInput[] | Prisma.PostOnTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.PostOnTagCreateOrConnectWithoutPostInput | Prisma.PostOnTagCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.PostOnTagUpsertWithWhereUniqueWithoutPostInput | Prisma.PostOnTagUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.PostOnTagCreateManyPostInputEnvelope;
    set?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    disconnect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    delete?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    connect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    update?: Prisma.PostOnTagUpdateWithWhereUniqueWithoutPostInput | Prisma.PostOnTagUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.PostOnTagUpdateManyWithWhereWithoutPostInput | Prisma.PostOnTagUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.PostOnTagScalarWhereInput | Prisma.PostOnTagScalarWhereInput[];
};
export type PostOnTagCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.PostOnTagCreateWithoutTagInput, Prisma.PostOnTagUncheckedCreateWithoutTagInput> | Prisma.PostOnTagCreateWithoutTagInput[] | Prisma.PostOnTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.PostOnTagCreateOrConnectWithoutTagInput | Prisma.PostOnTagCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.PostOnTagCreateManyTagInputEnvelope;
    connect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
};
export type PostOnTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.PostOnTagCreateWithoutTagInput, Prisma.PostOnTagUncheckedCreateWithoutTagInput> | Prisma.PostOnTagCreateWithoutTagInput[] | Prisma.PostOnTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.PostOnTagCreateOrConnectWithoutTagInput | Prisma.PostOnTagCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.PostOnTagCreateManyTagInputEnvelope;
    connect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
};
export type PostOnTagUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.PostOnTagCreateWithoutTagInput, Prisma.PostOnTagUncheckedCreateWithoutTagInput> | Prisma.PostOnTagCreateWithoutTagInput[] | Prisma.PostOnTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.PostOnTagCreateOrConnectWithoutTagInput | Prisma.PostOnTagCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.PostOnTagUpsertWithWhereUniqueWithoutTagInput | Prisma.PostOnTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.PostOnTagCreateManyTagInputEnvelope;
    set?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    disconnect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    delete?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    connect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    update?: Prisma.PostOnTagUpdateWithWhereUniqueWithoutTagInput | Prisma.PostOnTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.PostOnTagUpdateManyWithWhereWithoutTagInput | Prisma.PostOnTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.PostOnTagScalarWhereInput | Prisma.PostOnTagScalarWhereInput[];
};
export type PostOnTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.PostOnTagCreateWithoutTagInput, Prisma.PostOnTagUncheckedCreateWithoutTagInput> | Prisma.PostOnTagCreateWithoutTagInput[] | Prisma.PostOnTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.PostOnTagCreateOrConnectWithoutTagInput | Prisma.PostOnTagCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.PostOnTagUpsertWithWhereUniqueWithoutTagInput | Prisma.PostOnTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.PostOnTagCreateManyTagInputEnvelope;
    set?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    disconnect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    delete?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    connect?: Prisma.PostOnTagWhereUniqueInput | Prisma.PostOnTagWhereUniqueInput[];
    update?: Prisma.PostOnTagUpdateWithWhereUniqueWithoutTagInput | Prisma.PostOnTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.PostOnTagUpdateManyWithWhereWithoutTagInput | Prisma.PostOnTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.PostOnTagScalarWhereInput | Prisma.PostOnTagScalarWhereInput[];
};
export type PostOnTagCreateWithoutPostInput = {
    tag: Prisma.TagCreateNestedOneWithoutPostsInput;
};
export type PostOnTagUncheckedCreateWithoutPostInput = {
    tagId: string;
};
export type PostOnTagCreateOrConnectWithoutPostInput = {
    where: Prisma.PostOnTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostOnTagCreateWithoutPostInput, Prisma.PostOnTagUncheckedCreateWithoutPostInput>;
};
export type PostOnTagCreateManyPostInputEnvelope = {
    data: Prisma.PostOnTagCreateManyPostInput | Prisma.PostOnTagCreateManyPostInput[];
    skipDuplicates?: boolean;
};
export type PostOnTagUpsertWithWhereUniqueWithoutPostInput = {
    where: Prisma.PostOnTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.PostOnTagUpdateWithoutPostInput, Prisma.PostOnTagUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.PostOnTagCreateWithoutPostInput, Prisma.PostOnTagUncheckedCreateWithoutPostInput>;
};
export type PostOnTagUpdateWithWhereUniqueWithoutPostInput = {
    where: Prisma.PostOnTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.PostOnTagUpdateWithoutPostInput, Prisma.PostOnTagUncheckedUpdateWithoutPostInput>;
};
export type PostOnTagUpdateManyWithWhereWithoutPostInput = {
    where: Prisma.PostOnTagScalarWhereInput;
    data: Prisma.XOR<Prisma.PostOnTagUpdateManyMutationInput, Prisma.PostOnTagUncheckedUpdateManyWithoutPostInput>;
};
export type PostOnTagScalarWhereInput = {
    AND?: Prisma.PostOnTagScalarWhereInput | Prisma.PostOnTagScalarWhereInput[];
    OR?: Prisma.PostOnTagScalarWhereInput[];
    NOT?: Prisma.PostOnTagScalarWhereInput | Prisma.PostOnTagScalarWhereInput[];
    postId?: Prisma.StringFilter<"PostOnTag"> | string;
    tagId?: Prisma.StringFilter<"PostOnTag"> | string;
};
export type PostOnTagCreateWithoutTagInput = {
    post: Prisma.PostCreateNestedOneWithoutTagsInput;
};
export type PostOnTagUncheckedCreateWithoutTagInput = {
    postId: string;
};
export type PostOnTagCreateOrConnectWithoutTagInput = {
    where: Prisma.PostOnTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostOnTagCreateWithoutTagInput, Prisma.PostOnTagUncheckedCreateWithoutTagInput>;
};
export type PostOnTagCreateManyTagInputEnvelope = {
    data: Prisma.PostOnTagCreateManyTagInput | Prisma.PostOnTagCreateManyTagInput[];
    skipDuplicates?: boolean;
};
export type PostOnTagUpsertWithWhereUniqueWithoutTagInput = {
    where: Prisma.PostOnTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.PostOnTagUpdateWithoutTagInput, Prisma.PostOnTagUncheckedUpdateWithoutTagInput>;
    create: Prisma.XOR<Prisma.PostOnTagCreateWithoutTagInput, Prisma.PostOnTagUncheckedCreateWithoutTagInput>;
};
export type PostOnTagUpdateWithWhereUniqueWithoutTagInput = {
    where: Prisma.PostOnTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.PostOnTagUpdateWithoutTagInput, Prisma.PostOnTagUncheckedUpdateWithoutTagInput>;
};
export type PostOnTagUpdateManyWithWhereWithoutTagInput = {
    where: Prisma.PostOnTagScalarWhereInput;
    data: Prisma.XOR<Prisma.PostOnTagUpdateManyMutationInput, Prisma.PostOnTagUncheckedUpdateManyWithoutTagInput>;
};
export type PostOnTagCreateManyPostInput = {
    tagId: string;
};
export type PostOnTagUpdateWithoutPostInput = {
    tag?: Prisma.TagUpdateOneRequiredWithoutPostsNestedInput;
};
export type PostOnTagUncheckedUpdateWithoutPostInput = {
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PostOnTagUncheckedUpdateManyWithoutPostInput = {
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PostOnTagCreateManyTagInput = {
    postId: string;
};
export type PostOnTagUpdateWithoutTagInput = {
    post?: Prisma.PostUpdateOneRequiredWithoutTagsNestedInput;
};
export type PostOnTagUncheckedUpdateWithoutTagInput = {
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PostOnTagUncheckedUpdateManyWithoutTagInput = {
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PostOnTagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    postId?: boolean;
    tagId?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["postOnTag"]>;
export type PostOnTagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    postId?: boolean;
    tagId?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["postOnTag"]>;
export type PostOnTagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    postId?: boolean;
    tagId?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["postOnTag"]>;
export type PostOnTagSelectScalar = {
    postId?: boolean;
    tagId?: boolean;
};
export type PostOnTagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"postId" | "tagId", ExtArgs["result"]["postOnTag"]>;
export type PostOnTagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type PostOnTagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type PostOnTagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type $PostOnTagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PostOnTag";
    objects: {
        post: Prisma.$PostPayload<ExtArgs>;
        tag: Prisma.$TagPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        postId: string;
        tagId: string;
    }, ExtArgs["result"]["postOnTag"]>;
    composites: {};
};
export type PostOnTagGetPayload<S extends boolean | null | undefined | PostOnTagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload, S>;
export type PostOnTagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PostOnTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostOnTagCountAggregateInputType | true;
};
export interface PostOnTagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PostOnTag'];
        meta: {
            name: 'PostOnTag';
        };
    };
    /**
     * Find zero or one PostOnTag that matches the filter.
     * @param {PostOnTagFindUniqueArgs} args - Arguments to find a PostOnTag
     * @example
     * // Get one PostOnTag
     * const postOnTag = await prisma.postOnTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostOnTagFindUniqueArgs>(args: Prisma.SelectSubset<T, PostOnTagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PostOnTagClient<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PostOnTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostOnTagFindUniqueOrThrowArgs} args - Arguments to find a PostOnTag
     * @example
     * // Get one PostOnTag
     * const postOnTag = await prisma.postOnTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostOnTagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PostOnTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PostOnTagClient<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PostOnTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnTagFindFirstArgs} args - Arguments to find a PostOnTag
     * @example
     * // Get one PostOnTag
     * const postOnTag = await prisma.postOnTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostOnTagFindFirstArgs>(args?: Prisma.SelectSubset<T, PostOnTagFindFirstArgs<ExtArgs>>): Prisma.Prisma__PostOnTagClient<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PostOnTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnTagFindFirstOrThrowArgs} args - Arguments to find a PostOnTag
     * @example
     * // Get one PostOnTag
     * const postOnTag = await prisma.postOnTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostOnTagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PostOnTagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PostOnTagClient<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PostOnTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostOnTags
     * const postOnTags = await prisma.postOnTag.findMany()
     *
     * // Get first 10 PostOnTags
     * const postOnTags = await prisma.postOnTag.findMany({ take: 10 })
     *
     * // Only select the `postId`
     * const postOnTagWithPostIdOnly = await prisma.postOnTag.findMany({ select: { postId: true } })
     *
     */
    findMany<T extends PostOnTagFindManyArgs>(args?: Prisma.SelectSubset<T, PostOnTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PostOnTag.
     * @param {PostOnTagCreateArgs} args - Arguments to create a PostOnTag.
     * @example
     * // Create one PostOnTag
     * const PostOnTag = await prisma.postOnTag.create({
     *   data: {
     *     // ... data to create a PostOnTag
     *   }
     * })
     *
     */
    create<T extends PostOnTagCreateArgs>(args: Prisma.SelectSubset<T, PostOnTagCreateArgs<ExtArgs>>): Prisma.Prisma__PostOnTagClient<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PostOnTags.
     * @param {PostOnTagCreateManyArgs} args - Arguments to create many PostOnTags.
     * @example
     * // Create many PostOnTags
     * const postOnTag = await prisma.postOnTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostOnTagCreateManyArgs>(args?: Prisma.SelectSubset<T, PostOnTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PostOnTags and returns the data saved in the database.
     * @param {PostOnTagCreateManyAndReturnArgs} args - Arguments to create many PostOnTags.
     * @example
     * // Create many PostOnTags
     * const postOnTag = await prisma.postOnTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PostOnTags and only return the `postId`
     * const postOnTagWithPostIdOnly = await prisma.postOnTag.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostOnTagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PostOnTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PostOnTag.
     * @param {PostOnTagDeleteArgs} args - Arguments to delete one PostOnTag.
     * @example
     * // Delete one PostOnTag
     * const PostOnTag = await prisma.postOnTag.delete({
     *   where: {
     *     // ... filter to delete one PostOnTag
     *   }
     * })
     *
     */
    delete<T extends PostOnTagDeleteArgs>(args: Prisma.SelectSubset<T, PostOnTagDeleteArgs<ExtArgs>>): Prisma.Prisma__PostOnTagClient<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PostOnTag.
     * @param {PostOnTagUpdateArgs} args - Arguments to update one PostOnTag.
     * @example
     * // Update one PostOnTag
     * const postOnTag = await prisma.postOnTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostOnTagUpdateArgs>(args: Prisma.SelectSubset<T, PostOnTagUpdateArgs<ExtArgs>>): Prisma.Prisma__PostOnTagClient<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PostOnTags.
     * @param {PostOnTagDeleteManyArgs} args - Arguments to filter PostOnTags to delete.
     * @example
     * // Delete a few PostOnTags
     * const { count } = await prisma.postOnTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostOnTagDeleteManyArgs>(args?: Prisma.SelectSubset<T, PostOnTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PostOnTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostOnTags
     * const postOnTag = await prisma.postOnTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostOnTagUpdateManyArgs>(args: Prisma.SelectSubset<T, PostOnTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PostOnTags and returns the data updated in the database.
     * @param {PostOnTagUpdateManyAndReturnArgs} args - Arguments to update many PostOnTags.
     * @example
     * // Update many PostOnTags
     * const postOnTag = await prisma.postOnTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PostOnTags and only return the `postId`
     * const postOnTagWithPostIdOnly = await prisma.postOnTag.updateManyAndReturn({
     *   select: { postId: true },
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
    updateManyAndReturn<T extends PostOnTagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PostOnTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PostOnTag.
     * @param {PostOnTagUpsertArgs} args - Arguments to update or create a PostOnTag.
     * @example
     * // Update or create a PostOnTag
     * const postOnTag = await prisma.postOnTag.upsert({
     *   create: {
     *     // ... data to create a PostOnTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostOnTag we want to update
     *   }
     * })
     */
    upsert<T extends PostOnTagUpsertArgs>(args: Prisma.SelectSubset<T, PostOnTagUpsertArgs<ExtArgs>>): Prisma.Prisma__PostOnTagClient<runtime.Types.Result.GetResult<Prisma.$PostOnTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PostOnTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnTagCountArgs} args - Arguments to filter PostOnTags to count.
     * @example
     * // Count the number of PostOnTags
     * const count = await prisma.postOnTag.count({
     *   where: {
     *     // ... the filter for the PostOnTags we want to count
     *   }
     * })
    **/
    count<T extends PostOnTagCountArgs>(args?: Prisma.Subset<T, PostOnTagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PostOnTagCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PostOnTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostOnTagAggregateArgs>(args: Prisma.Subset<T, PostOnTagAggregateArgs>): Prisma.PrismaPromise<GetPostOnTagAggregateType<T>>;
    /**
     * Group by PostOnTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnTagGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PostOnTagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PostOnTagGroupByArgs['orderBy'];
    } : {
        orderBy?: PostOnTagGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PostOnTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostOnTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PostOnTag model
     */
    readonly fields: PostOnTagFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PostOnTag.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PostOnTagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    post<T extends Prisma.PostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PostDefaultArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tag<T extends Prisma.TagDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TagDefaultArgs<ExtArgs>>): Prisma.Prisma__TagClient<runtime.Types.Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PostOnTag model
 */
export interface PostOnTagFieldRefs {
    readonly postId: Prisma.FieldRef<"PostOnTag", 'String'>;
    readonly tagId: Prisma.FieldRef<"PostOnTag", 'String'>;
}
/**
 * PostOnTag findUnique
 */
export type PostOnTagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PostOnTag to fetch.
     */
    where: Prisma.PostOnTagWhereUniqueInput;
};
/**
 * PostOnTag findUniqueOrThrow
 */
export type PostOnTagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PostOnTag to fetch.
     */
    where: Prisma.PostOnTagWhereUniqueInput;
};
/**
 * PostOnTag findFirst
 */
export type PostOnTagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PostOnTag to fetch.
     */
    where?: Prisma.PostOnTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostOnTags to fetch.
     */
    orderBy?: Prisma.PostOnTagOrderByWithRelationInput | Prisma.PostOnTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostOnTags.
     */
    cursor?: Prisma.PostOnTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostOnTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostOnTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostOnTags.
     */
    distinct?: Prisma.PostOnTagScalarFieldEnum | Prisma.PostOnTagScalarFieldEnum[];
};
/**
 * PostOnTag findFirstOrThrow
 */
export type PostOnTagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PostOnTag to fetch.
     */
    where?: Prisma.PostOnTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostOnTags to fetch.
     */
    orderBy?: Prisma.PostOnTagOrderByWithRelationInput | Prisma.PostOnTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostOnTags.
     */
    cursor?: Prisma.PostOnTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostOnTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostOnTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostOnTags.
     */
    distinct?: Prisma.PostOnTagScalarFieldEnum | Prisma.PostOnTagScalarFieldEnum[];
};
/**
 * PostOnTag findMany
 */
export type PostOnTagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PostOnTags to fetch.
     */
    where?: Prisma.PostOnTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostOnTags to fetch.
     */
    orderBy?: Prisma.PostOnTagOrderByWithRelationInput | Prisma.PostOnTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PostOnTags.
     */
    cursor?: Prisma.PostOnTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostOnTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostOnTags.
     */
    skip?: number;
    distinct?: Prisma.PostOnTagScalarFieldEnum | Prisma.PostOnTagScalarFieldEnum[];
};
/**
 * PostOnTag create
 */
export type PostOnTagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a PostOnTag.
     */
    data: Prisma.XOR<Prisma.PostOnTagCreateInput, Prisma.PostOnTagUncheckedCreateInput>;
};
/**
 * PostOnTag createMany
 */
export type PostOnTagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostOnTags.
     */
    data: Prisma.PostOnTagCreateManyInput | Prisma.PostOnTagCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PostOnTag createManyAndReturn
 */
export type PostOnTagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostOnTag
     */
    select?: Prisma.PostOnTagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostOnTag
     */
    omit?: Prisma.PostOnTagOmit<ExtArgs> | null;
    /**
     * The data used to create many PostOnTags.
     */
    data: Prisma.PostOnTagCreateManyInput | Prisma.PostOnTagCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostOnTagIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PostOnTag update
 */
export type PostOnTagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a PostOnTag.
     */
    data: Prisma.XOR<Prisma.PostOnTagUpdateInput, Prisma.PostOnTagUncheckedUpdateInput>;
    /**
     * Choose, which PostOnTag to update.
     */
    where: Prisma.PostOnTagWhereUniqueInput;
};
/**
 * PostOnTag updateMany
 */
export type PostOnTagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PostOnTags.
     */
    data: Prisma.XOR<Prisma.PostOnTagUpdateManyMutationInput, Prisma.PostOnTagUncheckedUpdateManyInput>;
    /**
     * Filter which PostOnTags to update
     */
    where?: Prisma.PostOnTagWhereInput;
    /**
     * Limit how many PostOnTags to update.
     */
    limit?: number;
};
/**
 * PostOnTag updateManyAndReturn
 */
export type PostOnTagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostOnTag
     */
    select?: Prisma.PostOnTagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostOnTag
     */
    omit?: Prisma.PostOnTagOmit<ExtArgs> | null;
    /**
     * The data used to update PostOnTags.
     */
    data: Prisma.XOR<Prisma.PostOnTagUpdateManyMutationInput, Prisma.PostOnTagUncheckedUpdateManyInput>;
    /**
     * Filter which PostOnTags to update
     */
    where?: Prisma.PostOnTagWhereInput;
    /**
     * Limit how many PostOnTags to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostOnTagIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PostOnTag upsert
 */
export type PostOnTagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the PostOnTag to update in case it exists.
     */
    where: Prisma.PostOnTagWhereUniqueInput;
    /**
     * In case the PostOnTag found by the `where` argument doesn't exist, create a new PostOnTag with this data.
     */
    create: Prisma.XOR<Prisma.PostOnTagCreateInput, Prisma.PostOnTagUncheckedCreateInput>;
    /**
     * In case the PostOnTag was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PostOnTagUpdateInput, Prisma.PostOnTagUncheckedUpdateInput>;
};
/**
 * PostOnTag delete
 */
export type PostOnTagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which PostOnTag to delete.
     */
    where: Prisma.PostOnTagWhereUniqueInput;
};
/**
 * PostOnTag deleteMany
 */
export type PostOnTagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PostOnTags to delete
     */
    where?: Prisma.PostOnTagWhereInput;
    /**
     * Limit how many PostOnTags to delete.
     */
    limit?: number;
};
/**
 * PostOnTag without action
 */
export type PostOnTagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=PostOnTag.d.ts.map