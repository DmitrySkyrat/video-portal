import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './components/search-results.component';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchResultsComponent, DetailedInformationComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: SearchResultsComponent }]),
  ],
  exports: [RouterModule],
})
export class YoutubeModule {}
