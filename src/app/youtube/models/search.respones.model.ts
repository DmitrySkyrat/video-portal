export interface VideoSearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: string;
  items: Array<VideoItem>;
}
export interface VideoItem {
  etag: string;
  id: ItemID;
  kind: string;
  snippet: SearchSnippet;
}
export interface ItemID {
  kind: string;
  videoId: string;
}
export interface SearchSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: object;
  title: string;
}
