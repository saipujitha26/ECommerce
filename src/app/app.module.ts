import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoAngularMaterialModule } from './DemoAngularMaterailModule';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { CarousalComponent } from './carousal/carousal.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeMenuExpandComponent } from './home-menu-expand/home-menu-expand.component';
import { TopWinnersComponent } from './top-winners/top-winners.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MessageBarComponent } from './message-bar/message-bar.component';
import { WinGoComponent } from './win-go/win-go.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    FooterComponent,
    HomeComponent,
    NewGameComponent,
    CarousalComponent,
    HomeMenuComponent,
    HomeMenuExpandComponent,
    TopWinnersComponent,
    NavBarComponent,
    MessageBarComponent,
    WinGoComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoAngularMaterialModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
