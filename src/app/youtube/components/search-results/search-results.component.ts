import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { Card, StatisticVideoResponse } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() newSearchText: string;
  constructor(public youtubeService: YoutubeService) {}
  searchText = '';
  maxResults = '3';
  cards: Card[] = [];
  ngOnInit(): void {
    // getVideoResponse() {
    //   this.youtubeService
    //     .getVideos(this.searchText, this.maxResults)
    //     .subscribe((response: StatisticVideoResponse) => {
    //       this.cards = response.items.map((item) => {
    //         const card: Card = {
    //           title: item.snippet.title,
    //           description: item.snippet.description,
    //           imageUrl: item.snippet.thumbnails.medium.url,
    //           publishedAt: item.snippet.publishedAt,
    //           viewCount: item.statistics.viewCount,
    //           likeCount: item.statistics.likeCount,
    //           dislikeCount: item.statistics.dislikeCount,
    //           commentCount: item.statistics.commentCount,
    //         };
    //         return card;
    //       });
    //       console.log(this.cards);
    //     });
    // }
  }
}
