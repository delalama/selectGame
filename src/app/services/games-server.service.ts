import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EntityDescription , gameData, GameBack} from '../../assets/interfaces';
import { flags, actors, topFootballPlayers, topAthletes, mobilesAllTime, mobilesNokia, appleWatches, sportCars } from '../../app/db/db';
import { Observable, Observer } from 'rxjs';
import { AppleIphonesData } from 'src/assets/pics/AppleIphones/data';

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
    for ( let i = 0 ; i < 12 ; i++){
      randomNum = Math.floor(Math.random() * array.length-0.001 );
      if ( randomNum == previousSelected ){
          i = i-1; 
      }else{
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
    let maxPossibilty = Array(possibilitesByLevel).length;
     
    let randomTrue = Math.floor(Math.random() * (maxPossibilty + 0.99) ) + minPossibilty;
    
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
