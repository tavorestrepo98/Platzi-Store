import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from '../../models/product.model';

import { environment } from '../../../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import * as Sentry from '@sentry/browser';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product []>{
    return this.http.get<Product []>(`${environment.url_api}/`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${environment.url_api}/${id}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  createProduct(product: Product): Observable<object>{
    return this.http.post(`${environment.url_api}`, product)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<object>{
    return this.http.put(`${environment.url_api}e/${id}`, changes)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete(`${environment.url_api}/${id}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getFile(): Observable<any>{
    return this.http.get('assets/files/text.txt', {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse): Observable<never>{
    Sentry.captureException(error);
    console.log(error);
    return throwError('Algo salió mal');
  }

}
