import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './layout/header/header.component';

const components = [
    HeaderComponent
];
@NgModule({
  	imports: [
	    FormsModule,
	    CommonModule
  	],
  	exports: [
        ...components,
        CommonModule
    ],
   	declarations: [...components]
})
export class CommonLayoutModule { }
