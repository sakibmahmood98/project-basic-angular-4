import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { 

  }

  canActivate() {
    let user = this.authService.currentUser;
    if(user && this.authService.currentUser.admin) return true;

    this.router.navigate(['/no-access']);
    return false;
  }
}
