import { NgModule } from "@angular/core";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  exports: [MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})

export class MaterialModule {}
