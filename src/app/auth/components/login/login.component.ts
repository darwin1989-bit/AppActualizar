import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Message } from "primeng/api";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent {
  public msgs: string = "";

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

  constructor(public layoutService: LayoutService, private toastMesagge: ToastMessagesService, private fb: FormBuilder, private authService: AuthService) {}

  public signIn(): void {
    this.loginForm.markAsPending();
    const credentials: any = this.loginForm.value;
    this.authService.logIn(credentials).subscribe({
      error: (err) => {
        this.loginForm.reset();
        this.msgs = err;
        this.loginForm.setErrors({ invalidCredentials: false });
      },
    });
  }
}
