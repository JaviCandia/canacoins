import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;

  constructor(public fireAuth: AngularFireAuth, private fireStore: AngularFirestore, private router: Router) {
    this.fireAuth.authState.subscribe(authState => {
      this.authState = authState;
    })
  }

  // Create user with email/password
  createUser(email: string, password: string, displayName: string, role: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        console.log(result.user);

        // updates the name of the user in the Auth table
        result.user.updateProfile({
          displayName: displayName
        });

        // creates a new record in Firestore table
        this.fireStore.collection<any>('users').doc(result.user.uid).set({
          email: email,
          displayName: displayName,
          createdAt: result.user.metadata.createdAt,
          role: role,
          cash: 0,
        });

        this.router.navigateByUrl('/login');
      }).catch((error: any) => {

      })
  }

  // Login with email/password
  login(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        console.log(result);

        // creates a new record in Firestore table
        this.fireStore.collection<any>('users').doc(result.user.uid).update({
          lastLogin: new Date().getTime().toString()
        });

        this.router.navigate(['/home']);
      }).catch((error) => {

      });
  }

  // Get auth data methods
  get isAuthenticated(): boolean {
    return this.authState !== null;
  }
  currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : null;
  }

  userData(): any {
    if (!this.isAuthenticated) {
      return [];
    }

    return {
      id: this.authState.uid,
      displayName: this.authState.displayName,
      email: this.authState.email,
      phoneNumber: this.authState.phoneNumber,
      photoURL: this.authState.photoURL,
    }
  }

  // Get users
  getUsers() {
    return this.fireStore.collection<User>('users').valueChanges();
  }

  getCurrentUser(){
    return this.fireStore.collection('users').doc(this.authState.uid).snapshotChanges();
  }
}
