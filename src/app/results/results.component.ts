import { Component } from '@angular/core';
import { SendDataToResultsService } from '../sendDataToResults.service';
import { dataModels } from '../models/dataModel';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: []
})
export class ResultsComponent {

  data!: any;
  

  constructor(
    private sendDataToResults: SendDataToResultsService
  ) {}

  ngOnInit() {
    // Recibimos los datos de la consulta de la IP y los pintamos en UI
    this.sendDataToResults.triggerData$.subscribe(resp => {
      console.log(resp);

      this.data = resp;
      console.log(this.data);
      
    });
  }
}
