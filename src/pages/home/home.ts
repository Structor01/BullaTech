import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import { AuthService } from "../../services/auth";
import {NgForm} from "@angular/forms";
import firebase from 'firebase';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    isAuthenticated;

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        private authService: AuthService) {}

    toggleMenu() {
        this.menuCtrl.toggle();
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

    onSignin(form: NgForm) {
        this.authService.authsignin(form.value.email, form.value.psw)
            .then(
                data => {
                    alert('Ok');
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
