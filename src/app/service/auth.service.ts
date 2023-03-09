import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ){}
  signIn(){
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
