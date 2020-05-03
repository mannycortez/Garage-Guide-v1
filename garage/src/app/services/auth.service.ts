import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User;

  constructor(public afa: AngularFireAuth, public router: Router) {
    this.afa.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.setItem("user", null);
      }
    });
  }

  async login(email: string, password: string) {
    var result = await this.afa.signInWithEmailAndPassword(email, password);
    this.router.navigate(["admin"]);
  }

  async loginWithGoogle() {
    await this.afa.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(["admin"]);
  }

  async register(email: string, password: string) {
    var result = await this.afa.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    if (!this.user) {
      return Promise.reject(new Error("No signed in user"));
    }
    return this.user.sendEmailVerification().then(() => {
      this.router.navigate(["verify-email"]);
    });
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afa.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afa.signOut();
    localStorage.removeItem("user");
    this.router.navigate(["login"]);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null;
  }
}
