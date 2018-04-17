import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { HttpRequest } from '@angular/common/http/src/request';
import { HttpHandler, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../core/store';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const hc = this.holdingCompanyService.getSelectedHoldingCompany();
        // const id = hc ? hc.Id : 0;
        const url = req.url.endsWith('/') ? req.url : req.url + '/';
        // req = req.clone({
        //     url: `${url}${id}`
        // });
        const token = localStorage.getItem('session');
        const user = JSON.parse(localStorage.getItem('user'));
        if (!token) {
            return next.handle(req);
        }
        if (req.method === 'get') {
            req = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token),
            });
            return next.handle(req);
        // } else {
        //     const body = req.body;
        //     const newBody = {
        //         UserName: user.UserName,
        //         HoldingCompanyId: id,
        //         Model: body
        //     };
        //     req = req.clone({
        //         headers: req.headers.set('Authorization', 'Bearer ' + token),
        //         body: newBody
        //     });
        //     return next.handle(req);
        }

    }
}
