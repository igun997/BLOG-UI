import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BeritaDetailPage} from "../berita-detail/berita-detail";
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the BeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html',
})
export class BeritaPage {
  listBerita = []
  default_url = "https://via.placeholder.com/400x200"
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
    // let dummy = [
    //   {
    //     src:"https://via.placeholder.com/400x200",
    //     title:"Contoh Judul",
    //     description:"lorem ipsum dolor sit amat , dan la al alalal",
    //     id:1
    //   },
    //   {
    //     src:"https://via.placeholder.com/400x200",
    //     title:"Contoh Judul 2",
    //     description:"lorem ipsum dolor sit amat , dan la al alalal",
    //     id:2
    //   }
    // ]
    let posts = [];

    this.api.feed(10,1,this.navParams.data.id).subscribe(d=>{
      // let next = d.next_page_url;
      let data = d.data;
      data.forEach(item =>{
        posts.push({
          src:((item.featured_image !== null)?item.featured_image:this.default_url),
          title:item.title,
          content:item.content,
          id:item.id,
        });
      });
    },error => {
      this.api._alert("Artikel Tidak Ditemukan");
    });

    this.listBerita = posts;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeritaPage');
  }
  ionViewWillEnter(){
    this.listBerita = [];
    let posts = [];

    this.api.feed(10,1,this.navParams.data.id).subscribe(d=>{
      // let next = d.next_page_url;
      let data = d.data;
      data.forEach(item =>{
        posts.push({
          src:((item.featured_image !== null)?item.featured_image:this.default_url),
          title:item.title,
          content:item.content,
          id:item.id,
        });
      });
    },error => {
      this.api._alert("Artikel Tidak Ditemukan");
    });

    this.listBerita = posts;
  }
  link(id){
    console.log(id)
    this.navCtrl.push(BeritaDetailPage,{id:id});
  }

}
