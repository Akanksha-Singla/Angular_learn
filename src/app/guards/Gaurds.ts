import { inject } from '@angular/core';
import { UserService } from '../customServices/user.service';

export function authenticationGaurd(): boolean {
  const userService = inject(UserService);

  if (userService.logFlag) { //shared instance variable of service object
    return true; // if true then only it gets activated
  } else {
    window.alert("Admin login required")
    return false;
}}
