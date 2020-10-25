import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';

import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations:[
        DemoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DemoRoutingModule,
        SharedModule
    ]
})
export class DemoModule {
// tslint:disable-next-line: eofline
}