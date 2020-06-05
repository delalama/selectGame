import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GamesServerService } from '../../services/games-server.service';
import { Entity ,EntityJson, gameStats, levelsArray, gameData} from '../../../assets/interfaces';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { trigger, state, style, transition, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { element } from 'protractor';

@Component({
  selector: 'app-gen-game',
  templateUrl: './gen-game.component.html',
  styleUrls: ['./gen-game.component.css'],
  animations: [
  ]
})

export class GenGameComponent implements OnInit,  AfterViewInit {
@Input() maxNumberOfItems ;
@Input() game ;
 
// game constants
  url ;
  gameName ;
  gameData: gameData;
// game variables
  // entitiesByTypeArray: Entity[] ;
  entitiesByTypeArray: EntityJson[] ;
  gameEntitiesArr: EntityJson[];
  levels = [];
  levelSelected = false;
  flagWrong = false;
  gameIsFinished = false;
  gameSelectedEntityName ; 
  gameStats: gameStats ;
  resetGame = false;
  previousSelectedFlags = [];

  // anmimations
  eleAnimation = 'slide_in_elliptic_left';

  path = 'assets/pics/'

  constructor(private server: GamesServerService, private animationBuilder: AnimationBuilder) { 
  }

  //TODO todelete
  async resolveResponse(level): Promise<EntityJson>{
     return await this.server.getTrueByLevel(this.gameName, level)
  }

  ngOnInit(): void {
    this.prepareNewGame();
  }
  
  ngAfterViewInit() {
  }

  prepareNewGame(){
    this.url = this.game.gameUrl;
    this.gameName = this.game.gameName;
    this.getFirstEntities(0);
  }

  resetEntitiesArray(){
    this.gameEntitiesArr = [];
  }

 
  /* game functions */
  getEntitiesByLevel(level){
    
    this.gameData = this.server.getEntities(this.gameName , level);
    this.gameEntitiesArr = this.gameData.entities;
    this.gameSelectedEntityName = this.gameData.selected.name;

    let src;
    this.gameEntitiesArr.forEach(element =>{
      src = element.src;
      element.src = this.path + this.url + src
    })

    console.log(this.gameEntitiesArr )
    // this.server.getTrueByLevel(this.gameName , level).then(value =>{
    //     this.gameEntitiesArr = value;
    // });

    console.log(this.gameEntitiesArr);
    setTimeout( () => {
          console.log(this.entitiesByTypeArray);
    }, 1500 );
  }

  getFirstEntities(level){
    this.getEntitiesByLevel(level)

    setTimeout( () => {
     this.beginNewGame();
    }, 1000 );
  }

  resetStats(){
    this.gameStats = {
      left : this.maxNumberOfItems,
      correctAnswers : 0 ,
      failedAnswers : 0 
    };

  }

  beginNewGame(){
    this.resetStats();
    this.selectGameFlags();
    this.levelSelected = true;
    this.gameIsFinished = false;
    
  }
  
  selectRandomItem(flagsArray): number{
    return Math.floor(Math.random() * flagsArray.length);
  }
  
  getDifferentRandomNumsFromArray(arrFrom){
    var candidatesNumsArr = [];
    var randomNumsArr = [];
    for(var i = 0 ; i< arrFrom.length; i++){
      candidatesNumsArr.push(i);
    }    
    
    for(var i = 0 ; i< this.maxNumberOfItems; i++){
      var numSelected = this.selectRandomItem(candidatesNumsArr);
      randomNumsArr.push(candidatesNumsArr[numSelected]) ;
      candidatesNumsArr.splice(numSelected,1);
    }    

    return randomNumsArr;
  }


  selectGameFlags(){
    if(!this.gameIsFinished){
      for (let entity of this.gameEntitiesArr) {
        this.getBase64ImageFromURL(entity.src).subscribe(base64data => {    
         entity.src = ('data:image/jpg;base64,' + base64data);
        });
    }
  }

  }

  onGameFinished(){
    this.resetEntitiesArray();

    this.gameIsFinished = true;
    this.askResetGame();
  }

  askResetGame() {
      this.resetGame = true
  }

  onFlagEvent(answer){
    this.changeStats(answer);
    this.selectGameFlags();
    console.log("flag selected");
  }

  // isAnswerCorrect naming!
  changeStats(isAnswerCorrect){
    if(isAnswerCorrect){
      this.gameStats.correctAnswers++;

    }else{
      this.gameStats.failedAnswers++;
      this.toogleFlagWrong();
    }
    this.gameStats.left--;

    if(this.gameStats.left == 0){
      this.onGameFinished();
    }
  }

  toogleFlagWrong(){
     this.flagWrong = true;
     setTimeout( () => {
      if(this.flagWrong){
            this.flagWrong = false;
          }else{
            this.flagWrong = true;
          }
      }, 1500 );
  }


  onBeginAnotherGame(){
    this.resetEntitiesArray();
    this.gameIsFinished = true;
    this.levelSelected = false;
    this.resetGame = false;
    this.previousSelectedFlags = [];
  }

  onNotMoreGames(){
    this.resetGame = false;
  }

  // fetch images methods
  getBase64ImageFromURL(url: string) {
   return Observable.create((observer: Observer<string>) => {
     // create an image object
     let img = new Image();
     img.crossOrigin = 'Anonymous';
     img.src = url;
     if (!img.complete) {
         // This will call another method that will create image from url
         img.onload = () => {
         observer.next(this.getBase64Image(img));
         observer.complete();
       };
       img.onerror = (err) => {
          observer.error(err);
       };
     } else {
         observer.next(this.getBase64Image(img));
         observer.complete();
     }
   });
  }

  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    // This will draw image    
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    var dataURL = canvas.toDataURL("image/png");
         return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }



}