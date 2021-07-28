import { NgModule } from "@angular/core";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [MatPaginatorModule, MatTableModule],
  exports: [MatPaginatorModule, MatTableModule]
})

export class MaterialModule {}
