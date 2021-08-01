import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [MaterialModule, ReactiveFormsModule, FormsModule, RouterModule.forChild([{path: '', component: LoginComponent}])],
  exports: [RouterModule],
})
export class AuthModule {}
