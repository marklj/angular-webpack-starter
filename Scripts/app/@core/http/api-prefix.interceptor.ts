/* eslint-disable @typescript-eslint/comma-dangle */
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (!/^(http|https):/i.test(request.url)) {
    //   request = request.clone({ url: environment.serverUrl + request.url });
    // }
    // return next.handle(request);
    throw new Error('Not implemented');
  }
}
