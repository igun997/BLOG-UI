import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {LandingPage} from "../../pages/landing/landing";
import {KuesionerPage} from "../../pages/kuesioner/kuesioner";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  isLogin:boolean = false;
  tabs = [];
  onLoggedIn = [];
  onLoggedOut = [];
  constructor(public http: HttpClient) {
    this.tabs = [
     {
        label:"Home",
        root:HomePage,
        icon:"home",
        show:false,
        id:"home"
      },{
        label:"Informasi",
        root:LandingPage,
        icon:"calendar",
        show:false,
        id:"berita"
      },{
        label:"Kuesioner",
        root:KuesionerPage,
        icon:"help",
        show:false,
        id:"kuesioner"
      }
    ];
    this.onLoggedIn = [

    ]
    this.onLoggedOut = [
      "home",
      "kuesioner",
      "berita",
    ]
  }
  _setLogin(value){
    this.isLogin = value;
  }
  isAuth():boolean {
    return  this.isLogin;
  }

  getActiveMenus(){
    this.tabs.forEach(value => {
      value.show = false;
    })
    if (this.isLogin){
      this.tabs.forEach(value => {
        this.onLoggedIn.forEach(v=>{
          if (v == value.id){
            value.show = true;
            return;
          }
        })
      });
    }else{
      this.tabs.forEach(value => {
        this.onLoggedOut.forEach(v=>{
          if (v == value.id){
            value.show = true;
            return;
          }
        })
      });
    }
    return this.tabs;
  }


}
