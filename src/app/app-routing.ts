import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
    { path: 'category/new', loadChildren: './categories/new-categories/new-categories.module#NewCategoriesModule' },
    { path: 'category/update/:id', loadChildren: './categories/edit-categories/edit-categories.module#EditCategoriesModule' },
    { path: 'batches', loadChildren: './batches/batches.module#BatchesModule' },
    { path: 'batch/new', loadChildren: './batches/new-batches/new-batches.module#NewBatchesModule' },
    { path: 'batch/update/:id', loadChildren: './batches/edit-batches/edit-batches.module#EditBatchesModule' },
    //{ path: 'batch/:id', loadChildren: './batches/view-batches/view-batches.module#ViewBatchesModule' },
    { path: 'batch/:id/:type', loadChildren: './batches/view-batches/view-batches.module#ViewBatchesModule' },
    { path: '', loadChildren: './login/login.module#LoginModule' },
    { path: '**', redirectTo: '' },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RouteModule { }
