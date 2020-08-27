import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KuesionerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kuesioner',
  templateUrl: 'kuesioner.html',
})
export class KuesionerPage {
  isShow: boolean;
  isCurrent : 0;
  questions : any;
  display: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = [
      {
        question:"Apakah ibu merasa cepat lelah?"
      },
      {
        question:"Apakah ibu merasa letih/ lesu, atau kelelahan setelah melakukan pekerjaan sehari-hari?"
      },
      {
        question:"Apakah ibu sering pusing?"
      },
      {
        question:"Apakah ibu lebih sering merasa bingung akhir-akhir ini dari pada sebelumnya?"
      },
      {
        question:"Apakah ibu terlihat pucat dari pada biasanya (dilihat dari warna bibir)"
      },
      {
        question:"Apakah ibu sering mengalami sesak nafas?"
      },
      {
        question:"apakah ibu mengalami nyeri dada?"
      },
      {
        question:"apakah ibu merasa kaki dan tangan dingin ?"
      },{
        question:"Apakah ibu sulit berkonsentrasi?"
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KuesionerPage');
  }
  ionViewWillEnter(){
    this.isShow = false;
    this.isCurrent = 0;
    this.display = this.questions[this.isCurrent].question;
  }

  next(){
    if (this.questions[this.isCurrent] !== undefined){
      this.display = this.questions[this.isCurrent++].question;
    }else{
      this.isShow = true;
    }

  }

}
