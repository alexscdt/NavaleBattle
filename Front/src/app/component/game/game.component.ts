import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  win = false;

  column = ['1','2','3','4','5','6','7','8','9','10']
  row = ['/','A','B','C','D','E','F','G','H','I','J']

  Player = ['B2','B3','B4','B5','B6','G3','H3','I3','J3','B9','C9','D9','F4','F5']
  IA = ['H2','H3','H4','H5','H6','G8','H8','I8','J8','D7','D8','D9','A1','B1']
  hit = [];

  coup = 0;
  playing = false;

  constructor(
    private httpClient:HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickTray(where : any) {
    this.coup++

    if(this.IA.indexOf(where) == -1)
      // @ts-ignore
      document.getElementById(where).style.background = 'red';
    else { // @ts-ignore
      if (this.hit.indexOf(where) == -1) {
            // @ts-ignore
            document.getElementById(where).style.background = 'green';
            // @ts-ignore
            this.hit.push(where)
            if (this.hit.length == this.IA.length) {
              this.win = true;
            }
            console.log(this.hit)
          }
    }
  }

  Ia() {

  }

  clickPlay() {
  //  this.initGame()
    this.playing = true;
  }

  /* initGame() {
    let i = 0;

    while(i < this.Player.length) {
      // @ts-ignore
      document.getElementById(this.Player[i]).style.background = 'gray'
      i++;
    }

  } */

  random(min : any, max : any) {
    return Math.random() * (max - min) + min;
  }

  //sauvegarde du score

  save() {
    this.httpClient.post<any>('http://localhost:8080/newScore', {

      nom : 'Alexandre',
      mail : 'aschmidt@myges.fr',
      scorePlayer : this.coup,

    })
      .subscribe(
        (res) => {
          console.log('réussite')
          this.router.navigate(["/Home"]);
        },
        (error) => {
          console.log(error)

        }
      );
  }
}
