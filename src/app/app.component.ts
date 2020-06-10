import { Component } from '@angular/core';
import { gameInfo } from '../assets/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  picsPath = 'assets/pics/';

  title: string = 'selectGames';
  gameHasBeenSelected: boolean;
  gameSelected: gameInfo;

  // animation
  eleAnimation = 'swirl_fwd';

  
  
   
  
  gamesNamesParent: gameInfo[] = [
    {gameName:"APPLE IPHONES", gameUrl: "AppleIphones/"},
    {gameName:"TOP FOOTBALL PLAYERS LV 1", gameUrl: "TopFootballPlayers1/"},
    {gameName: "VIDEO GAMES SCREENSHOTS LV 1" , gameUrl: "VideoGamesScreenShots1/"},
    {gameName: 'VIDEO GAMES SCREENSHOTS LV 2' , gameUrl: 'VideoGamesScreenShots2/'},
    {gameName: 'VIDEO GAMES SCREENSHOTS LV 3' , gameUrl: 'VideoGamesScreenShots3/'},
    {gameName: 'VIDEO GAMES SCREENSHOTS LV 4' , gameUrl: 'VideoGamesScreenShots4/'},
    {gameName: 'LOL CHARACTERS' , gameUrl: 'LolCharacters/'},
    {gameName: 'LOL ITEMS' , gameUrl: 'LolItems/'},
    {gameName: 'TOP ACTORS' , gameUrl: 'TOPACTORS/'},
    {gameName: 'POKEMONS' , gameUrl: 'POKEMONS/'},
     


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
