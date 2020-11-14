import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { Product } from '../../../core/models/product.model';

@Pipe({
  name: 'cartRepeat'
})
export class CartRepeatPipe implements PipeTransform {

  products: Product[] = [];
  total = 0;

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cart$
    .subscribe(products => {
      this.products = products;
    });
  }

  transform(id: string): number {
    this.products.forEach(prod => {
      if (prod.id === id){
        this.total++;
      }
    });
    console.log(this.total);
    return this.total;
  }

}
