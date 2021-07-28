import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UserModule } from './users/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, CoreModule, MainRoutingModule, BrowserAnimationsModule, MaterialModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
