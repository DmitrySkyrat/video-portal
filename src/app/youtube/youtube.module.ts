import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';
import { RouterModule } from '@angular/router';
import { YoutubeComponent } from './youtube.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SearchResultsComponent, DetailedInformationComponent, YoutubeComponent],
  imports: [CoreModule, MaterialModule, RouterModule.forChild([{ path: '', component: YoutubeComponent, children: [
    {path: '', component: SearchResultsComponent},
    {path: 'detailed-info', component: DetailedInformationComponent}
  ] }])],
  exports: [RouterModule],
})
export class YoutubeModule {}
