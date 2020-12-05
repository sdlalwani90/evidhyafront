import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories.component';
import { CommonLayoutModule } from '../common-module/common-module.module';
import { FilterModule } from '../search/pipe.module';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
    { path: '', component: CategoriesComponent }
];

@NgModule({
  imports: [
    CommonLayoutModule,
    FormsModule,
    FilterModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriesComponent]
})
export class CategoriesModule { }
