import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsServices: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.productsServices.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void{
    this.productsServices.deleteProduct(id)
    .subscribe(resp => {
      this.products = this.products.filter(prod => prod.id !== id);
    });
  }

}
