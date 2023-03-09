import { Component } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    public afAuth: AngularFireAuth
  ){}
  login(){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result)=>{
      console.log('You are in!', result)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  logout(){
    this.afAuth.signOut();
  }
}
