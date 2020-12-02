import { NgModule } from '@angular/core';
import { CommonLayoutModule } from '../common-module/common-module.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [
        CommonLayoutModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DashboardComponent
    ]
})

export class DashboardModule { }

