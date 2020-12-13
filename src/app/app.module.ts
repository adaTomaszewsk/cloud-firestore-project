import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {RouterModule, ROUTES} from '@angular/router';

import { AuthGuard } from './auth.guard';
import {LoginComponent} from './login.component.tes';
import {DashboardComponent} from './dashbord.component';


var firebaseConfig = {
  apiKey: 'AIzaSyDXxpxn5Lk8IZiyQDtQDbh9QPxnaDml4jE',
  authDomain: 'sharemeal-f6381.firebaseapp.com',
  databaseURL: 'https://sharemeal-f6381.firebaseio.com',
  projectId: 'sharemeal-f6381',
  storageBucket: 'sharemeal-f6381.appspot.com',
  messagingSenderId: '135229201487',
  appId: '1:135229201487:web:2b727afd03660027891e3a',
  measurementId: 'G-5PZ026Z6RH'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    // RouterModule.forRoot(ROUTES),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
