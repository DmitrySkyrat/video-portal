import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SearchSettingsComponent, FooterComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, SearchSettingsComponent, FooterComponent],
})
export class CoreModule {}
