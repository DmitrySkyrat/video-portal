import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [FormsModule, CommonModule],
  declarations: [ErrorComponent],
})
export class SharedModule {}
