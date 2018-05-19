import { Component } from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { AuthService } from "../../services/auth";
import {NgForm} from "@angular/forms";
import firebase from 'firebase';
import {MobileLoginPage} from "../mobile-login/mobile-login";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    isAuthenticated;
    mobile = false;

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        private authService: AuthService,
        public plt: Platform) {
        if(this.plt.is('mobile')) {
            this.mobile = true;
        }
    }

    toggleMenu() {
        this.menuCtrl.toggle();
    }

    mobileMenu() {
        this.navCtrl.push(MobileLoginPage);
    }

    ionViewDidLoad() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
               console.log(user);
               this.isAuthenticated = true;
            } else {
                console.log("Não logado");
                this.isAuthenticated = false;
            }
        });
    }

    openPlatform() {
       window.location.href = '/platform';
    }

    onSignin(form: NgForm) {
        this.authService.authsignin(form.value.email, form.value.psw)
            .then(
                data => {
                    this.openPlatform();
                }
            )
            .catch(error => {
                // loading.dismiss();
                // const alert = this.alertCtrl.create({
                //     title: 'Ish! Algo errado não está certo!',
                //     message: error.message,
                //     buttons: ['Ok']
                // });
                // alert.present();
                alert(error.message)
                this.navCtrl.popToRoot();
            });
    }
}
