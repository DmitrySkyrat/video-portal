import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, catchError, map, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { VideoSearchResponse } from '../../youtube/models/search.respones.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(public http: HttpClient) {}
  YUOTUBE_VIDEO_DESCRIPTION_URL =
    'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCqxZH1-DqXKOBjkJ4G__GwJCxVxXHPbYs';
  YUOTUBE_SEARCH_URL =
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCqxZH1-DqXKOBjkJ4G__GwJCxVxXHPbYs';

  getVideos(searchText?: string, maxResults: string = '3') {
    let params: HttpParams = new HttpParams();
    params = params.append('type', 'video');
    params = params.append('part', 'snippet');
    params = params.append('maxResults', maxResults);
    params = params.append('q', searchText || 'js');
    return this.http
      .get<VideoSearchResponse>(this.YUOTUBE_SEARCH_URL, { params })
      .pipe(
        delay(500),
        map((response) => {
          const videoIdList = response.items
            .map((item) => item.id.videoId)
            .join(',');
          console.log(videoIdList);
          return videoIdList;
        }),
        mergeMap((videoIdList) => {
          return this.http
            .get(
              `${this.YUOTUBE_VIDEO_DESCRIPTION_URL}&id=${videoIdList}&part=snippet,statistics`
            )
            .pipe(
              catchError((error) => {
                return throwError(error);
              })
            );
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
