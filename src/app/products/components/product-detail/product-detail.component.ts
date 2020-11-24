import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../../core/services/products//products.service';
import { Product } from '../../../core/models/product.model';

import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => this.productService.getProduct(params.id))
    );
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
    .subscribe(
      producto => {
      console.log(producto);
    },
    error => {
      console.error('Error: ', error);
    });
  }

  updateProduct(): void {
    const updateProduct: Partial<Product> = {
      price: 1130,
      description: 'edicion de titulo'
    };
    this.productService.updateProduct('29', updateProduct)
    .subscribe(
    producto => {
    console.log(producto);
    },
    error => {
      console.error('Error: ', error);
    });
  }

  deleteProduct(): void {
    this.productService.deleteProduct('29')
    .subscribe(resp =>{
      console.log(resp);
    });
  }

  getFile(): void{
    this.productService.getFile()
    .subscribe(content => {
      console.log(content);
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      FileSaver.saveAs(blob, 'hello.txt');
    });
  }

}
