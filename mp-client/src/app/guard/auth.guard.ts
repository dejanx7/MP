import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';



export const authGuard: CanActivateFn = (route, state) => {

  const storageService = inject(StorageService);
  const router = inject(Router);

  if(storageService.isLoggedIn() == true){

    return true;


  } else{

    alert('access denied')
    router.navigate(['/home'])

    return false;

  }
  
};
