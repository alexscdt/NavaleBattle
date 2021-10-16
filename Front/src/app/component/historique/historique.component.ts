import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  History = [{"pseudo" : "none", "score" : "none", "date" : "none"}];
  podium = [{"pseudo" : "none", "score" : "none", "date" : "none"}];

  constructor(
    private httpClient:HttpClient) { }
  ngOnInit(): void {
    this.loadHistory()
    this.Classement()
  }

  loadHistory() {
    this.httpClient.get<string>('http://localhost:8080/History').subscribe((data) => {

      // @ts-ignore
      this.History = data

    });
  }

  Classement() {
    this.httpClient.get<string>('http://localhost:8080/Classement').subscribe((data) => {

      // @ts-ignore
      this.podium = data

    });
  }

}
