import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const homeGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (!sessionStorage.getItem("token")) {
    return true;
  } else {
    router.navigateByUrl("/app/home");
    return false;
  }
};
