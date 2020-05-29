import { Component } from '@angular/core';
import { gameInfo } from '../assets/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'selectGames';
  gameHasBeenSelected: boolean;
  itemsDisplayedOnTurn: number = 20;
  gameSelected: gameInfo;

  gamesNamesParent: gameInfo[] = [
    {gameName:"FLAGS", gameUrl: "flags", levels: 5}, 
    {gameName:"ACTORS", gameUrl: "actors", levels: 5}, 
    {gameName:"TOP FOOTBALL PLAYERS", gameUrl: "topFootballPlayers", levels: 3}, 
    {gameName:"TOP ATHLETES", gameUrl: "topAthletes", levels: 4}, 
    {gameName:"MOBILES ALL TIME", gameUrl: "mobilesAllTime", levels: 3}, 
    {gameName:"MOBILES NOKIA", gameUrl: "mobilesNokia", levels: 1}, 
    {gameName:"APPLE IPHONES", gameUrl: "appleIphones", levels: 1}, 
    {gameName:"APPLE WATCHES", gameUrl: "appleWatches", levels: 1}, 
    {gameName:"SPORT CARS", gameUrl: "sportCars", levels: 5}, 
    
  ];

  tableGameSelected(game: gameInfo ) {
    this.gameSelected = game ;
    this.loadGame(game) ;
  }

  loadGame(game: gameInfo){
    this.gameSelected= game;
    this.gameHasBeenSelected = true;
  }

  resetTable(){
    this.gameHasBeenSelected = false;
  }
}
