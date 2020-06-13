import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EntityDescription , gameData, GameBack} from '../../assets/interfaces';


@Injectable({
  providedIn: 'root'
})

export class GamesServerService {
  levelRanges ;
  http;
  dataPossibleTrues;
  dataEntities;
  selectedGame: GameBack

  constructor( private httpClient : HttpClient ) {
    this.http = httpClient;
    this.dataPossibleTrues = [];
    this.dataEntities = [];
   }
   
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
  

  async importGame(gameFolder: string){
    var url = 'assets/pics/' + gameFolder + 'dataEntities.json'
      this.http.get(url)
        .subscribe(data => {
            this.dataEntities = data;
            console.log('entities : ' , data)
      });
    var url = 'assets/pics/' + gameFolder + 'dataPossibleTrues.json'
      this.http.get(url)
        .subscribe(data => {
          this.dataPossibleTrues = data;
          console.log('possibleTrues : ' , data)
        });
      console.log('game imported')
  }

  selectElements( level ) {
    let arrayToReturn : gameData = {
      entities: [],
      selected: {popular:0,selected: false,src:'',name:''}
    };
    
    let possibilitesByLevel = this.dataPossibleTrues[level];

    let minPossibilty = this.dataPossibleTrues[level][0] ;
    
    let maxPossibilty = possibilitesByLevel.length;
     
    let randomTrue = Math.floor(Math.random() * (maxPossibilty) ) + minPossibilty;
    
    let selectedElement = Object.assign({},this.dataEntities[randomTrue]);
    selectedElement.selected = true;

    arrayToReturn.entities = this.getTwelveElementsFromArray(this.dataEntities, randomTrue); 
    
    let randomPositionToPushTrue = Math.floor(Math.random() * 12 );

    arrayToReturn.entities.splice( randomPositionToPushTrue, 1 , selectedElement );
    arrayToReturn.selected = selectedElement;

    return arrayToReturn
  }


}
