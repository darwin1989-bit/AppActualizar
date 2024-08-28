import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { AuthService } from "../../services/auth.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [
    `
      .text-xxs {
        font-size: 0.6rem;
      }
    `,
  ],
})
export class LoginComponent {
  public regUserName: RegExp = /^[a-zA-Z.]+$/;

  loginForm = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
    password: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
  });

  get usernameControl(): FormControl {
    return this.loginForm.get("username") as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }

  constructor(public layoutService: LayoutService, private fb: FormBuilder, private authService: AuthService, private toastMessagesService: ToastMessagesService) {}

  public signIn(): void {
    this.loginForm.markAsPending();
    const credentials: any = this.loginForm.value;
    this.authService.logIn(credentials).subscribe({
      error: (err) => {
        this.passwordControl.reset();
        this.toastMessagesService.showToast("tc", "error", "Error", err);
        this.loginForm.setErrors({ invalidCredentials: false });
        document.getElementById("myFocus")!.focus();
      },
    });
  }
}
