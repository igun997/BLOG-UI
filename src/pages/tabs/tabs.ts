import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {AuthProvider} from "../../providers/auth/auth";
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  authFlag:AuthProvider;
  tabList = [];
  constructor(public auth:AuthProvider,public navCtrl: NavController) {
    this.authFlag = auth;

  }


}
