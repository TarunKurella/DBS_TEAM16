import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';


// go to app.module.ts and in providers see the changes
// also in app.js add 'authorization' in headers section
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(){

    }
    intercept(req: HttpRequest<any>,next: HttpHandler)
    {
        let whichtoken ="user";

        const token= localStorage.getItem('token');

            if(token == undefined)
                return next.handle(req);
            const authreq = req.clone({
                headers: req.headers.set('authorization','Bearer '+ token),
            })

         return next.handle(authreq);
    }
}
