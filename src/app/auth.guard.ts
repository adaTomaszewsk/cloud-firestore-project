import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authState$.pipe(map(state => {
        if (state !== null) { return true; }

        this.router.navigate(['/login']);
        return false;
      }
      )
    );
  }
}




// import {Injectable} from '@angular/core';
// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
// import {LoginService} from '../services/login.service';
// import {SessionStorageService} from '../services/session-storage';
//
//
// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private router: Router,
//     private authenticationService: LoginService,
//     private sessionService: SessionStorageService
//   ) {}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const currentUser = this.authenticationService.currentUser;
//     if (currentUser && this.isUserInRole('CUSTOMER', this.sessionService.get('currentUser').userRoles)) {
//       return true;
//     } else if (currentUser) {
//       this.router.navigate(['/dostawca']);
//       return false;
//     }
//
//     this.router.navigate(['/logowanie']);
//     return false;
//   }
//
//   isUserInRole(role: string, roles: Array<string>): boolean {
//     // console.log(roles);
//     for (const userRole of roles) {
//       // console.log(userRole);
//       if (role === userRole) {
//         return true;
//       }
//     }
//     return false;
//   }
// }




  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const currentUser = this.authenticationService.currentUserValue;
  //   if (currentUser) {
  //     console.log("Zalogowany użytkownik");
  //     // check if route is restricted by role
  //     if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
  //       // role not authorised so redirect to home page
  //       this.router.navigate(['/']);
  //       return false;
  //     }
  //
  //     // authorised so return true
  //     return true;
  //   }

    // not logged in so redirect to login page with the return url
//     this.router.navigate(['/logowanie'], { queryParams: { returnUrl: state.url } });
//     return false;
//   }
// }
