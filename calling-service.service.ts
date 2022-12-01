import { Injectable } from '@angular/core';
import {GoogleAuthProvider} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class CallingServiceService {

  constructor(private fireAuth:AngularFireAuth,private router:Router) { }


  googleAuth(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res)=>{
      this.router.navigate(["dashboard"]);
      localStorage.setItem("token",JSON.stringify(res.user?.uid))
    },err=>{
      alert(err.message);
    })
  }
}
