import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateChart();
  }

  generateChart(){
    new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Match1', 'Match2', 'Match3', 'Match4', 'Match5', 'Match6'],
          datasets: [{
              label: 'Score ',
              fill: false,
              pointStyle: 'rectRot',
              pointRadius: 6,
              data: [12, 25, 3, 35, 2, 45],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
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
          },
          legend: {
            display: false
         },
         element: {
          fill: false
        }
      },
      
    });
  }
  // ngAfterViewChecked(){
  //   this.chart.render();
  // }

}
