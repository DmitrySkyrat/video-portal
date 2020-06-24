import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SearchSettingsComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, SearchSettingsComponent],
})
export class CoreModule {}
