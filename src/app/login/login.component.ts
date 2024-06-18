import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { UserStorageService } from 'src/services/storage/user-storage.service';
import { User } from '../classes/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hidePassword = true;
  isLoggedIn: string ;
  user: User = new User();
  

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
   
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  
  onSubmit(): void{
    this.user = new User();
    const username = String(this.loginForm.get('email')!.value);
    const password = String(this.loginForm.get('password')!.value);
    this.user.userEmail = username;
    this.user.userPassword = password;
    this.authService.doAuth(this.user).subscribe((data:any)=>{
      this.user=data;
      console.log(data);
      if(data == null || data == "Wrong Password"){
        this.snackbar.open('Wrong passowrd', 'ERROR', { duration: 5000 });
      }
      else if(data === 'Incorrect UserName and Password'){
        this.snackbar.open('Incorrect Email Address', 'ERROR', { duration: 5000 });
      }
      else if(data != null ){
        localStorage.setItem("Token", data);
        localStorage.setItem("auth-user", username);
        localStorage.setItem("user-type", this.user.userRole);
        alert("Logged In Successfully");
        this.router.navigateByUrl("/home");
        this.isLoggedIn = 'true';
      }

    })

  }

}
