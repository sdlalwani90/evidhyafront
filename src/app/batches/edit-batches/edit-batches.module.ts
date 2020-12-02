import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { CommonLayoutModule } from '../../common-module/common-module.module';
import { EditBatchesComponent } from './edit-batches.component';


const routes: Routes = [
    { path: '', component: EditBatchesComponent }
];

@NgModule({
  imports: [
    CommonLayoutModule,
    FormsModule,
    NgSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditBatchesComponent]
})
export class EditBatchesModule { }
