import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (!sessionStorage.getItem("token")) {
    router.navigateByUrl("/app/login");
    return false;
  } else {
    return true;
  }
};
