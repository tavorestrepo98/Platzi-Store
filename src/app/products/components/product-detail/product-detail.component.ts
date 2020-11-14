import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products//products.service';
import { Product } from '../../../core/models/product.model';

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
      const id: string = params.id;
      this.fetchProduct(id);
      // this.product = this.productService.getProduct(id);
    });
  }

  fetchProduct(id: string): void{
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct(): void{
    const newProduct: Product = {
      id: '29',
      title: 'Producto Gustavo',
      image: 'assets/images/mug.png',
      price: 33030,
      description: 'Nuevo producto'
    };

    this.productService.createProduct(newProduct)
    .subscribe(producto => {
      console.log(producto);
    });
  }

  updateProduct(): void {
    const updateProduct: Partial<Product> = {
      price: 1130,
      description: 'edicion de titulo'
    };
    this.productService.updateProduct('29', updateProduct)
    .subscribe(producto => {
      console.log(producto);
    });
  }

  deleteProduct(): void {
    this.productService.deleteProduct('29')
    .subscribe(resp =>{
      console.log(resp);
    });
  }

}
