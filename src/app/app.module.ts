import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, CoreModule, MainRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
