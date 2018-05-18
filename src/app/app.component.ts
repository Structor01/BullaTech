import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from "firebase";

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  authenticated;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
        apiKey: "AIzaSyBzkmc0tWavACJbegvBgP2zGqpBEyzfNV8",
        authDomain: "prospera-farma.firebaseapp.com",
        databaseURL: "https://prospera-farma.firebaseio.com",
        projectId: "prospera-farma",
        storageBucket: "prospera-farma.appspot.com",
        messagingSenderId: "797187689569"
    });



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

