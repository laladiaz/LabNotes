import { Component } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ){}
  login(){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result)=>{
      console.log('You are in!', result);
      this.router.navigate(['home']);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  logout(){
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }
}
