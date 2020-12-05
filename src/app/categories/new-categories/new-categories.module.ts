import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { CommonLayoutModule } from '../../common-module/common-module.module';
import { NewCategoriesComponent } from './new-categories.component';

const routes: Routes = [
    { path: '', component: NewCategoriesComponent }
];

@NgModule({
  	imports: [
	    CommonLayoutModule,
	    FormsModule,
	    NgSelectModule,
	    RouterModule.forChild(routes)
  	],
  	declarations: [NewCategoriesComponent]
})
export class NewCategoriesModule { }
