export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

export type Board = {
  __typename?: 'Board';
  columns?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  slug: Scalars['String'];
  ticketCollection?: Maybe<TicketConnection>;
  title: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  workspace?: Maybe<Workspace>;
  workspaceId: Scalars['Int'];
};


export type BoardTicketCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TicketFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TicketOrderBy>>;
};

export type BoardConnection = {
  __typename?: 'BoardConnection';
  edges: Array<BoardEdge>;
  pageInfo: PageInfo;
};

export type BoardDeleteResponse = {
  __typename?: 'BoardDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Board>;
};

export type BoardEdge = {
  __typename?: 'BoardEdge';
  cursor: Scalars['String'];
  node?: Maybe<Board>;
};

export type BoardFilter = {
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  workspaceId?: InputMaybe<IntFilter>;
};

export type BoardInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  workspaceId?: InputMaybe<Scalars['Int']>;
};

export type BoardInsertResponse = {
  __typename?: 'BoardInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Board>;
};

export type BoardOrderBy = {
  columns?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  workspaceId?: InputMaybe<OrderByDirection>;
};

export type BoardUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  workspaceId?: InputMaybe<Scalars['Int']>;
};

export type BoardUpdateResponse = {
  __typename?: 'BoardUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Board>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  thread?: Maybe<Thread>;
  threadId: Scalars['Int'];
  updatedAt: Scalars['Datetime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
};

export type CommentDeleteResponse = {
  __typename?: 'CommentDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Comment>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String'];
  node?: Maybe<Comment>;
};

export type CommentFilter = {
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  threadId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentInsertInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  threadId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type CommentInsertResponse = {
  __typename?: 'CommentInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Comment>;
};

export type CommentOrderBy = {
  body?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  threadId?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type CommentUpdateInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  threadId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type CommentUpdateResponse = {
  __typename?: 'CommentUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Comment>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  threadCollection?: Maybe<ThreadConnection>;
  type: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  workspace?: Maybe<Workspace>;
  workspaceId: Scalars['Int'];
};


export type GroupThreadCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ThreadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ThreadOrderBy>>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  edges: Array<GroupEdge>;
  pageInfo: PageInfo;
};

export type GroupDeleteResponse = {
  __typename?: 'GroupDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Group>;
};

export type GroupEdge = {
  __typename?: 'GroupEdge';
  cursor: Scalars['String'];
  node?: Maybe<Group>;
};

export type GroupFilter = {
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  workspaceId?: InputMaybe<IntFilter>;
};

export type GroupInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  workspaceId?: InputMaybe<Scalars['Int']>;
};

export type GroupInsertResponse = {
  __typename?: 'GroupInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Group>;
};

export type GroupOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  workspaceId?: InputMaybe<OrderByDirection>;
};

export type GroupUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  workspaceId?: InputMaybe<Scalars['Int']>;
};

export type GroupUpdateResponse = {
  __typename?: 'GroupUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Group>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars['JSON']>;
  neq?: InputMaybe<Scalars['JSON']>;
};

export type Member = {
  __typename?: 'Member';
  createdAt: Scalars['Datetime'];
  role: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
  workspace?: Maybe<Workspace>;
  workspaceId: Scalars['Int'];
};

export type MemberConnection = {
  __typename?: 'MemberConnection';
  edges: Array<MemberEdge>;
  pageInfo: PageInfo;
};

export type MemberDeleteResponse = {
  __typename?: 'MemberDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

export type MemberEdge = {
  __typename?: 'MemberEdge';
  cursor: Scalars['String'];
  node?: Maybe<Member>;
};

export type MemberFilter = {
  createdAt?: InputMaybe<DatetimeFilter>;
  role?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<StringFilter>;
  workspaceId?: InputMaybe<IntFilter>;
};

export type MemberInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['Int']>;
};

export type MemberInsertResponse = {
  __typename?: 'MemberInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

export type MemberOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  workspaceId?: InputMaybe<OrderByDirection>;
};

export type MemberUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['Int']>;
};

export type MemberUpdateResponse = {
  __typename?: 'MemberUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the collection */
  deleteFromBoardCollection: BoardDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromCommentCollection: CommentDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromGroupCollection: GroupDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromMemberCollection: MemberDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromThreadCollection: ThreadDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromTicketCollection: TicketDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromUserCollection: UserDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromWikiCollection: WikiDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromWorkspaceCollection: WorkspaceDeleteResponse;
  /** Adds one or more `BoardInsertResponse` records to the collection */
  insertIntoBoardCollection?: Maybe<BoardInsertResponse>;
  /** Adds one or more `CommentInsertResponse` records to the collection */
  insertIntoCommentCollection?: Maybe<CommentInsertResponse>;
  /** Adds one or more `GroupInsertResponse` records to the collection */
  insertIntoGroupCollection?: Maybe<GroupInsertResponse>;
  /** Adds one or more `MemberInsertResponse` records to the collection */
  insertIntoMemberCollection?: Maybe<MemberInsertResponse>;
  /** Adds one or more `ThreadInsertResponse` records to the collection */
  insertIntoThreadCollection?: Maybe<ThreadInsertResponse>;
  /** Adds one or more `TicketInsertResponse` records to the collection */
  insertIntoTicketCollection?: Maybe<TicketInsertResponse>;
  /** Adds one or more `UserInsertResponse` records to the collection */
  insertIntoUserCollection?: Maybe<UserInsertResponse>;
  /** Adds one or more `WikiInsertResponse` records to the collection */
  insertIntoWikiCollection?: Maybe<WikiInsertResponse>;
  /** Adds one or more `WorkspaceInsertResponse` records to the collection */
  insertIntoWorkspaceCollection?: Maybe<WorkspaceInsertResponse>;
  /** Updates zero or more records in the collection */
  updateBoardCollection: BoardUpdateResponse;
  /** Updates zero or more records in the collection */
  updateCommentCollection: CommentUpdateResponse;
  /** Updates zero or more records in the collection */
  updateGroupCollection: GroupUpdateResponse;
  /** Updates zero or more records in the collection */
  updateMemberCollection: MemberUpdateResponse;
  /** Updates zero or more records in the collection */
  updateThreadCollection: ThreadUpdateResponse;
  /** Updates zero or more records in the collection */
  updateTicketCollection: TicketUpdateResponse;
  /** Updates zero or more records in the collection */
  updateUserCollection: UserUpdateResponse;
  /** Updates zero or more records in the collection */
  updateWikiCollection: WikiUpdateResponse;
  /** Updates zero or more records in the collection */
  updateWorkspaceCollection: WorkspaceUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromBoardCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<BoardFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromCommentCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<CommentFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGroupCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GroupFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromMemberCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MemberFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromThreadCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ThreadFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromTicketCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TicketFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromWikiCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<WikiFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromWorkspaceCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<WorkspaceFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoBoardCollectionArgs = {
  objects: Array<BoardInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoCommentCollectionArgs = {
  objects: Array<CommentInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGroupCollectionArgs = {
  objects: Array<GroupInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoMemberCollectionArgs = {
  objects: Array<MemberInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoThreadCollectionArgs = {
  objects: Array<ThreadInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoTicketCollectionArgs = {
  objects: Array<TicketInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUserCollectionArgs = {
  objects: Array<UserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoWikiCollectionArgs = {
  objects: Array<WikiInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoWorkspaceCollectionArgs = {
  objects: Array<WorkspaceInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateBoardCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<BoardFilter>;
  set: BoardUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateCommentCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<CommentFilter>;
  set: CommentUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGroupCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GroupFilter>;
  set: GroupUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateMemberCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MemberFilter>;
  set: MemberUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateThreadCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ThreadFilter>;
  set: ThreadUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateTicketCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TicketFilter>;
  set: TicketUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UserFilter>;
  set: UserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateWikiCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<WikiFilter>;
  set: WikiUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateWorkspaceCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<WorkspaceFilter>;
  set: WorkspaceUpdateInput;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  AscNullsFirst = 'AscNullsFirst',
  AscNullsLast = 'AscNullsLast',
  DescNullsFirst = 'DescNullsFirst',
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `Board` */
  boardCollection?: Maybe<BoardConnection>;
  /** A pagable collection of type `Comment` */
  commentCollection?: Maybe<CommentConnection>;
  /** A pagable collection of type `Group` */
  groupCollection?: Maybe<GroupConnection>;
  /** A pagable collection of type `Member` */
  memberCollection?: Maybe<MemberConnection>;
  /** A pagable collection of type `Thread` */
  threadCollection?: Maybe<ThreadConnection>;
  /** A pagable collection of type `Ticket` */
  ticketCollection?: Maybe<TicketConnection>;
  /** A pagable collection of type `User` */
  userCollection?: Maybe<UserConnection>;
  /** A pagable collection of type `Wiki` */
  wikiCollection?: Maybe<WikiConnection>;
  /** A pagable collection of type `Workspace` */
  workspaceCollection?: Maybe<WorkspaceConnection>;
};


/** The root type for querying data */
export type QueryBoardCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<BoardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BoardOrderBy>>;
};


/** The root type for querying data */
export type QueryCommentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
};


/** The root type for querying data */
export type QueryGroupCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GroupFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOrderBy>>;
};


/** The root type for querying data */
export type QueryMemberCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MemberFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MemberOrderBy>>;
};


/** The root type for querying data */
export type QueryThreadCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ThreadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ThreadOrderBy>>;
};


/** The root type for querying data */
export type QueryTicketCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TicketFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TicketOrderBy>>;
};


/** The root type for querying data */
export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};


/** The root type for querying data */
export type QueryWikiCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<WikiFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WikiOrderBy>>;
};


/** The root type for querying data */
export type QueryWorkspaceCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<WorkspaceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WorkspaceOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type Thread = {
  __typename?: 'Thread';
  body: Scalars['String'];
  commentCollection?: Maybe<CommentConnection>;
  createdAt: Scalars['Datetime'];
  group?: Maybe<Group>;
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  status: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};


export type ThreadCommentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
};

export type ThreadConnection = {
  __typename?: 'ThreadConnection';
  edges: Array<ThreadEdge>;
  pageInfo: PageInfo;
};

export type ThreadDeleteResponse = {
  __typename?: 'ThreadDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Thread>;
};

export type ThreadEdge = {
  __typename?: 'ThreadEdge';
  cursor: Scalars['String'];
  node?: Maybe<Thread>;
};

export type ThreadFilter = {
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ThreadInsertInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  groupId?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type ThreadInsertResponse = {
  __typename?: 'ThreadInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Thread>;
};

export type ThreadOrderBy = {
  body?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  groupId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type ThreadUpdateInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  groupId?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type ThreadUpdateResponse = {
  __typename?: 'ThreadUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Thread>;
};

export type Ticket = {
  __typename?: 'Ticket';
  board?: Maybe<Board>;
  boardId: Scalars['Int'];
  column: Scalars['String'];
  createdAt: Scalars['Datetime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  slug: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type TicketConnection = {
  __typename?: 'TicketConnection';
  edges: Array<TicketEdge>;
  pageInfo: PageInfo;
};

export type TicketDeleteResponse = {
  __typename?: 'TicketDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Ticket>;
};

export type TicketEdge = {
  __typename?: 'TicketEdge';
  cursor: Scalars['String'];
  node?: Maybe<Ticket>;
};

export type TicketFilter = {
  boardId?: InputMaybe<IntFilter>;
  column?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TicketInsertInput = {
  boardId?: InputMaybe<Scalars['Int']>;
  column?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type TicketInsertResponse = {
  __typename?: 'TicketInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Ticket>;
};

export type TicketOrderBy = {
  boardId?: InputMaybe<OrderByDirection>;
  column?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type TicketUpdateInput = {
  boardId?: InputMaybe<Scalars['Int']>;
  column?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type TicketUpdateResponse = {
  __typename?: 'TicketUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Ticket>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type User = {
  __typename?: 'User';
  commentCollection?: Maybe<CommentConnection>;
  createdAt: Scalars['Datetime'];
  email: Scalars['String'];
  id: Scalars['String'];
  memberCollection?: Maybe<MemberConnection>;
  name: Scalars['String'];
  threadCollection?: Maybe<ThreadConnection>;
  ticketCollection?: Maybe<TicketConnection>;
  updatedAt: Scalars['Datetime'];
  wikiCollection?: Maybe<WikiConnection>;
};


export type UserCommentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
};


export type UserMemberCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MemberFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MemberOrderBy>>;
};


export type UserThreadCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ThreadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ThreadOrderBy>>;
};


export type UserTicketCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TicketFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TicketOrderBy>>;
};


export type UserWikiCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<WikiFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WikiOrderBy>>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node?: Maybe<User>;
};

export type UserFilter = {
  createdAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type UserInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type UserInsertResponse = {
  __typename?: 'UserInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type Wiki = {
  __typename?: 'Wiki';
  body: Scalars['String'];
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  slug: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
  workspace?: Maybe<Workspace>;
  workspaceId: Scalars['Int'];
};

export type WikiConnection = {
  __typename?: 'WikiConnection';
  edges: Array<WikiEdge>;
  pageInfo: PageInfo;
};

export type WikiDeleteResponse = {
  __typename?: 'WikiDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wiki>;
};

export type WikiEdge = {
  __typename?: 'WikiEdge';
  cursor: Scalars['String'];
  node?: Maybe<Wiki>;
};

export type WikiFilter = {
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<StringFilter>;
  workspaceId?: InputMaybe<IntFilter>;
};

export type WikiInsertInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['Int']>;
};

export type WikiInsertResponse = {
  __typename?: 'WikiInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wiki>;
};

export type WikiOrderBy = {
  body?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  workspaceId?: InputMaybe<OrderByDirection>;
};

export type WikiUpdateInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['Int']>;
};

export type WikiUpdateResponse = {
  __typename?: 'WikiUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Wiki>;
};

export type Workspace = {
  __typename?: 'Workspace';
  boardCollection?: Maybe<BoardConnection>;
  createdAt: Scalars['Datetime'];
  groupCollection?: Maybe<GroupConnection>;
  id: Scalars['Int'];
  memberCollection?: Maybe<MemberConnection>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  wikiCollection?: Maybe<WikiConnection>;
};


export type WorkspaceBoardCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<BoardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BoardOrderBy>>;
};


export type WorkspaceGroupCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GroupFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOrderBy>>;
};


export type WorkspaceMemberCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MemberFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MemberOrderBy>>;
};


export type WorkspaceWikiCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<WikiFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WikiOrderBy>>;
};

export type WorkspaceConnection = {
  __typename?: 'WorkspaceConnection';
  edges: Array<WorkspaceEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceDeleteResponse = {
  __typename?: 'WorkspaceDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Workspace>;
};

export type WorkspaceEdge = {
  __typename?: 'WorkspaceEdge';
  cursor: Scalars['String'];
  node?: Maybe<Workspace>;
};

export type WorkspaceFilter = {
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type WorkspaceInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type WorkspaceInsertResponse = {
  __typename?: 'WorkspaceInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Workspace>;
};

export type WorkspaceOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type WorkspaceUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type WorkspaceUpdateResponse = {
  __typename?: 'WorkspaceUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Workspace>;
};
