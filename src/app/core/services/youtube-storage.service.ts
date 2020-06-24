import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeStorageService {
  private searchTextSource = new Subject<string>();
  updateNewSearchText(newSearchText: string) {
    this.searchTextSource.next(newSearchText);
  }
}
