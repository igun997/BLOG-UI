import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import {ApiProvider} from "../../providers/api/api";
import {BeritaDetailPage} from "../berita-detail/berita-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('homeChart') homeChart;
  bars: any;
  colorArray: any;
  posts = []
  posts_list = []
  constructor(public navCtrl: NavController,private api:ApiProvider) {

  }

  ionViewDidEnter() {
    // this.createBarChart();
    this.posts = []
    this.posts_list = []
    this.api.feed_home(5,1).subscribe(data=>{
      data.data.forEach(item => {
        this.posts.push({
          label:item.title,
          image:item.featured_image,
          id:item.id
        });
      })
    },error => {
      this.api._alert("Error");
    });
    this.api.feed_home(5,2).subscribe(data=>{
      data.data.forEach(item => {
        this.posts_list.push({
          label:item.title,
          image:item.featured_image,
          desc:item.content,
          id:item.id
        });
      })
    },error => {
      this.api._alert("Error");
    });
  }
  toPost(id){
    this.navCtrl.push(BeritaDetailPage,{
      id:id
    })
  }
  createBarChart() {
    this.bars = new Chart(this.homeChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','Mei'],
        datasets: [{
          label: 'Perkembangan Anak',
          data: [Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
