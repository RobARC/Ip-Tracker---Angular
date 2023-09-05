import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherIPComponent } from './searcher-ip/searcher-ip.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SendDataToResultsService } from './sendDataToResults.service';

@NgModule({
  declarations: [
    AppComponent,
    SearcherIPComponent,
    ResultsComponent,
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SendDataToResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
