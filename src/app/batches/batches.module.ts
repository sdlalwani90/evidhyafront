import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BatchesComponent } from './batches.component';
import { CommonLayoutModule } from '../common-module/common-module.module';
import { FilterModule } from '../search/pipe.module';
const routes: Routes = [
    { path: '', component: BatchesComponent }
];

@NgModule({
    imports: [
        CommonLayoutModule,
        FormsModule,
        FilterModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        BatchesComponent
    ]
})

export class BatchesModule { }

