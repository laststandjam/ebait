// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs';

// import { environment } from '../enviorments/enviroment'
// import { UserService } from '../service/user.service';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//     constructor(private userService:UserService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // add auth header with jwt if user is logged in and request is to the api url
//         const currentUser = this.userService.userValue;
//         const isLoggedIn = currentUser && currentUser.token;
//         const isApiUrl = request.url.startsWith(environment.apiUrl);
//         if (isLoggedIn && isApiUrl) {
//             request = request.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${currentUser.token}`
//                 }
//             });
//         }

//         return next.handle(request);
//     }
// }