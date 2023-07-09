import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  console.log(sessionStorage.getItem("token"));
  if (!sessionStorage.getItem("token")) {
    router.navigateByUrl("/app/login");
    return false;
  } else {
    return true;
  }
};
