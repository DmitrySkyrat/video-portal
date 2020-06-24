export interface StatisticVideoResponse {
  etag: string;
  items: Array<StatisticVideoResponseItem>;
  kind: string;
  pageInfo: object;
}
export interface StatisticVideoResponseItem {
  etag: string;
  id: string;
  kind: string;
  snippet: StatisticVideoResponseItemSnippet;
  statistics: VideoStatistics;
}
export interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
export interface StatisticVideoResponseItemSnippet {
  categoryId: string;
  channelId: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: object;
  publishedAt: string;
  tags: object;
  thumbnails: StatisticThumbnails;
  title: string;
}
export interface StatisticThumbnails {
  default?: StatisticPicture;
  medium?: StatisticPicture;
  high?: StatisticPicture;
  maxres?: StatisticPicture;
  standard?: StatisticPicture;
}
export interface StatisticPicture {
  url: string;
  width: string;
  height: string;
}
export interface Card {
  title: string;
  description: string;
  publishedAt: string;
  imageUrl: string;
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  commentCount: string;
}
