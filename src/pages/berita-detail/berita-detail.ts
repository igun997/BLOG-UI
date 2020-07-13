import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the BeritaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berita-detail',
  templateUrl: 'berita-detail.html',
})
export class BeritaDetailPage {
  detailBerita:any
  private default_url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {

    this.default_url = "https://via.placeholder.com/400x200";
    let data = this.navParams.data;
    console.log("Construct")
    console.log(data)
    this.api.feed_detail(data.id).subscribe(d =>{
      this.detailBerita = {
        title:d.data.title,
        content:d.data.content,
        image:((d.data.featured_image !== null)?d.data.featured_image:this.default_url),
        video:((d.data.featured_video !== null)?d.data.featured_video:this.default_url),
        featuredHeader:((d.data.featured_video !== null)?"video":"image")
      }
    },error => {
      this.api._alert("Artikel tidak ditemukan");
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeritaDetailPage');
  }

  ionViewWillEnter(){
    console.log("Did Enter")
    let data = this.navParams.data;
    console.log(data)
    this.api.feed_detail(data.id).subscribe(d =>{
      this.detailBerita = {
        title:d.data.title,
        content:d.data.content,
        image:((d.data.featured_image !== null)?d.data.featured_image:this.default_url),
        video:((d.data.featured_video !== null)?d.data.featured_video:this.default_url),
        featuredHeader:((d.data.featured_video !== null)?"video":"image")
      }
    },error => {
      this.api._alert("Artikel tidak ditemukan");
    })
  }

}
