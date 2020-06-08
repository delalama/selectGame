import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EntityDescription , gameData, GameBack} from '../../assets/interfaces';
import { flags, actors, topFootballPlayers, topAthletes, mobilesAllTime, mobilesNokia, appleWatches, sportCars } from '../../app/db/db';
import { Observable, Observer } from 'rxjs';
import { AppleIphonesData } from 'src/assets/pics/AppleIphones/data';
import { TopFootballPlayersData1 } from 'src/assets/pics/TopFootballPlayers1/data';
import { VideoGamesScreenShots1Data } from 'src/assets/pics/VideoGamesScreenShots1/data';
import { computeMsgId } from '@angular/compiler';
import { VideoGamesScreenShots2Data } from 'src/assets/pics/VideoGamesScreenShots2/data';
import { VideoGamesScreenShots3Data } from 'src/assets/pics/VideoGamesScreenShots3/data';
import { VideoGamesScreenShots4Data } from 'src/assets/pics/VideoGamesScreenShots4/data';





@Injectable({
  providedIn: 'root'
})

export class GamesServerService {
  levelRanges ;
  
  constructor() { }
   
  filterByLevel({ items, startIndex, endIndex}) {
    return items.filter((_, index) => index >= startIndex && index <= endIndex)
  }

  getTwelveElementsFromArray(array: EntityDescription[], previousSelected: number){
    let randomNum: number;
    let twelveRandomItems =  [];

    // we dont want to pass 2 "same options" per game
    let arraySelectedNumsPerTurn = []
    
    for ( let i = 0 ; i < 12 ; i++){
      randomNum = Math.floor(Math.random() * array.length-0.001 );
      if ( randomNum == previousSelected || arraySelectedNumsPerTurn.includes(randomNum)){
          i = i-1;
      }else{
        arraySelectedNumsPerTurn.push(randomNum)
        // no podemos pasar referencias a las entidades, sino crear nuevas
        let entity =  Object.assign({},array[randomNum]); 
        twelveRandomItems.push(entity); 
      }
    }
    return twelveRandomItems;
  }
  

  selectElements( items: GameBack , level ) {
    let arrayToReturn : gameData = {
      entities: [],
      selected: {popular:0,selected: false,src:'',name:''}
    };
    
    let possibilitesByLevel = items.possibleTrues[level];

    let minPossibilty = items.possibleTrues[level][0] ;
    // let maxPossibilty = Array(possibilitesByLevel).length;
    let maxPossibilty = possibilitesByLevel.length;
     
    let randomTrue = Math.floor(Math.random() * (maxPossibilty) ) + minPossibilty;
    
    let selectedElement = Object.assign({},items.mainArray[randomTrue]);
    selectedElement.selected = true;

    arrayToReturn.entities = this.getTwelveElementsFromArray(items.mainArray, randomTrue); 
    
    let randomPositionToPushTrue = Math.floor(Math.random() * 12 );

    arrayToReturn.entities.splice( randomPositionToPushTrue, 1 , selectedElement );
    arrayToReturn.selected = selectedElement;

    return arrayToReturn
  }


  getEntities(game,level): gameData {
    switch(game){
      case 'APPLE IPHONES' : return this.selectElements( AppleIphonesData, level )
      case 'TOP FOOTBALL PLAYERS LV 1' : return this.selectElements( TopFootballPlayersData1, level )
      case 'VIDEO GAMES SCREENSHOTS LV 1' : return this.selectElements( VideoGamesScreenShots1Data, level )
      case 'VIDEO GAMES SCREENSHOTS LV 2' : return this.selectElements( VideoGamesScreenShots2Data, level )
      case 'VIDEO GAMES SCREENSHOTS LV 3' : return this.selectElements( VideoGamesScreenShots3Data, level )
      case 'VIDEO GAMES SCREENSHOTS LV 4' : return this.selectElements( VideoGamesScreenShots4Data, level )
  
    }
  }


  //  TODO JOAN RXJS!
  // getEntitiesAsync(game,level) {
  //   return Observable.create((observer: Observer<string>) => {
  //     switch(game){
  //       case 'APPLE IPHONES' : return this.selectElements( AppleIphonesData.mainArray, level )
  //     }
  //   });
  // }
 


}
