import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth";

/**
 * Generated class for the MobileLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-mobile-login',
    templateUrl: 'mobile-login.html',
})
export class MobileLoginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad MobileLoginPage');
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
