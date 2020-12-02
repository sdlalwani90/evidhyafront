import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsearchPipe } from './pipe/testsearch.pipe';

const components = [
    TestsearchPipe
];

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ...components,
        CommonModule
    ],
    declarations: [...components ],
    providers:    [ TestsearchPipe ]
})

export class FilterModule { }
