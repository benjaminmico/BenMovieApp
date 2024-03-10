export type Movie = {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
};

export type MovieRequest = {
  description: Movie[];
  error_code: number;
  ok: boolean;
};

export type MovieDetail = {
  short: ShortInfo;
  imdbId: string;
  top: TopInfo;
  canHaveEpisodes: boolean;
  series: null;
  titleText: TitleTextInfo;
  titleType: TitleTypeInfo;
  originalTitleText: OriginalTitleTextInfo;
  certificate: null;
  releaseYear: YearRange;
  releaseDate: ReleaseDateInfo;
  runtime: RuntimeInfo;
  canRate: CanRateInfo;
  ratingsSummary: RatingsSummaryInfo;
  meterRanking: null;
  primaryImage: null;
  images: ImageConnectionInfo;
  videos: VideosConnectionInfo;
  primaryVideos: VideoConnectionInfo;
  externalLinks: ExternalLinkConnectionInfo;
  metacritic: null;
  keywords: KeywordsConnectionInfo;
  genres: GenresInfo;
  plot: PlotInfo;
  plotContributionLink: ContributionLinkInfo;
  credits: CreditConnectionInfo;
  principalCredits: PrincipalCreditInfo[];
  reviews: ReviewsConnectionInfo;
  criticReviewsTotal: ExternalLinkConnectionInfo;
  triviaTotal: TriviaConnectionInfo;
  engagementStatistics: null;
  subNavCredits: CreditConnectionInfo;
  subNavReviews: ReviewsConnectionInfo;
  subNavTrivia: TriviaConnectionInfo;
  subNavFaqs: FaqConnectionInfo;
  subNavTopQuestions: AlexaQuestionConnectionInfo;
  titleGenres: TitleGenresInfo;
  meta: TitleMetaInfo;
  castPageTitle: CreditConnectionInfo;
  creatorsPageTitle: [];
  directorsPageTitle: PrincipalCreditInfo[];
  countriesOfOrigin: CountriesOfOriginInfo;
  production: CompanyCreditConnectionInfo;
  featuredReviews: ReviewsConnectionInfo;
  main: MainInfo;
  fake: FakeInfo;
  storyLine: StoryLineInfo;
  trailer: TrailerInfo;
};

type ShortInfo = {
  '@context': string;
  '@type': string;
  url: string;
  name: string;
  description: string;
  genre: string[];
  datePublished: string;
  actor: PersonInfo[];
  director: PersonInfo[];
  creator: (OrganizationInfo | PersonInfo)[];
  duration: string;
};

type PersonInfo = {
  '@type': string;
  url: string;
  name: string;
};

type OrganizationInfo = {
  '@type': string;
  url: string;
};

type TopInfo = {
  id: string;
  productionStatus: ProductionStatusInfo;
  restriction: null;
};

type TitleTypeInfo = {
  displayableProperty: DisplayablePropertyInfo;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: TitleTypeCategoryInfo[];
  canHaveEpisodes: boolean;
  __typename: string;
};

type TitleTypeCategoryInfo = {
  value: string;
  __typename: string;
};

type YearRange = {
  year: number;
  endYear: null;
  __typename: string;
};

type CanRateInfo = {
  isRatable: boolean;
  __typename: string;
};

type ImageConnectionInfo = {
  total: number;
  edges: [];
  __typename: string;
};

type VideosConnectionInfo = {
  total: number;
  __typename: string;
};

type VideoConnectionInfo = {
  edges: [];
  __typename: string;
};

type KeywordsConnectionInfo = {
  total: number;
  edges: [];
  __typename: string;
};

type GenresInfo = {
  genres: GenreInfo[];
  __typename: string;
};

type GenreInfo = {
  text: string;
  id: string;
  __typename: string;
};

type PlotInfo = {
  plotText: MarkdownInfo;
  __typename: string;
};

type ContributionLinkInfo = {
  url: string;
  __typename: string;
};

type CreditConnectionInfo = {
  total: number;
  __typename: string;
};

type PrincipalCreditInfo = {
  totalCredits: number;
  category: CreditCategoryInfo;
  credits: CreditInfo[];
  __typename: string;
};

type CreditCategoryInfo = {
  text: string;
  id: string;
  __typename: string;
};

type CreditInfo = {
  name: NameInfo;
  attributes: null;
  __typename: string;
};

type NameInfo = {
  nameText: NameTextInfo;
  id: string;
  __typename: string;
};

type NameTextInfo = {
  text: string;
  __typename: string;
};

type ReviewsConnectionInfo = {
  total: number;
  __typename: string;
};

type TriviaConnectionInfo = {
  total: number;
  __typename: string;
};

type FaqConnectionInfo = {
  total: number;
  edges: [];
  __typename: string;
};

type AlexaQuestionConnectionInfo = {
  total: number;
  edges: [];
  __typename: string;
};

type TitleGenresInfo = {
  genres: TitleGenreInfo[];
  __typename: string;
};

type TitleGenreInfo = {
  genre: GenreInfo;
  __typename: string;
};

type TitleMetaInfo = {
  canonicalId: string;
  publicationStatus: string;
  __typename: string;
};

type CountriesOfOriginInfo = {
  countries: CountryInfo[];
  __typename: string;
};

type CountryInfo = {
  id: string;
  __typename: string;
};

type CompanyCreditConnectionInfo = {
  edges: CompanyCreditEdgeInfo[];
  __typename: string;
};

type CompanyCreditEdgeInfo = {
  node: CompanyCreditInfo;
  __typename: string;
};

type CompanyCreditInfo = {
  company: CompanyInfo;
  __typename: string;
};

type CompanyInfo = {
  id: string;
  companyText: CompanyTextInfo;
  __typename: string;
};

type CompanyTextInfo = {
  text: string;
  __typename: string;
};

type MainInfo = {
  id: string;
  wins: AwardNominationConnectionInfo;
  nominations: AwardNominationConnectionInfo;
  prestigiousAwardSummary: null;
  ratingsSummary: RatingsSummaryInfo;
  episodes: null;
  videos: TitleRelatedVideosConnectionInfo;
  videoStrip: VideoConnectionInfo;
  titleMainImages: ImageConnectionInfo;
  productionStatus: ProductionStatusInfo;
  primaryImage: null;
  imageUploadLink: ContributionLinkInfo;
  titleType: TitleTypeInfo;
  cast: CreditConnectionInfo;
  creators: [];
  directors: PrincipalCreditInfo[];
  writers: PrincipalCreditInfo[];
  isAdult: boolean;
  moreLikeThisTitles: MoreLikeThisConnectionInfo;
  triviaTotal: TriviaConnectionInfo;
  trivia: TriviaConnectionInfo;
  goofsTotal: GoofConnectionInfo;
  goofs: GoofConnectionInfo;
  quotesTotal: TitleQuoteConnectionInfo;
  quotes: TitleQuoteConnectionInfo;
  crazyCredits: CrazyCreditConnectionInfo;
  alternateVersions: AlternateVersionConnectionInfo;
  connections: TitleConnectionConnectionInfo;
  soundtrack: SoundtrackConnectionInfo;
  titleText: TitleTextInfo;
  originalTitleText: OriginalTitleTextInfo;
  releaseYear: YearRange;
  reviews: ReviewsConnectionInfo;
  featuredReviews: ReviewsConnectionInfo;
  canRate: CanRateInfo;
  iframeAddReviewLink: ContributionLinkInfo;
  topQuestions: AlexaQuestionConnectionInfo;
  faqs: FaqConnectionInfo;
  releaseDate: ReleaseDateInfo;
  countriesOfOrigin: CountriesOfOriginInfo;
  detailsExternalLinks: ExternalLinkConnectionInfo;
  spokenLanguages: SpokenLanguagesInfo;
  akas: AkaConnectionInfo;
  filmingLocations: FilmingLocationConnectionInfo;
  production: CompanyCreditConnectionInfo;
  companies: CompanyCreditConnectionInfo;
  productionBudget: null;
  lifetimeGross: null;
  openingWeekendGross: null;
  worldwideGross: null;
  technicalSpecifications: TechnicalSpecificationsInfo;
  runtime: RuntimeInfo;
  series: null;
  canHaveEpisodes: boolean;
  contributionQuestions: ContributionQuestionsLinkInfo;
};

type AwardNominationConnectionInfo = {
  total: number;
  __typename: string;
};

type MoreLikeThisConnectionInfo = {
  edges: [];
  __typename: string;
};

type GoofConnectionInfo = {
  total: number;
  edges: [];
  __typename: string;
};

type TitleQuoteConnectionInfo = {
  total: number;
  edges: [];
  __typename: string;
};

type CrazyCreditConnectionInfo = {
  edges: [];
  __typename: string;
};

type AlternateVersionConnectionInfo = {
  total: number;
  edges: [];
  __typename: string;
};

type TitleConnectionConnectionInfo = {
  edges: [];
  __typename: string;
};

type SoundtrackConnectionInfo = {
  edges: [];
  __typename: string;
};

type SpokenLanguagesInfo = {
  spokenLanguages: SpokenLanguageInfo[];
  __typename: string;
};

type SpokenLanguageInfo = {
  id: string;
  text: string;
  __typename: string;
};

type AkaConnectionInfo = {
  edges: [];
  __typename: string;
};

type FilmingLocationConnectionInfo = {
  edges: [];
  total: number;
  __typename: string;
};

type TechnicalSpecificationsInfo = {
  soundMixes: SoundMixesInfo;
  aspectRatios: AspectRatiosInfo;
  colorations: ColorationsInfo;
  __typename: string;
};

type SoundMixesInfo = {
  items: [];
  __typename: string;
};

type AspectRatiosInfo = {
  items: [];
  __typename: string;
};

type ColorationsInfo = {
  items: ColorationItemInfo[];
  __typename: string;
};

type ColorationItemInfo = {
  conceptId: string;
  text: string;
  attributes: [];
  __typename: string;
};

type ContributionQuestionsLinkInfo = {
  contributionLink: ContributionLinkInfo;
  edges: [];
  __typename: string;
};

type FakeInfo = {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
};

type StoryLineInfo = {
  id: string;
  summaries: PlotConnectionInfo;
  outlines: PlotConnectionInfo;
  synopses: PlotConnectionInfo;
  storylineKeywords: TitleKeywordConnectionInfo;
  taglines: TaglineConnectionInfo;
  genres: GenresInfo;
  certificate: null;
  parentsGuide: ParentsGuideInfo;
};

type PlotConnectionInfo = {
  edges: PlotEdgeInfo[];
  __typename: string;
};

type PlotEdgeInfo = {
  node: PlotInfo;
  __typename: string;
};

type TaglineConnectionInfo = {
  edges: [];
  total: number;
  __typename: string;
};

type OriginalTitleTextInfo = {
  text: string;
  __typename: string;
};

type TitleKeywordConnectionInfo = {
  total: number;
  edges: KeywordEdgeInfo[];
  __typename: string;
};

type KeywordEdgeInfo = {
  node: KeywordInfo;
  __typename: string;
};

type KeywordInfo = {
  keywordText: string;
  __typename: string;
};

type TitleRelatedVideosConnectionInfo = {
  total: number;
  __typename: string;
};

type TrailerInfo = {
  '@type': string;
  name: string;
  embedUrl: string;
  thumbnail: ImageObjectInfo;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: string;
};

type ImageObjectInfo = {
  '@type': string;
  contentUrl: string;
};

type ProductionStatusInfo = {
  currentProductionStage: ProductionStageInfo;
  productionStatusHistory: ProductionStatusHistoryInfo[];
  restriction: null | string;
  __typename: string;
};

type ProductionStageInfo = {
  id: string;
  text: string;
  __typename: string;
};

type ProductionStatusHistoryInfo = {
  status: ProductionStatusInfo;
  __typename: string;
};

type TitleTextInfo = {
  text: string;
  __typename: string;
};

type ReleaseDateInfo = {
  day: number;
  month: number;
  year: number;
  __typename: string;
};

type RuntimeInfo = {
  seconds: number;
  displayableProperty: DisplayablePropertyInfo;
  __typename: string;
};

type DisplayablePropertyInfo = {
  value: MarkdownInfo;
  __typename: string;
};

type MarkdownInfo = {
  plainText: string;
  __typename: string;
};

type RatingsSummaryInfo = {
  aggregateRating: number | null;
  voteCount: number;
  __typename: string;
};

type ExternalLinkConnectionInfo = {
  total: number;
  __typename: string;
};

type ParentsGuideInfo = {
  guideItems: GuideItemInfo[];
  __typename: string;
};

type GuideItemInfo = {
  total: number;
  __typename: string;
};
