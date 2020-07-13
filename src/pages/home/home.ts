import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('homeChart') homeChart;
  bars: any;
  colorArray: any;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    // this.createBarChart();
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
