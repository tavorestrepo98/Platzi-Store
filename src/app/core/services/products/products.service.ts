import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  getAllProducts(){
    return this.http.get<Product []>(`${environment.url_api}/`);
  }

  // tslint:disable-next-line: typedef
  getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  createProduct(product: Product): Observable<object>{
    return this.http.post(`${environment.url_api}`, product);
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<object>{
    return this.http.put(`${environment.url_api}/${id}`, changes);
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete(`${environment.url_api}/${id}`);
  }

}
