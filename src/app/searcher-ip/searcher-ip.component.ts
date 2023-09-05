import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { SendDataToResultsService } from '../sendDataToResults.service';

@Component({
  selector: 'app-searcher-ip',
  templateUrl: './searcher-ip.component.html',
  styleUrls: ['./searcher-ip.component.scss'],
  providers: []
})
export class SearcherIPComponent {
    searchIp!: string;
    IpAddress!: string;
    checkoutForm: any;
    @Input() myData: any;


    constructor(
      private fb: FormBuilder,
      private http : HttpClient,
      private dataService: DataService,
      private sendDataToResults: SendDataToResultsService
      ) {
        this.checkoutForm = this.fb.group({
          ip:""
        }); 
      }

    ngOnInit(): void {}
      
    search(){

      this.IpAddress = this.checkoutForm.value.ip
      //Consultamos la API de las IPs
      this.dataService.getAll(this.IpAddress).subscribe(resp => {
        //El Resultado lo almacenamos y lo enviamos 
        this.sendDataToResults.triggerData$.emit(resp);

        this.checkoutForm.reset();
        
      });
    }

   }
