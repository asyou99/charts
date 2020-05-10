import {Component, OnInit} from '@angular/core';
import {ChartsService} from '../shared/charts.service';
import {Department} from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {

  departmens: Department[];

  constructor(private chartsService: ChartsService) {

  }

  ngOnInit() {

    this.getDataChart();

  }

  getDataChart() {

    return this.chartsService.getAll().subscribe((response: Department[]) => {

      this.departmens = response;

    });
  }
}
