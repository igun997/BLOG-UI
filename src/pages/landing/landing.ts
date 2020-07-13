import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {BeritaPage} from "../berita/berita";

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  categories = [];
  next:string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
    this.categories = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  ionViewWillEnter(){
    this.categories =[];
    let colors = [
        "danger",
        "primary"
    ];
    this.api.feed_category(10,1,1).subscribe(data=>{
      let x = 0;
      this.next = data.next_page_url;
      data.data.forEach(item => {
        this.categories.push({
          id:item.id,
          name:item.name,
          color:((x%2 == 0)?colors[0]:colors[1])
        });
        x++;
      })

    },error => {
      this.api._alert("Error");
    })
  }

  detail(id){
    this.api.feed_category_detail(10,1,id).subscribe(res =>{
      if(res.data.length > 0){
        console.log("Exist")
        this.categories =[];
        let colors = [
          "danger",
          "primary"
        ];
        this.api.feed_category_detail(10,1,id).subscribe(data=>{
          let x = 0;
          this.next = data.next_page_url;
          data.data.forEach(item => {
            this.categories.push({
              id:item.id,
              name:item.name,
              color:((x%2 == 0)?colors[0]:colors[1])
            });
            x++;
          })

        },error => {
          this.api._alert("Error");
        })
      }else{
        this.navCtrl.push(BeritaPage,{
          id:id
        })
      }
    },error => {
      this.api._alert("Category Not Found");
    })
  }

  nextpage(path){

  }

}
