import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageResume: Array<Resume>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageResumeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ResumeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  backgroundImageHero?: InputMaybe<HeroCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageResume?: InputMaybe<ResumeCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mediaMediaAsset?: InputMaybe<MediaAssetCreateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageResume_every?: InputMaybe<ResumeWhereInput>;
  imageResume_none?: InputMaybe<ResumeWhereInput>;
  imageResume_some?: InputMaybe<ResumeWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  backgroundImageHero?: InputMaybe<HeroUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageResume?: InputMaybe<ResumeUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mediaMediaAsset?: InputMaybe<MediaAssetUpdateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageResume_every?: InputMaybe<ResumeWhereInput>;
  imageResume_none?: InputMaybe<ResumeWhereInput>;
  imageResume_some?: InputMaybe<ResumeWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

/** Hero component  */
export type Hero = {
  __typename?: 'Hero';
  backgroundColor?: Maybe<Color>;
  backgroundImage?: Maybe<Asset>;
  /** Heading of the Hero */
  heading: Scalars['String'];
  icon?: Maybe<Icon>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
  /** Sub heading  */
  subHeading?: Maybe<Scalars['String']>;
};


/** Hero component  */
export type HeroBackgroundImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Hero component  */
export type HeroIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  backgroundImage?: InputMaybe<AssetCreateOneInlineInput>;
  heading: Scalars['String'];
  icon?: InputMaybe<IconCreateOneInlineInput>;
  subHeading?: InputMaybe<Scalars['String']>;
};

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<IconWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  subHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subHeading_starts_with?: InputMaybe<Scalars['String']>;
};

export enum HeroOrderByInput {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC'
}

export type HeroParent = Layout;

export type HeroParentConnectInput = {
  Layout?: InputMaybe<LayoutConnectInput>;
};

export type HeroParentCreateInput = {
  Layout?: InputMaybe<LayoutCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentUpdateInput = {
  Layout?: InputMaybe<LayoutUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentConnectInput>>;
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Update multiple HeroParent documents */
  update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
  Layout?: InputMaybe<LayoutUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  Layout?: InputMaybe<LayoutUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  Layout?: InputMaybe<LayoutUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
  Layout?: InputMaybe<LayoutWhereInput>;
};

export type HeroParentWhereUniqueInput = {
  Layout?: InputMaybe<LayoutWhereUniqueInput>;
};

export type HeroUpdateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  backgroundImage?: InputMaybe<AssetUpdateOneInlineInput>;
  heading?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<IconUpdateOneInlineInput>;
  subHeading?: InputMaybe<Scalars['String']>;
};

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  heading?: InputMaybe<Scalars['String']>;
  subHeading?: InputMaybe<Scalars['String']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<IconWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  subHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subHeading_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Icon component */
export type Icon = {
  __typename?: 'Icon';
  /** The unique identifier */
  id: Scalars['ID'];
  /** Name of icon you want to use */
  name: IconNames;
  /** Size of the Icon */
  size?: Maybe<Size>;
  /** System stage field */
  stage: Stage;
};

export type IconConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: IconWhereUniqueInput;
};

/** A connection to a list of items. */
export type IconConnection = {
  __typename?: 'IconConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<IconEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type IconCreateInput = {
  name: IconNames;
  size?: InputMaybe<Size>;
};

export type IconCreateManyInlineInput = {
  /** Create and connect multiple existing Icon documents */
  create?: InputMaybe<Array<IconCreateInput>>;
};

export type IconCreateOneInlineInput = {
  /** Create and connect one Icon document */
  create?: InputMaybe<IconCreateInput>;
};

export type IconCreateWithPositionInput = {
  /** Document to create */
  data: IconCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type IconEdge = {
  __typename?: 'IconEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Icon;
};

/** Identifies documents */
export type IconManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IconWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IconWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IconWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<IconNames>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<IconNames>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<IconNames>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<IconNames>>>;
  size?: InputMaybe<Size>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Size>>>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Size>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Size>>>;
};

/** Names of icons */
export enum IconNames {
  Code = 'code',
  Download = 'download',
  Monitor = 'monitor',
  Zap = 'zap'
}

export enum IconOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export type IconParent = Hero | PagePreview;

export type IconParentConnectInput = {
  Hero?: InputMaybe<HeroConnectInput>;
  PagePreview?: InputMaybe<PagePreviewConnectInput>;
};

export type IconParentCreateInput = {
  Hero?: InputMaybe<HeroCreateInput>;
  PagePreview?: InputMaybe<PagePreviewCreateInput>;
};

export type IconParentCreateManyInlineInput = {
  /** Connect multiple existing IconParent documents */
  connect?: InputMaybe<Array<IconParentWhereUniqueInput>>;
  /** Create and connect multiple existing IconParent documents */
  create?: InputMaybe<Array<IconParentCreateInput>>;
};

export type IconParentCreateOneInlineInput = {
  /** Connect one existing IconParent document */
  connect?: InputMaybe<IconParentWhereUniqueInput>;
  /** Create and connect one IconParent document */
  create?: InputMaybe<IconParentCreateInput>;
};

export type IconParentUpdateInput = {
  Hero?: InputMaybe<HeroUpdateInput>;
  PagePreview?: InputMaybe<PagePreviewUpdateInput>;
};

export type IconParentUpdateManyInlineInput = {
  /** Connect multiple existing IconParent documents */
  connect?: InputMaybe<Array<IconParentConnectInput>>;
  /** Create and connect multiple IconParent documents */
  create?: InputMaybe<Array<IconParentCreateInput>>;
  /** Delete multiple IconParent documents */
  delete?: InputMaybe<Array<IconParentWhereUniqueInput>>;
  /** Disconnect multiple IconParent documents */
  disconnect?: InputMaybe<Array<IconParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing IconParent documents */
  set?: InputMaybe<Array<IconParentWhereUniqueInput>>;
  /** Update multiple IconParent documents */
  update?: InputMaybe<Array<IconParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple IconParent documents */
  upsert?: InputMaybe<Array<IconParentUpsertWithNestedWhereUniqueInput>>;
};

export type IconParentUpdateManyWithNestedWhereInput = {
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  PagePreview?: InputMaybe<PagePreviewUpdateManyWithNestedWhereInput>;
};

export type IconParentUpdateOneInlineInput = {
  /** Connect existing IconParent document */
  connect?: InputMaybe<IconParentWhereUniqueInput>;
  /** Create and connect one IconParent document */
  create?: InputMaybe<IconParentCreateInput>;
  /** Delete currently connected IconParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected IconParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single IconParent document */
  update?: InputMaybe<IconParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single IconParent document */
  upsert?: InputMaybe<IconParentUpsertWithNestedWhereUniqueInput>;
};

export type IconParentUpdateWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  PagePreview?: InputMaybe<PagePreviewUpdateWithNestedWhereUniqueInput>;
};

export type IconParentUpsertWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  PagePreview?: InputMaybe<PagePreviewUpsertWithNestedWhereUniqueInput>;
};

export type IconParentWhereInput = {
  Hero?: InputMaybe<HeroWhereInput>;
  PagePreview?: InputMaybe<PagePreviewWhereInput>;
};

export type IconParentWhereUniqueInput = {
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  PagePreview?: InputMaybe<PagePreviewWhereUniqueInput>;
};

export type IconUpdateInput = {
  name?: InputMaybe<IconNames>;
  size?: InputMaybe<Size>;
};

export type IconUpdateManyInlineInput = {
  /** Create and connect multiple Icon component instances */
  create?: InputMaybe<Array<IconCreateWithPositionInput>>;
  /** Delete multiple Icon documents */
  delete?: InputMaybe<Array<IconWhereUniqueInput>>;
  /** Update multiple Icon component instances */
  update?: InputMaybe<Array<IconUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Icon component instances */
  upsert?: InputMaybe<Array<IconUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type IconUpdateManyInput = {
  name?: InputMaybe<IconNames>;
  size?: InputMaybe<Size>;
};

export type IconUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IconUpdateManyInput;
  /** Document search */
  where: IconWhereInput;
};

export type IconUpdateOneInlineInput = {
  /** Create and connect one Icon document */
  create?: InputMaybe<IconCreateInput>;
  /** Delete currently connected Icon document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Icon document */
  update?: InputMaybe<IconUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Icon document */
  upsert?: InputMaybe<IconUpsertWithNestedWhereUniqueInput>;
};

export type IconUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<IconUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: IconWhereUniqueInput;
};

export type IconUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IconUpdateInput;
  /** Unique document search */
  where: IconWhereUniqueInput;
};

export type IconUpsertInput = {
  /** Create document if it didn't exist */
  create: IconCreateInput;
  /** Update document if it exists */
  update: IconUpdateInput;
};

export type IconUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<IconUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: IconWhereUniqueInput;
};

export type IconUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IconUpsertInput;
  /** Unique document search */
  where: IconWhereUniqueInput;
};

/** Identifies documents */
export type IconWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IconWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IconWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IconWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<IconNames>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<IconNames>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<IconNames>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<IconNames>>>;
  size?: InputMaybe<Size>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Size>>>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Size>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Size>>>;
};

/** References Icon record uniquely */
export type IconWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Typical Layouts that may exists on each page */
export type Layout = Node & {
  __typename?: 'Layout';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Layout>;
  hero?: Maybe<Hero>;
  /** List of Layout versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  route: Scalars['String'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Typical Layouts that may exists on each page */
export type LayoutCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Typical Layouts that may exists on each page */
export type LayoutDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Typical Layouts that may exists on each page */
export type LayoutHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Typical Layouts that may exists on each page */
export type LayoutHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Typical Layouts that may exists on each page */
export type LayoutPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Typical Layouts that may exists on each page */
export type LayoutScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Typical Layouts that may exists on each page */
export type LayoutUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type LayoutConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LayoutWhereUniqueInput;
};

/** A connection to a list of items. */
export type LayoutConnection = {
  __typename?: 'LayoutConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LayoutEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LayoutCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  hero?: InputMaybe<HeroCreateOneInlineInput>;
  route: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LayoutCreateManyInlineInput = {
  /** Connect multiple existing Layout documents */
  connect?: InputMaybe<Array<LayoutWhereUniqueInput>>;
  /** Create and connect multiple existing Layout documents */
  create?: InputMaybe<Array<LayoutCreateInput>>;
};

export type LayoutCreateOneInlineInput = {
  /** Connect one existing Layout document */
  connect?: InputMaybe<LayoutWhereUniqueInput>;
  /** Create and connect one Layout document */
  create?: InputMaybe<LayoutCreateInput>;
};

/** An edge in a connection. */
export type LayoutEdge = {
  __typename?: 'LayoutEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Layout;
};

/** Identifies documents */
export type LayoutManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LayoutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LayoutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LayoutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LayoutWhereStageInput>;
  documentInStages_none?: InputMaybe<LayoutWhereStageInput>;
  documentInStages_some?: InputMaybe<LayoutWhereStageInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  route?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  route_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  route_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  route_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  route_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  route_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  route_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  route_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  route_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  route_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LayoutOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RouteAsc = 'route_ASC',
  RouteDesc = 'route_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LayoutUpdateInput = {
  hero?: InputMaybe<HeroUpdateOneInlineInput>;
  route?: InputMaybe<Scalars['String']>;
};

export type LayoutUpdateManyInlineInput = {
  /** Connect multiple existing Layout documents */
  connect?: InputMaybe<Array<LayoutConnectInput>>;
  /** Create and connect multiple Layout documents */
  create?: InputMaybe<Array<LayoutCreateInput>>;
  /** Delete multiple Layout documents */
  delete?: InputMaybe<Array<LayoutWhereUniqueInput>>;
  /** Disconnect multiple Layout documents */
  disconnect?: InputMaybe<Array<LayoutWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Layout documents */
  set?: InputMaybe<Array<LayoutWhereUniqueInput>>;
  /** Update multiple Layout documents */
  update?: InputMaybe<Array<LayoutUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Layout documents */
  upsert?: InputMaybe<Array<LayoutUpsertWithNestedWhereUniqueInput>>;
};

export type LayoutUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type LayoutUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LayoutUpdateManyInput;
  /** Document search */
  where: LayoutWhereInput;
};

export type LayoutUpdateOneInlineInput = {
  /** Connect existing Layout document */
  connect?: InputMaybe<LayoutWhereUniqueInput>;
  /** Create and connect one Layout document */
  create?: InputMaybe<LayoutCreateInput>;
  /** Delete currently connected Layout document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Layout document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Layout document */
  update?: InputMaybe<LayoutUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Layout document */
  upsert?: InputMaybe<LayoutUpsertWithNestedWhereUniqueInput>;
};

export type LayoutUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LayoutUpdateInput;
  /** Unique document search */
  where: LayoutWhereUniqueInput;
};

export type LayoutUpsertInput = {
  /** Create document if it didn't exist */
  create: LayoutCreateInput;
  /** Update document if it exists */
  update: LayoutUpdateInput;
};

export type LayoutUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LayoutUpsertInput;
  /** Unique document search */
  where: LayoutWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LayoutWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type LayoutWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LayoutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LayoutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LayoutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LayoutWhereStageInput>;
  documentInStages_none?: InputMaybe<LayoutWhereStageInput>;
  documentInStages_some?: InputMaybe<LayoutWhereStageInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  route?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  route_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  route_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  route_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  route_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  route_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  route_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  route_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  route_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  route_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LayoutWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LayoutWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LayoutWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LayoutWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LayoutWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Layout record uniquely */
export type LayoutWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  route?: InputMaybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** Component to be used for media blocks so additional fields can be included */
export type MediaAsset = {
  __typename?: 'MediaAsset';
  /** The unique identifier */
  id: Scalars['ID'];
  media: Asset;
  /** Meta data  */
  meta?: Maybe<Scalars['Json']>;
  /** Zero indexed based ordering (use 0 for the default media asset) */
  order: Scalars['Int'];
  /** System stage field */
  stage: Stage;
};


/** Component to be used for media blocks so additional fields can be included */
export type MediaAssetMediaArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MediaAssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MediaAssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type MediaAssetConnection = {
  __typename?: 'MediaAssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MediaAssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MediaAssetCreateInput = {
  media: AssetCreateOneInlineInput;
  meta?: InputMaybe<Scalars['Json']>;
  order: Scalars['Int'];
};

export type MediaAssetCreateManyInlineInput = {
  /** Create and connect multiple existing MediaAsset documents */
  create?: InputMaybe<Array<MediaAssetCreateInput>>;
};

export type MediaAssetCreateOneInlineInput = {
  /** Create and connect one MediaAsset document */
  create?: InputMaybe<MediaAssetCreateInput>;
};

export type MediaAssetCreateWithPositionInput = {
  /** Document to create */
  data: MediaAssetCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MediaAssetEdge = {
  __typename?: 'MediaAssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MediaAsset;
};

/** Identifies documents */
export type MediaAssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MediaAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MediaAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MediaAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<AssetWhereInput>;
  /** All values containing the given json path. */
  meta_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  meta_value_recursive?: InputMaybe<Scalars['Json']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum MediaAssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC'
}

export type MediaAssetParent = Project;

export type MediaAssetParentConnectInput = {
  Project?: InputMaybe<ProjectConnectInput>;
};

export type MediaAssetParentCreateInput = {
  Project?: InputMaybe<ProjectCreateInput>;
};

export type MediaAssetParentCreateManyInlineInput = {
  /** Connect multiple existing MediaAssetParent documents */
  connect?: InputMaybe<Array<MediaAssetParentWhereUniqueInput>>;
  /** Create and connect multiple existing MediaAssetParent documents */
  create?: InputMaybe<Array<MediaAssetParentCreateInput>>;
};

export type MediaAssetParentCreateOneInlineInput = {
  /** Connect one existing MediaAssetParent document */
  connect?: InputMaybe<MediaAssetParentWhereUniqueInput>;
  /** Create and connect one MediaAssetParent document */
  create?: InputMaybe<MediaAssetParentCreateInput>;
};

export type MediaAssetParentUpdateInput = {
  Project?: InputMaybe<ProjectUpdateInput>;
};

export type MediaAssetParentUpdateManyInlineInput = {
  /** Connect multiple existing MediaAssetParent documents */
  connect?: InputMaybe<Array<MediaAssetParentConnectInput>>;
  /** Create and connect multiple MediaAssetParent documents */
  create?: InputMaybe<Array<MediaAssetParentCreateInput>>;
  /** Delete multiple MediaAssetParent documents */
  delete?: InputMaybe<Array<MediaAssetParentWhereUniqueInput>>;
  /** Disconnect multiple MediaAssetParent documents */
  disconnect?: InputMaybe<Array<MediaAssetParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MediaAssetParent documents */
  set?: InputMaybe<Array<MediaAssetParentWhereUniqueInput>>;
  /** Update multiple MediaAssetParent documents */
  update?: InputMaybe<Array<MediaAssetParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MediaAssetParent documents */
  upsert?: InputMaybe<Array<MediaAssetParentUpsertWithNestedWhereUniqueInput>>;
};

export type MediaAssetParentUpdateManyWithNestedWhereInput = {
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type MediaAssetParentUpdateOneInlineInput = {
  /** Connect existing MediaAssetParent document */
  connect?: InputMaybe<MediaAssetParentWhereUniqueInput>;
  /** Create and connect one MediaAssetParent document */
  create?: InputMaybe<MediaAssetParentCreateInput>;
  /** Delete currently connected MediaAssetParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected MediaAssetParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single MediaAssetParent document */
  update?: InputMaybe<MediaAssetParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MediaAssetParent document */
  upsert?: InputMaybe<MediaAssetParentUpsertWithNestedWhereUniqueInput>;
};

export type MediaAssetParentUpdateWithNestedWhereUniqueInput = {
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type MediaAssetParentUpsertWithNestedWhereUniqueInput = {
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type MediaAssetParentWhereInput = {
  Project?: InputMaybe<ProjectWhereInput>;
};

export type MediaAssetParentWhereUniqueInput = {
  Project?: InputMaybe<ProjectWhereUniqueInput>;
};

export type MediaAssetUpdateInput = {
  media?: InputMaybe<AssetUpdateOneInlineInput>;
  meta?: InputMaybe<Scalars['Json']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type MediaAssetUpdateManyInlineInput = {
  /** Create and connect multiple MediaAsset component instances */
  create?: InputMaybe<Array<MediaAssetCreateWithPositionInput>>;
  /** Delete multiple MediaAsset documents */
  delete?: InputMaybe<Array<MediaAssetWhereUniqueInput>>;
  /** Update multiple MediaAsset component instances */
  update?: InputMaybe<Array<MediaAssetUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple MediaAsset component instances */
  upsert?: InputMaybe<Array<MediaAssetUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MediaAssetUpdateManyInput = {
  meta?: InputMaybe<Scalars['Json']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type MediaAssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MediaAssetUpdateManyInput;
  /** Document search */
  where: MediaAssetWhereInput;
};

export type MediaAssetUpdateOneInlineInput = {
  /** Create and connect one MediaAsset document */
  create?: InputMaybe<MediaAssetCreateInput>;
  /** Delete currently connected MediaAsset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single MediaAsset document */
  update?: InputMaybe<MediaAssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MediaAsset document */
  upsert?: InputMaybe<MediaAssetUpsertWithNestedWhereUniqueInput>;
};

export type MediaAssetUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MediaAssetUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MediaAssetWhereUniqueInput;
};

export type MediaAssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MediaAssetUpdateInput;
  /** Unique document search */
  where: MediaAssetWhereUniqueInput;
};

export type MediaAssetUpsertInput = {
  /** Create document if it didn't exist */
  create: MediaAssetCreateInput;
  /** Update document if it exists */
  update: MediaAssetUpdateInput;
};

export type MediaAssetUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MediaAssetUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MediaAssetWhereUniqueInput;
};

export type MediaAssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MediaAssetUpsertInput;
  /** Unique document search */
  where: MediaAssetWhereUniqueInput;
};

/** Identifies documents */
export type MediaAssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MediaAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MediaAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MediaAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<AssetWhereInput>;
  /** All values containing the given json path. */
  meta_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  meta_value_recursive?: InputMaybe<Scalars['Json']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** References MediaAsset record uniquely */
export type MediaAssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one layout */
  createLayout?: Maybe<Layout>;
  /** Create one pagePreview */
  createPagePreview?: Maybe<PagePreview>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one resume */
  createResume?: Maybe<Resume>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one social */
  createSocial?: Maybe<Social>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one layout from _all_ existing stages. Returns deleted document. */
  deleteLayout?: Maybe<Layout>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Layout documents
   * @deprecated Please use the new paginated many mutation (deleteManyLayoutsConnection)
   */
  deleteManyLayouts: BatchPayload;
  /** Delete many Layout documents, return deleted documents */
  deleteManyLayoutsConnection: LayoutConnection;
  /**
   * Delete many PagePreview documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagePreviewsConnection)
   */
  deleteManyPagePreviews: BatchPayload;
  /** Delete many PagePreview documents, return deleted documents */
  deleteManyPagePreviewsConnection: PagePreviewConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /**
   * Delete many Resume documents
   * @deprecated Please use the new paginated many mutation (deleteManyResumesConnection)
   */
  deleteManyResumes: BatchPayload;
  /** Delete many Resume documents, return deleted documents */
  deleteManyResumesConnection: ResumeConnection;
  /**
   * Delete many Social documents
   * @deprecated Please use the new paginated many mutation (deleteManySocialsConnection)
   */
  deleteManySocials: BatchPayload;
  /** Delete many Social documents, return deleted documents */
  deleteManySocialsConnection: SocialConnection;
  /** Delete one pagePreview from _all_ existing stages. Returns deleted document. */
  deletePagePreview?: Maybe<PagePreview>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete one resume from _all_ existing stages. Returns deleted document. */
  deleteResume?: Maybe<Resume>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one social from _all_ existing stages. Returns deleted document. */
  deleteSocial?: Maybe<Social>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one layout */
  publishLayout?: Maybe<Layout>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Layout documents
   * @deprecated Please use the new paginated many mutation (publishManyLayoutsConnection)
   */
  publishManyLayouts: BatchPayload;
  /** Publish many Layout documents */
  publishManyLayoutsConnection: LayoutConnection;
  /**
   * Publish many PagePreview documents
   * @deprecated Please use the new paginated many mutation (publishManyPagePreviewsConnection)
   */
  publishManyPagePreviews: BatchPayload;
  /** Publish many PagePreview documents */
  publishManyPagePreviewsConnection: PagePreviewConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /**
   * Publish many Resume documents
   * @deprecated Please use the new paginated many mutation (publishManyResumesConnection)
   */
  publishManyResumes: BatchPayload;
  /** Publish many Resume documents */
  publishManyResumesConnection: ResumeConnection;
  /**
   * Publish many Social documents
   * @deprecated Please use the new paginated many mutation (publishManySocialsConnection)
   */
  publishManySocials: BatchPayload;
  /** Publish many Social documents */
  publishManySocialsConnection: SocialConnection;
  /** Publish one pagePreview */
  publishPagePreview?: Maybe<PagePreview>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Publish one resume */
  publishResume?: Maybe<Resume>;
  /** Publish one social */
  publishSocial?: Maybe<Social>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one layout */
  schedulePublishLayout?: Maybe<Layout>;
  /** Schedule to publish one pagePreview */
  schedulePublishPagePreview?: Maybe<PagePreview>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Schedule to publish one resume */
  schedulePublishResume?: Maybe<Resume>;
  /** Schedule to publish one social */
  schedulePublishSocial?: Maybe<Social>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one layout from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLayout?: Maybe<Layout>;
  /** Unpublish one pagePreview from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPagePreview?: Maybe<PagePreview>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one resume from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishResume?: Maybe<Resume>;
  /** Unpublish one social from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSocial?: Maybe<Social>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one layout from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLayout?: Maybe<Layout>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Layout documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLayoutsConnection)
   */
  unpublishManyLayouts: BatchPayload;
  /** Find many Layout documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLayoutsConnection: LayoutConnection;
  /**
   * Unpublish many PagePreview documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagePreviewsConnection)
   */
  unpublishManyPagePreviews: BatchPayload;
  /** Find many PagePreview documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagePreviewsConnection: PagePreviewConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Unpublish many Resume documents
   * @deprecated Please use the new paginated many mutation (unpublishManyResumesConnection)
   */
  unpublishManyResumes: BatchPayload;
  /** Find many Resume documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyResumesConnection: ResumeConnection;
  /**
   * Unpublish many Social documents
   * @deprecated Please use the new paginated many mutation (unpublishManySocialsConnection)
   */
  unpublishManySocials: BatchPayload;
  /** Find many Social documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySocialsConnection: SocialConnection;
  /** Unpublish one pagePreview from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPagePreview?: Maybe<PagePreview>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Unpublish one resume from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishResume?: Maybe<Resume>;
  /** Unpublish one social from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSocial?: Maybe<Social>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one layout */
  updateLayout?: Maybe<Layout>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many layouts
   * @deprecated Please use the new paginated many mutation (updateManyLayoutsConnection)
   */
  updateManyLayouts: BatchPayload;
  /** Update many Layout documents */
  updateManyLayoutsConnection: LayoutConnection;
  /**
   * Update many pagePreviews
   * @deprecated Please use the new paginated many mutation (updateManyPagePreviewsConnection)
   */
  updateManyPagePreviews: BatchPayload;
  /** Update many PagePreview documents */
  updateManyPagePreviewsConnection: PagePreviewConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /**
   * Update many resumes
   * @deprecated Please use the new paginated many mutation (updateManyResumesConnection)
   */
  updateManyResumes: BatchPayload;
  /** Update many Resume documents */
  updateManyResumesConnection: ResumeConnection;
  /**
   * Update many socials
   * @deprecated Please use the new paginated many mutation (updateManySocialsConnection)
   */
  updateManySocials: BatchPayload;
  /** Update many Social documents */
  updateManySocialsConnection: SocialConnection;
  /** Update one pagePreview */
  updatePagePreview?: Maybe<PagePreview>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one resume */
  updateResume?: Maybe<Resume>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one social */
  updateSocial?: Maybe<Social>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one layout */
  upsertLayout?: Maybe<Layout>;
  /** Upsert one pagePreview */
  upsertPagePreview?: Maybe<PagePreview>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Upsert one resume */
  upsertResume?: Maybe<Resume>;
  /** Upsert one social */
  upsertSocial?: Maybe<Social>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateLayoutArgs = {
  data: LayoutCreateInput;
};


export type MutationCreatePagePreviewArgs = {
  data: PagePreviewCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateResumeArgs = {
  data: ResumeCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSocialArgs = {
  data: SocialCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteLayoutArgs = {
  where: LayoutWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyLayoutsArgs = {
  where?: InputMaybe<LayoutManyWhereInput>;
};


export type MutationDeleteManyLayoutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutManyWhereInput>;
};


export type MutationDeleteManyPagePreviewsArgs = {
  where?: InputMaybe<PagePreviewManyWhereInput>;
};


export type MutationDeleteManyPagePreviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagePreviewManyWhereInput>;
};


export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyResumesArgs = {
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationDeleteManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationDeleteManySocialsArgs = {
  where?: InputMaybe<SocialManyWhereInput>;
};


export type MutationDeleteManySocialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialManyWhereInput>;
};


export type MutationDeletePagePreviewArgs = {
  where: PagePreviewWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteResumeArgs = {
  where: ResumeWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSocialArgs = {
  where: SocialWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishLayoutArgs = {
  to?: Array<Stage>;
  where: LayoutWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyLayoutsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LayoutManyWhereInput>;
};


export type MutationPublishManyLayoutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LayoutManyWhereInput>;
};


export type MutationPublishManyPagePreviewsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PagePreviewManyWhereInput>;
};


export type MutationPublishManyPagePreviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PagePreviewManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyResumesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationPublishManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationPublishManySocialsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SocialManyWhereInput>;
};


export type MutationPublishManySocialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SocialManyWhereInput>;
};


export type MutationPublishPagePreviewArgs = {
  to?: Array<Stage>;
  where: PagePreviewWhereUniqueInput;
};


export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationPublishResumeArgs = {
  to?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};


export type MutationPublishSocialArgs = {
  to?: Array<Stage>;
  where: SocialWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishLayoutArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LayoutWhereUniqueInput;
};


export type MutationSchedulePublishPagePreviewArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PagePreviewWhereUniqueInput;
};


export type MutationSchedulePublishProjectArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationSchedulePublishResumeArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};


export type MutationSchedulePublishSocialArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SocialWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishLayoutArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LayoutWhereUniqueInput;
};


export type MutationScheduleUnpublishPagePreviewArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PagePreviewWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProjectWhereUniqueInput;
};


export type MutationScheduleUnpublishResumeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ResumeWhereUniqueInput;
};


export type MutationScheduleUnpublishSocialArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SocialWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishLayoutArgs = {
  from?: Array<Stage>;
  where: LayoutWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyLayoutsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LayoutManyWhereInput>;
};


export type MutationUnpublishManyLayoutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LayoutManyWhereInput>;
};


export type MutationUnpublishManyPagePreviewsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PagePreviewManyWhereInput>;
};


export type MutationUnpublishManyPagePreviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PagePreviewManyWhereInput>;
};


export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyResumesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationUnpublishManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationUnpublishManySocialsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SocialManyWhereInput>;
};


export type MutationUnpublishManySocialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SocialManyWhereInput>;
};


export type MutationUnpublishPagePreviewArgs = {
  from?: Array<Stage>;
  where: PagePreviewWhereUniqueInput;
};


export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationUnpublishResumeArgs = {
  from?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};


export type MutationUnpublishSocialArgs = {
  from?: Array<Stage>;
  where: SocialWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateLayoutArgs = {
  data: LayoutUpdateInput;
  where: LayoutWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyLayoutsArgs = {
  data: LayoutUpdateManyInput;
  where?: InputMaybe<LayoutManyWhereInput>;
};


export type MutationUpdateManyLayoutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LayoutUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutManyWhereInput>;
};


export type MutationUpdateManyPagePreviewsArgs = {
  data: PagePreviewUpdateManyInput;
  where?: InputMaybe<PagePreviewManyWhereInput>;
};


export type MutationUpdateManyPagePreviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PagePreviewUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagePreviewManyWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProjectUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyResumesArgs = {
  data: ResumeUpdateManyInput;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationUpdateManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ResumeUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResumeManyWhereInput>;
};


export type MutationUpdateManySocialsArgs = {
  data: SocialUpdateManyInput;
  where?: InputMaybe<SocialManyWhereInput>;
};


export type MutationUpdateManySocialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SocialUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialManyWhereInput>;
};


export type MutationUpdatePagePreviewArgs = {
  data: PagePreviewUpdateInput;
  where: PagePreviewWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateResumeArgs = {
  data: ResumeUpdateInput;
  where: ResumeWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSocialArgs = {
  data: SocialUpdateInput;
  where: SocialWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertLayoutArgs = {
  upsert: LayoutUpsertInput;
  where: LayoutWhereUniqueInput;
};


export type MutationUpsertPagePreviewArgs = {
  upsert: PagePreviewUpsertInput;
  where: PagePreviewWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertResumeArgs = {
  upsert: ResumeUpsertInput;
  where: ResumeWhereUniqueInput;
};


export type MutationUpsertSocialArgs = {
  upsert: SocialUpsertInput;
  where: SocialWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PagePreview = Node & {
  __typename?: 'PagePreview';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Description of the page */
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<PagePreview>;
  /** List of PagePreview versions */
  history: Array<Version>;
  /** Icon you want to use to represent the page. Will also be used in the page description blocks */
  icon: Icon;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Page slug for dynamic routes */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Page Title */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PagePreviewCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PagePreviewDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PagePreviewHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PagePreviewIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PagePreviewPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PagePreviewScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PagePreviewUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PagePreviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PagePreviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type PagePreviewConnection = {
  __typename?: 'PagePreviewConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PagePreviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PagePreviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  icon: IconCreateOneInlineInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PagePreviewCreateManyInlineInput = {
  /** Connect multiple existing PagePreview documents */
  connect?: InputMaybe<Array<PagePreviewWhereUniqueInput>>;
  /** Create and connect multiple existing PagePreview documents */
  create?: InputMaybe<Array<PagePreviewCreateInput>>;
};

export type PagePreviewCreateOneInlineInput = {
  /** Connect one existing PagePreview document */
  connect?: InputMaybe<PagePreviewWhereUniqueInput>;
  /** Create and connect one PagePreview document */
  create?: InputMaybe<PagePreviewCreateInput>;
};

/** An edge in a connection. */
export type PagePreviewEdge = {
  __typename?: 'PagePreviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PagePreview;
};

/** Identifies documents */
export type PagePreviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PagePreviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PagePreviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PagePreviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PagePreviewWhereStageInput>;
  documentInStages_none?: InputMaybe<PagePreviewWhereStageInput>;
  documentInStages_some?: InputMaybe<PagePreviewWhereStageInput>;
  icon?: InputMaybe<IconWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PagePreviewOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PagePreviewUpdateInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  icon?: InputMaybe<IconUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PagePreviewUpdateManyInlineInput = {
  /** Connect multiple existing PagePreview documents */
  connect?: InputMaybe<Array<PagePreviewConnectInput>>;
  /** Create and connect multiple PagePreview documents */
  create?: InputMaybe<Array<PagePreviewCreateInput>>;
  /** Delete multiple PagePreview documents */
  delete?: InputMaybe<Array<PagePreviewWhereUniqueInput>>;
  /** Disconnect multiple PagePreview documents */
  disconnect?: InputMaybe<Array<PagePreviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PagePreview documents */
  set?: InputMaybe<Array<PagePreviewWhereUniqueInput>>;
  /** Update multiple PagePreview documents */
  update?: InputMaybe<Array<PagePreviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PagePreview documents */
  upsert?: InputMaybe<Array<PagePreviewUpsertWithNestedWhereUniqueInput>>;
};

export type PagePreviewUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PagePreviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PagePreviewUpdateManyInput;
  /** Document search */
  where: PagePreviewWhereInput;
};

export type PagePreviewUpdateOneInlineInput = {
  /** Connect existing PagePreview document */
  connect?: InputMaybe<PagePreviewWhereUniqueInput>;
  /** Create and connect one PagePreview document */
  create?: InputMaybe<PagePreviewCreateInput>;
  /** Delete currently connected PagePreview document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PagePreview document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PagePreview document */
  update?: InputMaybe<PagePreviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagePreview document */
  upsert?: InputMaybe<PagePreviewUpsertWithNestedWhereUniqueInput>;
};

export type PagePreviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PagePreviewUpdateInput;
  /** Unique document search */
  where: PagePreviewWhereUniqueInput;
};

export type PagePreviewUpsertInput = {
  /** Create document if it didn't exist */
  create: PagePreviewCreateInput;
  /** Update document if it exists */
  update: PagePreviewUpdateInput;
};

export type PagePreviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PagePreviewUpsertInput;
  /** Unique document search */
  where: PagePreviewWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PagePreviewWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PagePreviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PagePreviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PagePreviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PagePreviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PagePreviewWhereStageInput>;
  documentInStages_none?: InputMaybe<PagePreviewWhereStageInput>;
  documentInStages_some?: InputMaybe<PagePreviewWhereStageInput>;
  icon?: InputMaybe<IconWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PagePreviewWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PagePreviewWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PagePreviewWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PagePreviewWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PagePreviewWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PagePreview record uniquely */
export type PagePreviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Project = Node & {
  __typename?: 'Project';
  category: Array<ProjectCategory>;
  /** The date the project was completed */
  completionDate: Scalars['Date'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** URL of the deployed project */
  deployedUrl?: Maybe<Scalars['String']>;
  /** Description of the project */
  description: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** URL of the github repository */
  githubUrl?: Maybe<Scalars['String']>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  isFeatured: Scalars['Boolean'];
  /** Media assets to be added to the project */
  media: Array<MediaAsset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** What language/frameworks were used in this project? */
  stack: Array<StackChoice>;
  /** System stage field */
  stage: Stage;
  /** Title of the Project */
  title: Scalars['String'];
  /** Project Type */
  type: ProjectType;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ProjectCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProjectMediaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<MediaAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaAssetWhereInput>;
};


export type ProjectPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProjectUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export enum ProjectCategory {
  Algorithms = 'Algorithms',
  Backend = 'Backend',
  DataStructures = 'DataStructures',
  Frontend = 'Frontend',
  Native = 'Native'
}

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  category?: InputMaybe<Array<ProjectCategory>>;
  completionDate: Scalars['Date'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deployedUrl?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  isFeatured: Scalars['Boolean'];
  media?: InputMaybe<MediaAssetCreateManyInlineInput>;
  slug: Scalars['String'];
  stack?: InputMaybe<Array<StackChoice>>;
  title: Scalars['String'];
  type: ProjectType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  category?: InputMaybe<Array<ProjectCategory>>;
  /** Matches if the field array contains *all* items provided to the filter */
  category_contains_all?: InputMaybe<Array<ProjectCategory>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  category_contains_none?: InputMaybe<Array<ProjectCategory>>;
  /** Matches if the field array contains at least one item provided to the filter */
  category_contains_some?: InputMaybe<Array<ProjectCategory>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  category_not?: InputMaybe<Array<ProjectCategory>>;
  completionDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  completionDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  completionDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  completionDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  completionDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  completionDate_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  completionDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  completionDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  deployedUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  deployedUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  deployedUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  deployedUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  deployedUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  deployedUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  deployedUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  deployedUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  deployedUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  deployedUrl_starts_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  githubUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  githubUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  githubUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  githubUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  githubUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  githubUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  githubUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  githubUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  githubUrl_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isFeatured_not?: InputMaybe<Scalars['Boolean']>;
  media_every?: InputMaybe<MediaAssetWhereInput>;
  media_none?: InputMaybe<MediaAssetWhereInput>;
  media_some?: InputMaybe<MediaAssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  stack?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array contains *all* items provided to the filter */
  stack_contains_all?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  stack_contains_none?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array contains at least one item provided to the filter */
  stack_contains_some?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  stack_not?: InputMaybe<Array<StackChoice>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ProjectType>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<InputMaybe<ProjectType>>>;
  /** Any other value that exists and is not equal to the given value. */
  type_not?: InputMaybe<ProjectType>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<InputMaybe<ProjectType>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CompletionDateAsc = 'completionDate_ASC',
  CompletionDateDesc = 'completionDate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeployedUrlAsc = 'deployedUrl_ASC',
  DeployedUrlDesc = 'deployedUrl_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GithubUrlAsc = 'githubUrl_ASC',
  GithubUrlDesc = 'githubUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StackAsc = 'stack_ASC',
  StackDesc = 'stack_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** The type of project was created */
export enum ProjectType {
  Personal = 'PERSONAL',
  Work = 'WORK'
}

export type ProjectUpdateInput = {
  category?: InputMaybe<Array<ProjectCategory>>;
  completionDate?: InputMaybe<Scalars['Date']>;
  deployedUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<MediaAssetUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  stack?: InputMaybe<Array<StackChoice>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ProjectType>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  category?: InputMaybe<Array<ProjectCategory>>;
  completionDate?: InputMaybe<Scalars['Date']>;
  deployedUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  stack?: InputMaybe<Array<StackChoice>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ProjectType>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  category?: InputMaybe<Array<ProjectCategory>>;
  /** Matches if the field array contains *all* items provided to the filter */
  category_contains_all?: InputMaybe<Array<ProjectCategory>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  category_contains_none?: InputMaybe<Array<ProjectCategory>>;
  /** Matches if the field array contains at least one item provided to the filter */
  category_contains_some?: InputMaybe<Array<ProjectCategory>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  category_not?: InputMaybe<Array<ProjectCategory>>;
  completionDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  completionDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  completionDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  completionDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  completionDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  completionDate_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  completionDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  completionDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  deployedUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  deployedUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  deployedUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  deployedUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  deployedUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  deployedUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  deployedUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  deployedUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  deployedUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  deployedUrl_starts_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  githubUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  githubUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  githubUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  githubUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  githubUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  githubUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  githubUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  githubUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  githubUrl_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isFeatured_not?: InputMaybe<Scalars['Boolean']>;
  media_every?: InputMaybe<MediaAssetWhereInput>;
  media_none?: InputMaybe<MediaAssetWhereInput>;
  media_some?: InputMaybe<MediaAssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  stack?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array contains *all* items provided to the filter */
  stack_contains_all?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  stack_contains_none?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array contains at least one item provided to the filter */
  stack_contains_some?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  stack_not?: InputMaybe<Array<StackChoice>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ProjectType>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<InputMaybe<ProjectType>>>;
  /** Any other value that exists and is not equal to the given value. */
  type_not?: InputMaybe<ProjectType>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<InputMaybe<ProjectType>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single layout */
  layout?: Maybe<Layout>;
  /** Retrieve document version */
  layoutVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple layouts */
  layouts: Array<Layout>;
  /** Retrieve multiple layouts using the Relay connection interface */
  layoutsConnection: LayoutConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single pagePreview */
  pagePreview?: Maybe<PagePreview>;
  /** Retrieve document version */
  pagePreviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pagePreviews */
  pagePreviews: Array<PagePreview>;
  /** Retrieve multiple pagePreviews using the Relay connection interface */
  pagePreviewsConnection: PagePreviewConnection;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single resume */
  resume?: Maybe<Resume>;
  /** Retrieve document version */
  resumeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple resumes */
  resumes: Array<Resume>;
  /** Retrieve multiple resumes using the Relay connection interface */
  resumesConnection: ResumeConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single social */
  social?: Maybe<Social>;
  /** Retrieve document version */
  socialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple socials */
  socials: Array<Social>;
  /** Retrieve multiple socials using the Relay connection interface */
  socialsConnection: SocialConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryLayoutArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LayoutWhereUniqueInput;
};


export type QueryLayoutVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLayoutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LayoutOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LayoutWhereInput>;
};


export type QueryLayoutsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LayoutOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LayoutWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPagePreviewArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PagePreviewWhereUniqueInput;
};


export type QueryPagePreviewVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagePreviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PagePreviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PagePreviewWhereInput>;
};


export type QueryPagePreviewsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PagePreviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PagePreviewWhereInput>;
};


export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryResumeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ResumeWhereUniqueInput;
};


export type QueryResumeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryResumesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ResumeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ResumeWhereInput>;
};


export type QueryResumesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ResumeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ResumeWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySocialArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SocialWhereUniqueInput;
};


export type QuerySocialVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySocialsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SocialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SocialWhereInput>;
};


export type QuerySocialsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SocialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SocialWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export type Resume = Node & {
  __typename?: 'Resume';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Resume>;
  /** Education Section */
  education?: Maybe<RichText>;
  email: Scalars['String'];
  /** List of Resume versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Image of the resume holder */
  image?: Maybe<Asset>;
  location: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Skills to Display on Resume */
  skills: Array<StackChoice>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  workExperience: Array<RichText>;
};


export type ResumeCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ResumeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ResumeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ResumeImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ResumePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ResumeScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ResumeUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ResumeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ResumeWhereUniqueInput;
};

/** A connection to a list of items. */
export type ResumeConnection = {
  __typename?: 'ResumeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ResumeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ResumeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['RichTextAST'];
  education?: InputMaybe<Scalars['RichTextAST']>;
  email: Scalars['String'];
  image?: InputMaybe<AssetCreateOneInlineInput>;
  location: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  skills?: InputMaybe<Array<StackChoice>>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  workExperience?: InputMaybe<Array<Scalars['RichTextAST']>>;
};

export type ResumeCreateManyInlineInput = {
  /** Connect multiple existing Resume documents */
  connect?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Create and connect multiple existing Resume documents */
  create?: InputMaybe<Array<ResumeCreateInput>>;
};

export type ResumeCreateOneInlineInput = {
  /** Connect one existing Resume document */
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  /** Create and connect one Resume document */
  create?: InputMaybe<ResumeCreateInput>;
};

/** An edge in a connection. */
export type ResumeEdge = {
  __typename?: 'ResumeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Resume;
};

/** Identifies documents */
export type ResumeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_none?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_some?: InputMaybe<ResumeWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  location?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  skills?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array contains *all* items provided to the filter */
  skills_contains_all?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  skills_contains_none?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array contains at least one item provided to the filter */
  skills_contains_some?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  skills_not?: InputMaybe<Array<StackChoice>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ResumeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SkillsAsc = 'skills_ASC',
  SkillsDesc = 'skills_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ResumeUpdateInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  education?: InputMaybe<Scalars['RichTextAST']>;
  email?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<StackChoice>>;
  title?: InputMaybe<Scalars['String']>;
  workExperience?: InputMaybe<Array<Scalars['RichTextAST']>>;
};

export type ResumeUpdateManyInlineInput = {
  /** Connect multiple existing Resume documents */
  connect?: InputMaybe<Array<ResumeConnectInput>>;
  /** Create and connect multiple Resume documents */
  create?: InputMaybe<Array<ResumeCreateInput>>;
  /** Delete multiple Resume documents */
  delete?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Disconnect multiple Resume documents */
  disconnect?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Resume documents */
  set?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Update multiple Resume documents */
  update?: InputMaybe<Array<ResumeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Resume documents */
  upsert?: InputMaybe<Array<ResumeUpsertWithNestedWhereUniqueInput>>;
};

export type ResumeUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  education?: InputMaybe<Scalars['RichTextAST']>;
  email?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<StackChoice>>;
  title?: InputMaybe<Scalars['String']>;
  workExperience?: InputMaybe<Array<Scalars['RichTextAST']>>;
};

export type ResumeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ResumeUpdateManyInput;
  /** Document search */
  where: ResumeWhereInput;
};

export type ResumeUpdateOneInlineInput = {
  /** Connect existing Resume document */
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  /** Create and connect one Resume document */
  create?: InputMaybe<ResumeCreateInput>;
  /** Delete currently connected Resume document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Resume document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Resume document */
  update?: InputMaybe<ResumeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Resume document */
  upsert?: InputMaybe<ResumeUpsertWithNestedWhereUniqueInput>;
};

export type ResumeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ResumeUpdateInput;
  /** Unique document search */
  where: ResumeWhereUniqueInput;
};

export type ResumeUpsertInput = {
  /** Create document if it didn't exist */
  create: ResumeCreateInput;
  /** Update document if it exists */
  update: ResumeUpdateInput;
};

export type ResumeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ResumeUpsertInput;
  /** Unique document search */
  where: ResumeWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ResumeWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ResumeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_none?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_some?: InputMaybe<ResumeWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  location?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  skills?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array contains *all* items provided to the filter */
  skills_contains_all?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  skills_contains_none?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array contains at least one item provided to the filter */
  skills_contains_some?: InputMaybe<Array<StackChoice>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  skills_not?: InputMaybe<Array<StackChoice>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ResumeWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ResumeWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Resume record uniquely */
export type ResumeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Layout | PagePreview | Project | Resume | Social;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum Size {
  L = 'l',
  M = 'm',
  S = 's',
  Xl = 'xl',
  Xs = 'xs'
}

export type Social = Node & {
  __typename?: 'Social';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Social>;
  /** Github URL */
  github: Scalars['String'];
  /** List of Social versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** LinkedIn URL */
  linkedIn: Scalars['String'];
  personal?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  twitter?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SocialCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SocialDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SocialHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type SocialPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SocialScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SocialUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SocialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SocialWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialConnection = {
  __typename?: 'SocialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SocialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SocialCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  github: Scalars['String'];
  linkedIn: Scalars['String'];
  personal?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SocialCreateManyInlineInput = {
  /** Connect multiple existing Social documents */
  connect?: InputMaybe<Array<SocialWhereUniqueInput>>;
  /** Create and connect multiple existing Social documents */
  create?: InputMaybe<Array<SocialCreateInput>>;
};

export type SocialCreateOneInlineInput = {
  /** Connect one existing Social document */
  connect?: InputMaybe<SocialWhereUniqueInput>;
  /** Create and connect one Social document */
  create?: InputMaybe<SocialCreateInput>;
};

/** An edge in a connection. */
export type SocialEdge = {
  __typename?: 'SocialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Social;
};

/** Identifies documents */
export type SocialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SocialWhereStageInput>;
  documentInStages_none?: InputMaybe<SocialWhereStageInput>;
  documentInStages_some?: InputMaybe<SocialWhereStageInput>;
  github?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  github_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  github_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  github_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  github_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  github_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  github_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  github_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  linkedIn?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkedIn_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedIn_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkedIn_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedIn_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedIn_starts_with?: InputMaybe<Scalars['String']>;
  personal?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  personal_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  personal_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  personal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  personal_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  personal_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  personal_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  personal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  personal_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  personal_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  twitter?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitter_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitter_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  twitter_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitter_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitter_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitter_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SocialOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkedInAsc = 'linkedIn_ASC',
  LinkedInDesc = 'linkedIn_DESC',
  PersonalAsc = 'personal_ASC',
  PersonalDesc = 'personal_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SocialUpdateInput = {
  github?: InputMaybe<Scalars['String']>;
  linkedIn?: InputMaybe<Scalars['String']>;
  personal?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type SocialUpdateManyInlineInput = {
  /** Connect multiple existing Social documents */
  connect?: InputMaybe<Array<SocialConnectInput>>;
  /** Create and connect multiple Social documents */
  create?: InputMaybe<Array<SocialCreateInput>>;
  /** Delete multiple Social documents */
  delete?: InputMaybe<Array<SocialWhereUniqueInput>>;
  /** Disconnect multiple Social documents */
  disconnect?: InputMaybe<Array<SocialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Social documents */
  set?: InputMaybe<Array<SocialWhereUniqueInput>>;
  /** Update multiple Social documents */
  update?: InputMaybe<Array<SocialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Social documents */
  upsert?: InputMaybe<Array<SocialUpsertWithNestedWhereUniqueInput>>;
};

export type SocialUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type SocialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialUpdateManyInput;
  /** Document search */
  where: SocialWhereInput;
};

export type SocialUpdateOneInlineInput = {
  /** Connect existing Social document */
  connect?: InputMaybe<SocialWhereUniqueInput>;
  /** Create and connect one Social document */
  create?: InputMaybe<SocialCreateInput>;
  /** Delete currently connected Social document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Social document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Social document */
  update?: InputMaybe<SocialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Social document */
  upsert?: InputMaybe<SocialUpsertWithNestedWhereUniqueInput>;
};

export type SocialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialUpdateInput;
  /** Unique document search */
  where: SocialWhereUniqueInput;
};

export type SocialUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialCreateInput;
  /** Update document if it exists */
  update: SocialUpdateInput;
};

export type SocialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialUpsertInput;
  /** Unique document search */
  where: SocialWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SocialWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type SocialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SocialWhereStageInput>;
  documentInStages_none?: InputMaybe<SocialWhereStageInput>;
  documentInStages_some?: InputMaybe<SocialWhereStageInput>;
  github?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  github_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  github_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  github_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  github_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  github_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  github_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  github_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  linkedIn?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkedIn_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedIn_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkedIn_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedIn_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedIn_starts_with?: InputMaybe<Scalars['String']>;
  personal?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  personal_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  personal_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  personal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  personal_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  personal_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  personal_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  personal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  personal_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  personal_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  twitter?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitter_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitter_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  twitter_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitter_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitter_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitter_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SocialWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SocialWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Social record uniquely */
export type SocialWhereUniqueInput = {
  github?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  linkedIn?: InputMaybe<Scalars['String']>;
  personal?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export enum StackChoice {
  Agile = 'Agile',
  Apollo = 'Apollo',
  Css = 'CSS',
  Cypress = 'Cypress',
  Django = 'Django',
  Framer = 'Framer',
  FramerMotion = 'FramerMotion',
  Gatsby = 'Gatsby',
  Graphene = 'Graphene',
  Html = 'HTML',
  Java = 'Java',
  Javascript = 'Javascript',
  Jest = 'Jest',
  Kotlin = 'Kotlin',
  NextJs = 'NextJS',
  Node = 'Node',
  Python = 'Python',
  React = 'React',
  Saleor = 'Saleor',
  SanityCms = 'SanityCMS',
  Swift = 'Swift',
  Typescript = 'Typescript'
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type IconFragment = { __typename?: 'Icon', name: IconNames, size?: Size | null };

export type LayoutFragment = { __typename?: 'Layout', route: string, hero?: { __typename?: 'Hero', heading: string, subHeading?: string | null, backgroundColor?: { __typename?: 'Color', css: string } | null, backgroundImage?: { __typename?: 'Asset', id: string, url: string } | null, icon?: { __typename?: 'Icon', name: IconNames, size?: Size | null } | null } | null };

export type MediaFragment = { __typename?: 'MediaAsset', id: string, order: number, media: { __typename?: 'Asset', url: string } };

export type PagePreviewFragment = { __typename?: 'PagePreview', title: string, slug: string, description?: { __typename?: 'RichText', html: string } | null, icon: { __typename?: 'Icon', name: IconNames, size?: Size | null } };

export type ProjectFragment = { __typename?: 'Project', title: string, completionDate: any, description: string, stack: Array<StackChoice>, category: Array<ProjectCategory>, id: string, slug: string, media: Array<{ __typename?: 'MediaAsset', id: string, order: number, media: { __typename?: 'Asset', url: string } }> };

export type ProjectTileFragment = { __typename?: 'Project', title: string, completionDate: any, description: string, stack: Array<StackChoice>, category: Array<ProjectCategory>, slug: string, id: string, media: Array<{ __typename?: 'MediaAsset', id: string, order: number, media: { __typename?: 'Asset', url: string } }> };

export type ResumeFragment = { __typename?: 'Resume', name: string, title: string, phoneNumber: string, email: string, location: string, skills: Array<StackChoice>, description: { __typename?: 'RichText', markdown: string }, workExperience: Array<{ __typename?: 'RichText', markdown: string }>, education?: { __typename?: 'RichText', markdown: string } | null };

export type SocialFragment = { __typename?: 'Social', id: string, github: string, twitter?: string | null, personal?: string | null, linkedIn: string };

export type GetFeaturedProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', title: string, completionDate: any, description: string, stack: Array<StackChoice>, category: Array<ProjectCategory>, slug: string, id: string, media: Array<{ __typename?: 'MediaAsset', id: string, order: number, media: { __typename?: 'Asset', url: string } }> }> };

export type GetIndexPageQueryVariables = Exact<{
  route: Scalars['String'];
}>;


export type GetIndexPageQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', title: string, completionDate: any, description: string, stack: Array<StackChoice>, category: Array<ProjectCategory>, slug: string, id: string, media: Array<{ __typename?: 'MediaAsset', id: string, order: number, media: { __typename?: 'Asset', url: string } }> }>, layout?: { __typename?: 'Layout', route: string, hero?: { __typename?: 'Hero', heading: string, subHeading?: string | null, backgroundColor?: { __typename?: 'Color', css: string } | null, backgroundImage?: { __typename?: 'Asset', id: string, url: string } | null, icon?: { __typename?: 'Icon', name: IconNames, size?: Size | null } | null } | null } | null, pagePreviews: Array<{ __typename?: 'PagePreview', title: string, slug: string, description?: { __typename?: 'RichText', html: string } | null, icon: { __typename?: 'Icon', name: IconNames, size?: Size | null } }> };

export type GetLayoutByRouteQueryVariables = Exact<{
  route: Scalars['String'];
}>;


export type GetLayoutByRouteQuery = { __typename?: 'Query', layout?: { __typename?: 'Layout', route: string, hero?: { __typename?: 'Hero', heading: string, subHeading?: string | null, backgroundColor?: { __typename?: 'Color', css: string } | null, backgroundImage?: { __typename?: 'Asset', id: string, url: string } | null, icon?: { __typename?: 'Icon', name: IconNames, size?: Size | null } | null } | null } | null };

export type GetPagePreviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagePreviewsQuery = { __typename?: 'Query', pagePreviews: Array<{ __typename?: 'PagePreview', title: string, slug: string, description?: { __typename?: 'RichText', html: string } | null, icon: { __typename?: 'Icon', name: IconNames, size?: Size | null } }> };

export type GetPaginatedProjectsQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetPaginatedProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', title: string, completionDate: any, description: string, stack: Array<StackChoice>, category: Array<ProjectCategory>, id: string, slug: string, media: Array<{ __typename?: 'MediaAsset', id: string, order: number, media: { __typename?: 'Asset', url: string } }> }> };

export type GetPaginatedWorkQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetPaginatedWorkQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', title: string, completionDate: any, description: string, stack: Array<StackChoice>, category: Array<ProjectCategory>, id: string, slug: string, media: Array<{ __typename?: 'MediaAsset', id: string, order: number, media: { __typename?: 'Asset', url: string } }> }> };

export type GetProjectBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetProjectBySlugQuery = { __typename?: 'Query', project?: { __typename?: 'Project', title: string, completionDate: any, description: string, stack: Array<StackChoice>, category: Array<ProjectCategory>, id: string, slug: string, media: Array<{ __typename?: 'MediaAsset', id: string, order: number, media: { __typename?: 'Asset', url: string } }> } | null };

export type GetResumeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResumeQuery = { __typename?: 'Query', resume?: { __typename?: 'Resume', name: string, title: string, phoneNumber: string, email: string, location: string, skills: Array<StackChoice>, description: { __typename?: 'RichText', markdown: string }, workExperience: Array<{ __typename?: 'RichText', markdown: string }>, education?: { __typename?: 'RichText', markdown: string } | null } | null, social?: { __typename?: 'Social', id: string, github: string, twitter?: string | null, personal?: string | null, linkedIn: string } | null };

export const IconFragmentDoc = gql`
    fragment Icon on Icon {
  name
  size
}
    `;
export const LayoutFragmentDoc = gql`
    fragment Layout on Layout {
  route
  hero {
    backgroundColor {
      css
    }
    backgroundImage {
      id
      url
    }
    heading
    subHeading
    icon {
      ...Icon
    }
  }
}
    ${IconFragmentDoc}`;
export const PagePreviewFragmentDoc = gql`
    fragment PagePreview on PagePreview {
  title
  slug
  description {
    html
  }
  icon {
    ...Icon
  }
}
    ${IconFragmentDoc}`;
export const MediaFragmentDoc = gql`
    fragment Media on MediaAsset {
  id
  order
  media {
    url
  }
}
    `;
export const ProjectFragmentDoc = gql`
    fragment Project on Project {
  title
  completionDate
  description
  stack
  category
  id
  slug
  media {
    ...Media
  }
}
    ${MediaFragmentDoc}`;
export const ProjectTileFragmentDoc = gql`
    fragment ProjectTile on Project {
  title
  completionDate
  description
  stack
  category
  slug
  id
  media {
    ...Media
  }
}
    ${MediaFragmentDoc}`;
export const ResumeFragmentDoc = gql`
    fragment Resume on Resume {
  name
  title
  description {
    markdown
  }
  phoneNumber
  email
  location
  workExperience {
    markdown
  }
  education {
    markdown
  }
  skills
}
    `;
export const SocialFragmentDoc = gql`
    fragment Social on Social {
  id
  github
  twitter
  personal
  linkedIn
}
    `;
export const GetFeaturedProjectsDocument = gql`
    query GetFeaturedProjects {
  projects(where: {isFeatured: true}) {
    ...ProjectTile
  }
}
    ${ProjectTileFragmentDoc}`;
export type GetFeaturedProjectsQueryResult = Apollo.QueryResult<GetFeaturedProjectsQuery, GetFeaturedProjectsQueryVariables>;
export const GetIndexPageDocument = gql`
    query GetIndexPage($route: String!) {
  projects(where: {isFeatured: true, type: WORK}) {
    ...ProjectTile
  }
  layout(where: {route: $route}) {
    ...Layout
  }
  pagePreviews {
    ...PagePreview
  }
}
    ${ProjectTileFragmentDoc}
${LayoutFragmentDoc}
${PagePreviewFragmentDoc}`;
export type GetIndexPageQueryResult = Apollo.QueryResult<GetIndexPageQuery, GetIndexPageQueryVariables>;
export const GetLayoutByRouteDocument = gql`
    query GetLayoutByRoute($route: String!) {
  layout(where: {route: $route}) {
    ...Layout
  }
}
    ${LayoutFragmentDoc}`;
export type GetLayoutByRouteQueryResult = Apollo.QueryResult<GetLayoutByRouteQuery, GetLayoutByRouteQueryVariables>;
export const GetPagePreviewsDocument = gql`
    query GetPagePreviews {
  pagePreviews {
    ...PagePreview
  }
}
    ${PagePreviewFragmentDoc}`;
export type GetPagePreviewsQueryResult = Apollo.QueryResult<GetPagePreviewsQuery, GetPagePreviewsQueryVariables>;
export const GetPaginatedProjectsDocument = gql`
    query GetPaginatedProjects($first: Int!, $after: String) {
  projects(first: $first, after: $after, where: {type: PERSONAL}) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;
export type GetPaginatedProjectsQueryResult = Apollo.QueryResult<GetPaginatedProjectsQuery, GetPaginatedProjectsQueryVariables>;
export const GetPaginatedWorkDocument = gql`
    query GetPaginatedWork($first: Int!, $after: String) {
  projects(first: $first, after: $after, where: {type: WORK}) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;
export type GetPaginatedWorkQueryResult = Apollo.QueryResult<GetPaginatedWorkQuery, GetPaginatedWorkQueryVariables>;
export const GetProjectBySlugDocument = gql`
    query GetProjectBySlug($slug: String!) {
  project(where: {slug: $slug}) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;
export type GetProjectBySlugQueryResult = Apollo.QueryResult<GetProjectBySlugQuery, GetProjectBySlugQueryVariables>;
export const GetResumeDocument = gql`
    query GetResume {
  resume(where: {id: "cleiz8guqj48j0aiwrrmvcm1z"}) {
    ...Resume
  }
  social(where: {id: "clfkjiin40ji90bise14awe6j"}) {
    ...Social
  }
}
    ${ResumeFragmentDoc}
${SocialFragmentDoc}`;
export type GetResumeQueryResult = Apollo.QueryResult<GetResumeQuery, GetResumeQueryVariables>;