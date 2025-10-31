import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Comment
 *
 */
export type CommentModel = runtime.Types.Result.DefaultSelection<Prisma.$CommentPayload>;
export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
};
export type CommentMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    authorId: string | null;
    postId: string | null;
    parentId: string | null;
    createdAt: Date | null;
};
export type CommentMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    authorId: string | null;
    postId: string | null;
    parentId: string | null;
    createdAt: Date | null;
};
export type CommentCountAggregateOutputType = {
    id: number;
    content: number;
    authorId: number;
    postId: number;
    parentId: number;
    createdAt: number;
    _all: number;
};
export type CommentMinAggregateInputType = {
    id?: true;
    content?: true;
    authorId?: true;
    postId?: true;
    parentId?: true;
    createdAt?: true;
};
export type CommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    authorId?: true;
    postId?: true;
    parentId?: true;
    createdAt?: true;
};
export type CommentCountAggregateInputType = {
    id?: true;
    content?: true;
    authorId?: true;
    postId?: true;
    parentId?: true;
    createdAt?: true;
    _all?: true;
};
export type CommentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: Prisma.CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType;
};
export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComment[P]> : Prisma.GetScalarType<T[P], AggregateComment[P]>;
};
export type CommentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithAggregationInput | Prisma.CommentOrderByWithAggregationInput[];
    by: Prisma.CommentScalarFieldEnum[] | Prisma.CommentScalarFieldEnum;
    having?: Prisma.CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInputType | true;
    _min?: CommentMinAggregateInputType;
    _max?: CommentMaxAggregateInputType;
};
export type CommentGroupByOutputType = {
    id: string;
    content: string;
    authorId: string;
    postId: string;
    parentId: string | null;
    createdAt: Date;
    _count: CommentCountAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
};
type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommentGroupByOutputType[P]>;
}>>;
export type CommentWhereInput = {
    AND?: Prisma.CommentWhereInput | Prisma.CommentWhereInput[];
    OR?: Prisma.CommentWhereInput[];
    NOT?: Prisma.CommentWhereInput | Prisma.CommentWhereInput[];
    id?: Prisma.StringFilter<"Comment"> | string;
    content?: Prisma.StringFilter<"Comment"> | string;
    authorId?: Prisma.StringFilter<"Comment"> | string;
    postId?: Prisma.StringFilter<"Comment"> | string;
    parentId?: Prisma.StringNullableFilter<"Comment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Comment"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
    parent?: Prisma.XOR<Prisma.CommentNullableScalarRelationFilter, Prisma.CommentWhereInput> | null;
    replies?: Prisma.CommentListRelationFilter;
};
export type CommentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    post?: Prisma.PostOrderByWithRelationInput;
    parent?: Prisma.CommentOrderByWithRelationInput;
    replies?: Prisma.CommentOrderByRelationAggregateInput;
};
export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CommentWhereInput | Prisma.CommentWhereInput[];
    OR?: Prisma.CommentWhereInput[];
    NOT?: Prisma.CommentWhereInput | Prisma.CommentWhereInput[];
    content?: Prisma.StringFilter<"Comment"> | string;
    authorId?: Prisma.StringFilter<"Comment"> | string;
    postId?: Prisma.StringFilter<"Comment"> | string;
    parentId?: Prisma.StringNullableFilter<"Comment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Comment"> | Date | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
    parent?: Prisma.XOR<Prisma.CommentNullableScalarRelationFilter, Prisma.CommentWhereInput> | null;
    replies?: Prisma.CommentListRelationFilter;
}, "id">;
export type CommentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CommentCountOrderByAggregateInput;
    _max?: Prisma.CommentMaxOrderByAggregateInput;
    _min?: Prisma.CommentMinOrderByAggregateInput;
};
export type CommentScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommentScalarWhereWithAggregatesInput | Prisma.CommentScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommentScalarWhereWithAggregatesInput | Prisma.CommentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Comment"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Comment"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"Comment"> | string;
    postId?: Prisma.StringWithAggregatesFilter<"Comment"> | string;
    parentId?: Prisma.StringNullableWithAggregatesFilter<"Comment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Comment"> | Date | string;
};
export type CommentCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutCommentsInput;
    post: Prisma.PostCreateNestedOneWithoutCommentsInput;
    parent?: Prisma.CommentCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.CommentCreateNestedManyWithoutParentInput;
};
export type CommentUncheckedCreateInput = {
    id?: string;
    content: string;
    authorId: string;
    postId: string;
    parentId?: string | null;
    createdAt?: Date | string;
    replies?: Prisma.CommentUncheckedCreateNestedManyWithoutParentInput;
};
export type CommentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput;
    post?: Prisma.PostUpdateOneRequiredWithoutCommentsNestedInput;
    parent?: Prisma.CommentUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.CommentUpdateManyWithoutParentNestedInput;
};
export type CommentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: Prisma.CommentUncheckedUpdateManyWithoutParentNestedInput;
};
export type CommentCreateManyInput = {
    id?: string;
    content: string;
    authorId: string;
    postId: string;
    parentId?: string | null;
    createdAt?: Date | string;
};
export type CommentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentListRelationFilter = {
    every?: Prisma.CommentWhereInput;
    some?: Prisma.CommentWhereInput;
    none?: Prisma.CommentWhereInput;
};
export type CommentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CommentNullableScalarRelationFilter = {
    is?: Prisma.CommentWhereInput | null;
    isNot?: Prisma.CommentWhereInput | null;
};
export type CommentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutAuthorInput, Prisma.CommentUncheckedCreateWithoutAuthorInput> | Prisma.CommentCreateWithoutAuthorInput[] | Prisma.CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutAuthorInput | Prisma.CommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.CommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
};
export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutAuthorInput, Prisma.CommentUncheckedCreateWithoutAuthorInput> | Prisma.CommentCreateWithoutAuthorInput[] | Prisma.CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutAuthorInput | Prisma.CommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.CommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
};
export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutAuthorInput, Prisma.CommentUncheckedCreateWithoutAuthorInput> | Prisma.CommentCreateWithoutAuthorInput[] | Prisma.CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutAuthorInput | Prisma.CommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.CommentCreateManyAuthorInputEnvelope;
    set?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    disconnect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    delete?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    update?: Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.CommentUpdateManyWithWhereWithoutAuthorInput | Prisma.CommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.CommentScalarWhereInput | Prisma.CommentScalarWhereInput[];
};
export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutAuthorInput, Prisma.CommentUncheckedCreateWithoutAuthorInput> | Prisma.CommentCreateWithoutAuthorInput[] | Prisma.CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutAuthorInput | Prisma.CommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.CommentCreateManyAuthorInputEnvelope;
    set?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    disconnect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    delete?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    update?: Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.CommentUpdateManyWithWhereWithoutAuthorInput | Prisma.CommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.CommentScalarWhereInput | Prisma.CommentScalarWhereInput[];
};
export type CommentCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutPostInput, Prisma.CommentUncheckedCreateWithoutPostInput> | Prisma.CommentCreateWithoutPostInput[] | Prisma.CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutPostInput | Prisma.CommentCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.CommentCreateManyPostInputEnvelope;
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
};
export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutPostInput, Prisma.CommentUncheckedCreateWithoutPostInput> | Prisma.CommentCreateWithoutPostInput[] | Prisma.CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutPostInput | Prisma.CommentCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.CommentCreateManyPostInputEnvelope;
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
};
export type CommentUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutPostInput, Prisma.CommentUncheckedCreateWithoutPostInput> | Prisma.CommentCreateWithoutPostInput[] | Prisma.CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutPostInput | Prisma.CommentCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.CommentUpsertWithWhereUniqueWithoutPostInput | Prisma.CommentUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.CommentCreateManyPostInputEnvelope;
    set?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    disconnect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    delete?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    update?: Prisma.CommentUpdateWithWhereUniqueWithoutPostInput | Prisma.CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.CommentUpdateManyWithWhereWithoutPostInput | Prisma.CommentUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.CommentScalarWhereInput | Prisma.CommentScalarWhereInput[];
};
export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutPostInput, Prisma.CommentUncheckedCreateWithoutPostInput> | Prisma.CommentCreateWithoutPostInput[] | Prisma.CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutPostInput | Prisma.CommentCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.CommentUpsertWithWhereUniqueWithoutPostInput | Prisma.CommentUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.CommentCreateManyPostInputEnvelope;
    set?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    disconnect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    delete?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    update?: Prisma.CommentUpdateWithWhereUniqueWithoutPostInput | Prisma.CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.CommentUpdateManyWithWhereWithoutPostInput | Prisma.CommentUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.CommentScalarWhereInput | Prisma.CommentScalarWhereInput[];
};
export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutRepliesInput, Prisma.CommentUncheckedCreateWithoutRepliesInput>;
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutRepliesInput;
    connect?: Prisma.CommentWhereUniqueInput;
};
export type CommentCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutParentInput, Prisma.CommentUncheckedCreateWithoutParentInput> | Prisma.CommentCreateWithoutParentInput[] | Prisma.CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutParentInput | Prisma.CommentCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.CommentCreateManyParentInputEnvelope;
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
};
export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutParentInput, Prisma.CommentUncheckedCreateWithoutParentInput> | Prisma.CommentCreateWithoutParentInput[] | Prisma.CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutParentInput | Prisma.CommentCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.CommentCreateManyParentInputEnvelope;
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
};
export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutRepliesInput, Prisma.CommentUncheckedCreateWithoutRepliesInput>;
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutRepliesInput;
    upsert?: Prisma.CommentUpsertWithoutRepliesInput;
    disconnect?: Prisma.CommentWhereInput | boolean;
    delete?: Prisma.CommentWhereInput | boolean;
    connect?: Prisma.CommentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommentUpdateToOneWithWhereWithoutRepliesInput, Prisma.CommentUpdateWithoutRepliesInput>, Prisma.CommentUncheckedUpdateWithoutRepliesInput>;
};
export type CommentUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutParentInput, Prisma.CommentUncheckedCreateWithoutParentInput> | Prisma.CommentCreateWithoutParentInput[] | Prisma.CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutParentInput | Prisma.CommentCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.CommentUpsertWithWhereUniqueWithoutParentInput | Prisma.CommentUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.CommentCreateManyParentInputEnvelope;
    set?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    disconnect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    delete?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    update?: Prisma.CommentUpdateWithWhereUniqueWithoutParentInput | Prisma.CommentUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.CommentUpdateManyWithWhereWithoutParentInput | Prisma.CommentUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.CommentScalarWhereInput | Prisma.CommentScalarWhereInput[];
};
export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.CommentCreateWithoutParentInput, Prisma.CommentUncheckedCreateWithoutParentInput> | Prisma.CommentCreateWithoutParentInput[] | Prisma.CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.CommentCreateOrConnectWithoutParentInput | Prisma.CommentCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.CommentUpsertWithWhereUniqueWithoutParentInput | Prisma.CommentUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.CommentCreateManyParentInputEnvelope;
    set?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    disconnect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    delete?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    connect?: Prisma.CommentWhereUniqueInput | Prisma.CommentWhereUniqueInput[];
    update?: Prisma.CommentUpdateWithWhereUniqueWithoutParentInput | Prisma.CommentUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.CommentUpdateManyWithWhereWithoutParentInput | Prisma.CommentUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.CommentScalarWhereInput | Prisma.CommentScalarWhereInput[];
};
export type CommentCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    post: Prisma.PostCreateNestedOneWithoutCommentsInput;
    parent?: Prisma.CommentCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.CommentCreateNestedManyWithoutParentInput;
};
export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    postId: string;
    parentId?: string | null;
    createdAt?: Date | string;
    replies?: Prisma.CommentUncheckedCreateNestedManyWithoutParentInput;
};
export type CommentCreateOrConnectWithoutAuthorInput = {
    where: Prisma.CommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentCreateWithoutAuthorInput, Prisma.CommentUncheckedCreateWithoutAuthorInput>;
};
export type CommentCreateManyAuthorInputEnvelope = {
    data: Prisma.CommentCreateManyAuthorInput | Prisma.CommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.CommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommentUpdateWithoutAuthorInput, Prisma.CommentUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.CommentCreateWithoutAuthorInput, Prisma.CommentUncheckedCreateWithoutAuthorInput>;
};
export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.CommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommentUpdateWithoutAuthorInput, Prisma.CommentUncheckedUpdateWithoutAuthorInput>;
};
export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.CommentScalarWhereInput;
    data: Prisma.XOR<Prisma.CommentUpdateManyMutationInput, Prisma.CommentUncheckedUpdateManyWithoutAuthorInput>;
};
export type CommentScalarWhereInput = {
    AND?: Prisma.CommentScalarWhereInput | Prisma.CommentScalarWhereInput[];
    OR?: Prisma.CommentScalarWhereInput[];
    NOT?: Prisma.CommentScalarWhereInput | Prisma.CommentScalarWhereInput[];
    id?: Prisma.StringFilter<"Comment"> | string;
    content?: Prisma.StringFilter<"Comment"> | string;
    authorId?: Prisma.StringFilter<"Comment"> | string;
    postId?: Prisma.StringFilter<"Comment"> | string;
    parentId?: Prisma.StringNullableFilter<"Comment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Comment"> | Date | string;
};
export type CommentCreateWithoutPostInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutCommentsInput;
    parent?: Prisma.CommentCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.CommentCreateNestedManyWithoutParentInput;
};
export type CommentUncheckedCreateWithoutPostInput = {
    id?: string;
    content: string;
    authorId: string;
    parentId?: string | null;
    createdAt?: Date | string;
    replies?: Prisma.CommentUncheckedCreateNestedManyWithoutParentInput;
};
export type CommentCreateOrConnectWithoutPostInput = {
    where: Prisma.CommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentCreateWithoutPostInput, Prisma.CommentUncheckedCreateWithoutPostInput>;
};
export type CommentCreateManyPostInputEnvelope = {
    data: Prisma.CommentCreateManyPostInput | Prisma.CommentCreateManyPostInput[];
    skipDuplicates?: boolean;
};
export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: Prisma.CommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommentUpdateWithoutPostInput, Prisma.CommentUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.CommentCreateWithoutPostInput, Prisma.CommentUncheckedCreateWithoutPostInput>;
};
export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: Prisma.CommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommentUpdateWithoutPostInput, Prisma.CommentUncheckedUpdateWithoutPostInput>;
};
export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: Prisma.CommentScalarWhereInput;
    data: Prisma.XOR<Prisma.CommentUpdateManyMutationInput, Prisma.CommentUncheckedUpdateManyWithoutPostInput>;
};
export type CommentCreateWithoutRepliesInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutCommentsInput;
    post: Prisma.PostCreateNestedOneWithoutCommentsInput;
    parent?: Prisma.CommentCreateNestedOneWithoutRepliesInput;
};
export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string;
    content: string;
    authorId: string;
    postId: string;
    parentId?: string | null;
    createdAt?: Date | string;
};
export type CommentCreateOrConnectWithoutRepliesInput = {
    where: Prisma.CommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentCreateWithoutRepliesInput, Prisma.CommentUncheckedCreateWithoutRepliesInput>;
};
export type CommentCreateWithoutParentInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutCommentsInput;
    post: Prisma.PostCreateNestedOneWithoutCommentsInput;
    replies?: Prisma.CommentCreateNestedManyWithoutParentInput;
};
export type CommentUncheckedCreateWithoutParentInput = {
    id?: string;
    content: string;
    authorId: string;
    postId: string;
    createdAt?: Date | string;
    replies?: Prisma.CommentUncheckedCreateNestedManyWithoutParentInput;
};
export type CommentCreateOrConnectWithoutParentInput = {
    where: Prisma.CommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentCreateWithoutParentInput, Prisma.CommentUncheckedCreateWithoutParentInput>;
};
export type CommentCreateManyParentInputEnvelope = {
    data: Prisma.CommentCreateManyParentInput | Prisma.CommentCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type CommentUpsertWithoutRepliesInput = {
    update: Prisma.XOR<Prisma.CommentUpdateWithoutRepliesInput, Prisma.CommentUncheckedUpdateWithoutRepliesInput>;
    create: Prisma.XOR<Prisma.CommentCreateWithoutRepliesInput, Prisma.CommentUncheckedCreateWithoutRepliesInput>;
    where?: Prisma.CommentWhereInput;
};
export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: Prisma.CommentWhereInput;
    data: Prisma.XOR<Prisma.CommentUpdateWithoutRepliesInput, Prisma.CommentUncheckedUpdateWithoutRepliesInput>;
};
export type CommentUpdateWithoutRepliesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput;
    post?: Prisma.PostUpdateOneRequiredWithoutCommentsNestedInput;
    parent?: Prisma.CommentUpdateOneWithoutRepliesNestedInput;
};
export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.CommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommentUpdateWithoutParentInput, Prisma.CommentUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.CommentCreateWithoutParentInput, Prisma.CommentUncheckedCreateWithoutParentInput>;
};
export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.CommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommentUpdateWithoutParentInput, Prisma.CommentUncheckedUpdateWithoutParentInput>;
};
export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.CommentScalarWhereInput;
    data: Prisma.XOR<Prisma.CommentUpdateManyMutationInput, Prisma.CommentUncheckedUpdateManyWithoutParentInput>;
};
export type CommentCreateManyAuthorInput = {
    id?: string;
    content: string;
    postId: string;
    parentId?: string | null;
    createdAt?: Date | string;
};
export type CommentUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.PostUpdateOneRequiredWithoutCommentsNestedInput;
    parent?: Prisma.CommentUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.CommentUpdateManyWithoutParentNestedInput;
};
export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: Prisma.CommentUncheckedUpdateManyWithoutParentNestedInput;
};
export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentCreateManyPostInput = {
    id?: string;
    content: string;
    authorId: string;
    parentId?: string | null;
    createdAt?: Date | string;
};
export type CommentUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput;
    parent?: Prisma.CommentUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.CommentUpdateManyWithoutParentNestedInput;
};
export type CommentUncheckedUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: Prisma.CommentUncheckedUpdateManyWithoutParentNestedInput;
};
export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentCreateManyParentInput = {
    id?: string;
    content: string;
    authorId: string;
    postId: string;
    createdAt?: Date | string;
};
export type CommentUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput;
    post?: Prisma.PostUpdateOneRequiredWithoutCommentsNestedInput;
    replies?: Prisma.CommentUpdateManyWithoutParentNestedInput;
};
export type CommentUncheckedUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: Prisma.CommentUncheckedUpdateManyWithoutParentNestedInput;
};
export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CommentCountOutputType
 */
export type CommentCountOutputType = {
    replies: number;
};
export type CommentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs;
};
/**
 * CommentCountOutputType without action
 */
export type CommentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: Prisma.CommentCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CommentCountOutputType without action
 */
export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type CommentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    authorId?: boolean;
    postId?: boolean;
    parentId?: boolean;
    createdAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Comment$parentArgs<ExtArgs>;
    replies?: boolean | Prisma.Comment$repliesArgs<ExtArgs>;
    _count?: boolean | Prisma.CommentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comment"]>;
export type CommentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    authorId?: boolean;
    postId?: boolean;
    parentId?: boolean;
    createdAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Comment$parentArgs<ExtArgs>;
}, ExtArgs["result"]["comment"]>;
export type CommentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    authorId?: boolean;
    postId?: boolean;
    parentId?: boolean;
    createdAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Comment$parentArgs<ExtArgs>;
}, ExtArgs["result"]["comment"]>;
export type CommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    authorId?: boolean;
    postId?: boolean;
    parentId?: boolean;
    createdAt?: boolean;
};
export type CommentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "content" | "authorId" | "postId" | "parentId" | "createdAt", ExtArgs["result"]["comment"]>;
export type CommentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Comment$parentArgs<ExtArgs>;
    replies?: boolean | Prisma.Comment$repliesArgs<ExtArgs>;
    _count?: boolean | Prisma.CommentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CommentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Comment$parentArgs<ExtArgs>;
};
export type CommentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Comment$parentArgs<ExtArgs>;
};
export type $CommentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Comment";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        post: Prisma.$PostPayload<ExtArgs>;
        parent: Prisma.$CommentPayload<ExtArgs> | null;
        replies: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        content: string;
        authorId: string;
        postId: string;
        parentId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["comment"]>;
    composites: {};
};
export type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommentPayload, S>;
export type CommentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentCountAggregateInputType | true;
};
export interface CommentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Comment'];
        meta: {
            name: 'Comment';
        };
    };
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: Prisma.SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: Prisma.SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommentFindManyArgs>(args?: Prisma.SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     */
    create<T extends CommentCreateArgs>(args: Prisma.SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentCreateManyArgs>(args?: Prisma.SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     */
    delete<T extends CommentDeleteArgs>(args: Prisma.SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentUpdateArgs>(args: Prisma.SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentUpdateManyArgs>(args: Prisma.SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: Prisma.SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(args?: Prisma.Subset<T, CommentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Prisma.Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>;
    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CommentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommentGroupByArgs['orderBy'];
    } : {
        orderBy?: CommentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment model
     */
    readonly fields: CommentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Comment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CommentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    post<T extends Prisma.PostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PostDefaultArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parent<T extends Prisma.Comment$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Comment$parentArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    replies<T extends Prisma.Comment$repliesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Comment model
 */
export interface CommentFieldRefs {
    readonly id: Prisma.FieldRef<"Comment", 'String'>;
    readonly content: Prisma.FieldRef<"Comment", 'String'>;
    readonly authorId: Prisma.FieldRef<"Comment", 'String'>;
    readonly postId: Prisma.FieldRef<"Comment", 'String'>;
    readonly parentId: Prisma.FieldRef<"Comment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Comment", 'DateTime'>;
}
/**
 * Comment findUnique
 */
export type CommentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Comment to fetch.
     */
    where: Prisma.CommentWhereUniqueInput;
};
/**
 * Comment findUniqueOrThrow
 */
export type CommentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Comment to fetch.
     */
    where: Prisma.CommentWhereUniqueInput;
};
/**
 * Comment findFirst
 */
export type CommentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Comment to fetch.
     */
    where?: Prisma.CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: Prisma.CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
/**
 * Comment findFirstOrThrow
 */
export type CommentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Comment to fetch.
     */
    where?: Prisma.CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: Prisma.CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
/**
 * Comment findMany
 */
export type CommentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Comments to fetch.
     */
    where?: Prisma.CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: Prisma.CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
/**
 * Comment create
 */
export type CommentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Comment.
     */
    data: Prisma.XOR<Prisma.CommentCreateInput, Prisma.CommentUncheckedCreateInput>;
};
/**
 * Comment createMany
 */
export type CommentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: Prisma.CommentCreateManyInput | Prisma.CommentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Comment createManyAndReturn
 */
export type CommentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: Prisma.CommentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    /**
     * The data used to create many Comments.
     */
    data: Prisma.CommentCreateManyInput | Prisma.CommentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Comment update
 */
export type CommentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Comment.
     */
    data: Prisma.XOR<Prisma.CommentUpdateInput, Prisma.CommentUncheckedUpdateInput>;
    /**
     * Choose, which Comment to update.
     */
    where: Prisma.CommentWhereUniqueInput;
};
/**
 * Comment updateMany
 */
export type CommentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: Prisma.XOR<Prisma.CommentUpdateManyMutationInput, Prisma.CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: Prisma.CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
};
/**
 * Comment updateManyAndReturn
 */
export type CommentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: Prisma.CommentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    /**
     * The data used to update Comments.
     */
    data: Prisma.XOR<Prisma.CommentUpdateManyMutationInput, Prisma.CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: Prisma.CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Comment upsert
 */
export type CommentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: Prisma.CommentWhereUniqueInput;
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: Prisma.XOR<Prisma.CommentCreateInput, Prisma.CommentUncheckedCreateInput>;
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CommentUpdateInput, Prisma.CommentUncheckedUpdateInput>;
};
/**
 * Comment delete
 */
export type CommentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Comment to delete.
     */
    where: Prisma.CommentWhereUniqueInput;
};
/**
 * Comment deleteMany
 */
export type CommentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: Prisma.CommentWhereInput;
    /**
     * Limit how many Comments to delete.
     */
    limit?: number;
};
/**
 * Comment.parent
 */
export type Comment$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Comment.replies
 */
export type Comment$repliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Comment without action
 */
export type CommentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Comment.d.ts.map