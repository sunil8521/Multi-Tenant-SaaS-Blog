import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Like
 *
 */
export type LikeModel = runtime.Types.Result.DefaultSelection<Prisma.$LikePayload>;
export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
};
export type LikeMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    postId: string | null;
    createdAt: Date | null;
};
export type LikeMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    postId: string | null;
    createdAt: Date | null;
};
export type LikeCountAggregateOutputType = {
    id: number;
    userId: number;
    postId: number;
    createdAt: number;
    _all: number;
};
export type LikeMinAggregateInputType = {
    id?: true;
    userId?: true;
    postId?: true;
    createdAt?: true;
};
export type LikeMaxAggregateInputType = {
    id?: true;
    userId?: true;
    postId?: true;
    createdAt?: true;
};
export type LikeCountAggregateInputType = {
    id?: true;
    userId?: true;
    postId?: true;
    createdAt?: true;
    _all?: true;
};
export type LikeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: Prisma.LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType;
};
export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
    [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLike[P]> : Prisma.GetScalarType<T[P], AggregateLike[P]>;
};
export type LikeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithAggregationInput | Prisma.LikeOrderByWithAggregationInput[];
    by: Prisma.LikeScalarFieldEnum[] | Prisma.LikeScalarFieldEnum;
    having?: Prisma.LikeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LikeCountAggregateInputType | true;
    _min?: LikeMinAggregateInputType;
    _max?: LikeMaxAggregateInputType;
};
export type LikeGroupByOutputType = {
    id: string;
    userId: string;
    postId: string;
    createdAt: Date;
    _count: LikeCountAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
};
type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LikeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LikeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LikeGroupByOutputType[P]>;
}>>;
export type LikeWhereInput = {
    AND?: Prisma.LikeWhereInput | Prisma.LikeWhereInput[];
    OR?: Prisma.LikeWhereInput[];
    NOT?: Prisma.LikeWhereInput | Prisma.LikeWhereInput[];
    id?: Prisma.StringFilter<"Like"> | string;
    userId?: Prisma.StringFilter<"Like"> | string;
    postId?: Prisma.StringFilter<"Like"> | string;
    createdAt?: Prisma.DateTimeFilter<"Like"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
};
export type LikeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    post?: Prisma.PostOrderByWithRelationInput;
};
export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_postId?: Prisma.LikeUserIdPostIdCompoundUniqueInput;
    AND?: Prisma.LikeWhereInput | Prisma.LikeWhereInput[];
    OR?: Prisma.LikeWhereInput[];
    NOT?: Prisma.LikeWhereInput | Prisma.LikeWhereInput[];
    userId?: Prisma.StringFilter<"Like"> | string;
    postId?: Prisma.StringFilter<"Like"> | string;
    createdAt?: Prisma.DateTimeFilter<"Like"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
}, "id" | "userId_postId">;
export type LikeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LikeCountOrderByAggregateInput;
    _max?: Prisma.LikeMaxOrderByAggregateInput;
    _min?: Prisma.LikeMinOrderByAggregateInput;
};
export type LikeScalarWhereWithAggregatesInput = {
    AND?: Prisma.LikeScalarWhereWithAggregatesInput | Prisma.LikeScalarWhereWithAggregatesInput[];
    OR?: Prisma.LikeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LikeScalarWhereWithAggregatesInput | Prisma.LikeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Like"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Like"> | string;
    postId?: Prisma.StringWithAggregatesFilter<"Like"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Like"> | Date | string;
};
export type LikeCreateInput = {
    id?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLikesInput;
    post: Prisma.PostCreateNestedOneWithoutLikesInput;
};
export type LikeUncheckedCreateInput = {
    id?: string;
    userId: string;
    postId: string;
    createdAt?: Date | string;
};
export type LikeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLikesNestedInput;
    post?: Prisma.PostUpdateOneRequiredWithoutLikesNestedInput;
};
export type LikeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeCreateManyInput = {
    id?: string;
    userId: string;
    postId: string;
    createdAt?: Date | string;
};
export type LikeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeListRelationFilter = {
    every?: Prisma.LikeWhereInput;
    some?: Prisma.LikeWhereInput;
    none?: Prisma.LikeWhereInput;
};
export type LikeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LikeUserIdPostIdCompoundUniqueInput = {
    userId: string;
    postId: string;
};
export type LikeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LikeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LikeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LikeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput> | Prisma.LikeCreateWithoutUserInput[] | Prisma.LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutUserInput | Prisma.LikeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LikeCreateManyUserInputEnvelope;
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
};
export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput> | Prisma.LikeCreateWithoutUserInput[] | Prisma.LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutUserInput | Prisma.LikeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LikeCreateManyUserInputEnvelope;
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
};
export type LikeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput> | Prisma.LikeCreateWithoutUserInput[] | Prisma.LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutUserInput | Prisma.LikeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LikeUpsertWithWhereUniqueWithoutUserInput | Prisma.LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LikeCreateManyUserInputEnvelope;
    set?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    disconnect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    delete?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    update?: Prisma.LikeUpdateWithWhereUniqueWithoutUserInput | Prisma.LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LikeUpdateManyWithWhereWithoutUserInput | Prisma.LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
};
export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput> | Prisma.LikeCreateWithoutUserInput[] | Prisma.LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutUserInput | Prisma.LikeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LikeUpsertWithWhereUniqueWithoutUserInput | Prisma.LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LikeCreateManyUserInputEnvelope;
    set?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    disconnect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    delete?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    update?: Prisma.LikeUpdateWithWhereUniqueWithoutUserInput | Prisma.LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LikeUpdateManyWithWhereWithoutUserInput | Prisma.LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
};
export type LikeCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutPostInput, Prisma.LikeUncheckedCreateWithoutPostInput> | Prisma.LikeCreateWithoutPostInput[] | Prisma.LikeUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutPostInput | Prisma.LikeCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.LikeCreateManyPostInputEnvelope;
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
};
export type LikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutPostInput, Prisma.LikeUncheckedCreateWithoutPostInput> | Prisma.LikeCreateWithoutPostInput[] | Prisma.LikeUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutPostInput | Prisma.LikeCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.LikeCreateManyPostInputEnvelope;
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
};
export type LikeUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutPostInput, Prisma.LikeUncheckedCreateWithoutPostInput> | Prisma.LikeCreateWithoutPostInput[] | Prisma.LikeUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutPostInput | Prisma.LikeCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.LikeUpsertWithWhereUniqueWithoutPostInput | Prisma.LikeUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.LikeCreateManyPostInputEnvelope;
    set?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    disconnect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    delete?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    update?: Prisma.LikeUpdateWithWhereUniqueWithoutPostInput | Prisma.LikeUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.LikeUpdateManyWithWhereWithoutPostInput | Prisma.LikeUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
};
export type LikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutPostInput, Prisma.LikeUncheckedCreateWithoutPostInput> | Prisma.LikeCreateWithoutPostInput[] | Prisma.LikeUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutPostInput | Prisma.LikeCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.LikeUpsertWithWhereUniqueWithoutPostInput | Prisma.LikeUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.LikeCreateManyPostInputEnvelope;
    set?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    disconnect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    delete?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    update?: Prisma.LikeUpdateWithWhereUniqueWithoutPostInput | Prisma.LikeUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.LikeUpdateManyWithWhereWithoutPostInput | Prisma.LikeUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
};
export type LikeCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    post: Prisma.PostCreateNestedOneWithoutLikesInput;
};
export type LikeUncheckedCreateWithoutUserInput = {
    id?: string;
    postId: string;
    createdAt?: Date | string;
};
export type LikeCreateOrConnectWithoutUserInput = {
    where: Prisma.LikeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput>;
};
export type LikeCreateManyUserInputEnvelope = {
    data: Prisma.LikeCreateManyUserInput | Prisma.LikeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LikeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LikeUpdateWithoutUserInput, Prisma.LikeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput>;
};
export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LikeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LikeUpdateWithoutUserInput, Prisma.LikeUncheckedUpdateWithoutUserInput>;
};
export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LikeScalarWhereInput;
    data: Prisma.XOR<Prisma.LikeUpdateManyMutationInput, Prisma.LikeUncheckedUpdateManyWithoutUserInput>;
};
export type LikeScalarWhereInput = {
    AND?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
    OR?: Prisma.LikeScalarWhereInput[];
    NOT?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
    id?: Prisma.StringFilter<"Like"> | string;
    userId?: Prisma.StringFilter<"Like"> | string;
    postId?: Prisma.StringFilter<"Like"> | string;
    createdAt?: Prisma.DateTimeFilter<"Like"> | Date | string;
};
export type LikeCreateWithoutPostInput = {
    id?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLikesInput;
};
export type LikeUncheckedCreateWithoutPostInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
};
export type LikeCreateOrConnectWithoutPostInput = {
    where: Prisma.LikeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LikeCreateWithoutPostInput, Prisma.LikeUncheckedCreateWithoutPostInput>;
};
export type LikeCreateManyPostInputEnvelope = {
    data: Prisma.LikeCreateManyPostInput | Prisma.LikeCreateManyPostInput[];
    skipDuplicates?: boolean;
};
export type LikeUpsertWithWhereUniqueWithoutPostInput = {
    where: Prisma.LikeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LikeUpdateWithoutPostInput, Prisma.LikeUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.LikeCreateWithoutPostInput, Prisma.LikeUncheckedCreateWithoutPostInput>;
};
export type LikeUpdateWithWhereUniqueWithoutPostInput = {
    where: Prisma.LikeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LikeUpdateWithoutPostInput, Prisma.LikeUncheckedUpdateWithoutPostInput>;
};
export type LikeUpdateManyWithWhereWithoutPostInput = {
    where: Prisma.LikeScalarWhereInput;
    data: Prisma.XOR<Prisma.LikeUpdateManyMutationInput, Prisma.LikeUncheckedUpdateManyWithoutPostInput>;
};
export type LikeCreateManyUserInput = {
    id?: string;
    postId: string;
    createdAt?: Date | string;
};
export type LikeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.PostUpdateOneRequiredWithoutLikesNestedInput;
};
export type LikeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeCreateManyPostInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
};
export type LikeUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLikesNestedInput;
};
export type LikeUncheckedUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeUncheckedUpdateManyWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["like"]>;
export type LikeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["like"]>;
export type LikeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    postId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["like"]>;
export type LikeSelectScalar = {
    id?: boolean;
    userId?: boolean;
    postId?: boolean;
    createdAt?: boolean;
};
export type LikeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "postId" | "createdAt", ExtArgs["result"]["like"]>;
export type LikeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type LikeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type LikeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type $LikePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Like";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        post: Prisma.$PostPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        postId: string;
        createdAt: Date;
    }, ExtArgs["result"]["like"]>;
    composites: {};
};
export type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LikePayload, S>;
export type LikeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LikeCountAggregateInputType | true;
};
export interface LikeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Like'];
        meta: {
            name: 'Like';
        };
    };
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: Prisma.SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: Prisma.SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     *
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LikeFindManyArgs>(args?: Prisma.SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     *
     */
    create<T extends LikeCreateArgs>(args: Prisma.SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LikeCreateManyArgs>(args?: Prisma.SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     *
     */
    delete<T extends LikeDeleteArgs>(args: Prisma.SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LikeUpdateArgs>(args: Prisma.SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: Prisma.SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LikeUpdateManyArgs>(args: Prisma.SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: Prisma.SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(args?: Prisma.Subset<T, LikeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LikeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Prisma.Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>;
    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LikeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LikeGroupByArgs['orderBy'];
    } : {
        orderBy?: LikeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Like model
     */
    readonly fields: LikeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Like.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LikeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    post<T extends Prisma.PostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PostDefaultArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Like model
 */
export interface LikeFieldRefs {
    readonly id: Prisma.FieldRef<"Like", 'String'>;
    readonly userId: Prisma.FieldRef<"Like", 'String'>;
    readonly postId: Prisma.FieldRef<"Like", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Like", 'DateTime'>;
}
/**
 * Like findUnique
 */
export type LikeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Like to fetch.
     */
    where: Prisma.LikeWhereUniqueInput;
};
/**
 * Like findUniqueOrThrow
 */
export type LikeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Like to fetch.
     */
    where: Prisma.LikeWhereUniqueInput;
};
/**
 * Like findFirst
 */
export type LikeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Like to fetch.
     */
    where?: Prisma.LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Likes.
     */
    cursor?: Prisma.LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Likes.
     */
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
/**
 * Like findFirstOrThrow
 */
export type LikeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Like to fetch.
     */
    where?: Prisma.LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Likes.
     */
    cursor?: Prisma.LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Likes.
     */
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
/**
 * Like findMany
 */
export type LikeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Likes to fetch.
     */
    where?: Prisma.LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Likes.
     */
    cursor?: Prisma.LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
/**
 * Like create
 */
export type LikeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Like.
     */
    data: Prisma.XOR<Prisma.LikeCreateInput, Prisma.LikeUncheckedCreateInput>;
};
/**
 * Like createMany
 */
export type LikeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: Prisma.LikeCreateManyInput | Prisma.LikeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Like createManyAndReturn
 */
export type LikeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: Prisma.LikeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    /**
     * The data used to create many Likes.
     */
    data: Prisma.LikeCreateManyInput | Prisma.LikeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LikeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Like update
 */
export type LikeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Like.
     */
    data: Prisma.XOR<Prisma.LikeUpdateInput, Prisma.LikeUncheckedUpdateInput>;
    /**
     * Choose, which Like to update.
     */
    where: Prisma.LikeWhereUniqueInput;
};
/**
 * Like updateMany
 */
export type LikeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: Prisma.XOR<Prisma.LikeUpdateManyMutationInput, Prisma.LikeUncheckedUpdateManyInput>;
    /**
     * Filter which Likes to update
     */
    where?: Prisma.LikeWhereInput;
    /**
     * Limit how many Likes to update.
     */
    limit?: number;
};
/**
 * Like updateManyAndReturn
 */
export type LikeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: Prisma.LikeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    /**
     * The data used to update Likes.
     */
    data: Prisma.XOR<Prisma.LikeUpdateManyMutationInput, Prisma.LikeUncheckedUpdateManyInput>;
    /**
     * Filter which Likes to update
     */
    where?: Prisma.LikeWhereInput;
    /**
     * Limit how many Likes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LikeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Like upsert
 */
export type LikeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: Prisma.LikeWhereUniqueInput;
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: Prisma.XOR<Prisma.LikeCreateInput, Prisma.LikeUncheckedCreateInput>;
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LikeUpdateInput, Prisma.LikeUncheckedUpdateInput>;
};
/**
 * Like delete
 */
export type LikeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Like to delete.
     */
    where: Prisma.LikeWhereUniqueInput;
};
/**
 * Like deleteMany
 */
export type LikeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: Prisma.LikeWhereInput;
    /**
     * Limit how many Likes to delete.
     */
    limit?: number;
};
/**
 * Like without action
 */
export type LikeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Like.d.ts.map