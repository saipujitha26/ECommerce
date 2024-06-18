import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { User } from '../classes/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  hidePassword = true;
  user : User = new User();

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName: [null, [Validators.required]],
      userEmail: [null, [Validators.required, Validators.email]],
      userPassword: [null, [Validators.required, Validators.minLength(6)]],
      // confirmPassword: [null, [Validators.required, Validators.minLength(6)]],
      userMobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }



  onSubmit(): void {


    this.authService.register(this.signupForm.value).subscribe({
      next: (response) => {
        if (typeof response === 'string' && response === 'User Already Exists') {
          this.snackBar.open('User already exists. Please use a different email.', 'Close', {
            duration: 3000,
          });
        } else {
          console.log('User added successfully', response);
          this.snackBar.open('User added successfully', 'Close', {
            duration: 3000,
          });
          this.router.navigateByUrl('/login');
        }
      },
      error: (error) => {
        console.error('An error occurred:', error.message);
        this.snackBar.open('An error occurred. Please try again.', 'Close', {
          duration: 3000,
        });
      }
    });

  }
}