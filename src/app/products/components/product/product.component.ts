
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    today = new Date();

    // tslint:disable-next-line: typedef
    addCart() {
        console.log('Agreagar carrito');
        this.productClicked.emit(this.product.id);
    }

}
