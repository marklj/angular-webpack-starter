import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import isProduction from '../helpers/isProduction';
import { Logger } from '../logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!isProduction()) {
      // Do something with the error
      log.error('Request error', response);
    }
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw response;
  }
}
