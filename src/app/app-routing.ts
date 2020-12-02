import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'batches', loadChildren: './batches/batches.module#BatchesModule' },
    { path: 'batch/new', loadChildren: './batches/new-batches/new-batches.module#NewBatchesModule' },
    { path: 'batch/update/:id', loadChildren: './batches/edit-batches/edit-batches.module#EditBatchesModule' },
    { path: 'batch/:id', loadChildren: './batches/view-batches/view-batches.module#ViewBatchesModule' },
    { path: '', loadChildren: './login/login.module#LoginModule' },
    { path: '**', redirectTo: '' },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RouteModule { }
