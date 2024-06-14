import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  resetPasswordForm!: FormGroup;
  hidePassword = true;
  isEmailSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });

    this.resetPasswordForm = this.formBuilder.group({
      confirmationCode: [null, [Validators.required]],
      newPassword: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required]]
    }, { validators: this.passwordsMatch });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  passwordsMatch(group: FormGroup): { [key: string]: any } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { notMatching: true };
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    const email = this.forgotPasswordForm.get('email')!.value;

    this.authService.forgotPassword(email).subscribe(
      (res: any) => {
        this.snackbar.open('Confirmation code sent to your email', 'Ok', { duration: 5000 });
        this.isEmailSubmitted = true;
      },
      (error: any) => {
        this.snackbar.open('Error sending confirmation code', 'ERROR', { duration: 5000 });
      }
    );
  }

  onResetSubmit(): void {
    if (this.resetPasswordForm.invalid) {
      return;
    }

    const email = this.forgotPasswordForm.get('email')!.value;
    const confirmationCode = this.resetPasswordForm.get('confirmationCode')!.value;
    const newPassword = this.resetPasswordForm.get('newPassword')!.value;

    this.authService.resetPassword(email, confirmationCode, newPassword).subscribe(
      (res: any) => {
        this.snackbar.open('Password reset successfully', 'Ok', { duration: 5000 });
      },
      (error: any) => {
        this.snackbar.open('Error resetting password', 'ERROR', { duration: 5000 });
      }
    );
  }
}
