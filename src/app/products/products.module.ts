import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';


@NgModule({
    declarations:[
        ProductsComponent,
        ProductDetailComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProductsRoutingModule,
        SharedModule
    ]
})
export class ProductsModule {
// tslint:disable-next-line: eofline
}