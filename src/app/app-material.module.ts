import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [],
    imports: [
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,

    ],
    exports: [
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
    ]
})
export class AppMaterialModule { }