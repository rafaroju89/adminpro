import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent implements OnInit {
  @Input() data: MultiDataSet;

  @Input() chartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() chartData: MultiDataSet = [[350, 450, 100],];
  @Input() chartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
    console.log("HOLA");
    console.log(this.data);
  }

}
