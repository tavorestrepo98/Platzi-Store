import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../core/services/products/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      console.log(params);
      const id: string = params.id;
      this.product = this.productService.getProduct(id);
      console.log(this.product);

    });
  }

}
