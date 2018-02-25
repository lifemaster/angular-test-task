import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { PrivateRoutesGuard } from './guards/private.routes.guard';

import { AuthService } from './services/auth/auth.service';
import { ProductsService } from './services/products/products.service';


const appRoutes: Routes = [
  { path: '', component: MainComponent, canActivate: [PrivateRoutesGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [PrivateRoutesGuard] },
  { path: '**', component: NotFoundComponent, canActivate: [PrivateRoutesGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    UserInfoComponent,
    ProductsListComponent,
    LoginFormComponent,
    MainContentComponent,
    NotFoundComponent,
    UserProfileComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CookieModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    PrivateRoutesGuard,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
