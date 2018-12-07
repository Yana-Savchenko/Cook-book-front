import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (req.headers.get('notoken') !== 'noToken') {
            req = req.clone({
                setHeaders: {
                    Authorization: localStorage.getItem('token') || '',
                }
            });
        // }

        return next.handle(req);
    }
}