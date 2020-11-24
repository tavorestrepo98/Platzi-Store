import { Injectable } from '@angular/core';
import { HttpHandler,
        HttpInterceptor,
        HttpRequest,
        HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../core/services/token/token.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private tokenService: TokenService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    request = this.addToken(request);
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any>{
    const token = this.tokenService.getToken();
    if (token){
      request = request.clone({
        setHeaders: {
          token
        },
      });
      return request;
    }
    return request;
  }

}
