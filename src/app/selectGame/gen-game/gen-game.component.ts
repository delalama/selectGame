import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GamesServerService } from '../../services/games-server.service';
import { Entity , gameStats, levelsArray} from '../../../assets/interfaces';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { trigger, state, style, transition, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { squash } from '../../animations/squash.animation';

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
// game variables
  entitiesByTypeArray: Entity[] ;
  gameFlagsArr: Entity[] = [] ;
  levels = [];
  levelSelected = false;
  flagWrong = false;
  gameIsFinished = false;
  gameSelectedFlag ; 
  gameStats: gameStats ;
  resetGame = false;
  previousSelectedFlags = [];

  // anmimations
  eleAnimation = 'only_opacity';



  constructor(private server: GamesServerService, private animationBuilder: AnimationBuilder) { 
  }

  ngOnInit(): void {
    this.url = this.game.gameUrl;
    for ( var i = 0 ; i < this.game.levels; i++){
      this.levels.push(levelsArray[i]);
    }
    // this.levels.push(this.game.);
  }
  
  ngAfterViewInit() {
  }

  /* game functions */
  getEntitiesByLevel(level){
    // this.server.getEntitiesByLevel(this.url, level).subscribe(data => this.entitiesByTypeArray = data );
    this.entitiesByTypeArray = this.server.getEntities(this.url , level);
  }


  onSelectLevel(level){
    this.getEntitiesByLevel(level)

    setTimeout( () => {
    this.beginNewGame();
    }, 400 );
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

    // setTimeout( () => {
    //   this.selectGameFlags();
    //   this.levelSelected = true;
    //   this.gameIsFinished = false;
    //   }, 400 );

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

  fillGameFlagsArray(arrFrom){
    var randomNums = this.getDifferentRandomNumsFromArray(arrFrom) ;

    for(var i = 0; i<this.maxNumberOfItems; i++ ){
      this.gameFlagsArr[i] = this.entitiesByTypeArray[randomNums[i]] ;
      this.gameFlagsArr[i].selected = false;
    }
  }

  selectedActualRoundFlag(){
    var selectedFlagHasBeenSelectedBefore = true;
    
    if(this.previousSelectedFlags.length==0){
      this.gameSelectedFlag = this.gameFlagsArr[Math.floor(Math.random() * this.gameFlagsArr.length)];
      selectedFlagHasBeenSelectedBefore = false;  
    }

    while(selectedFlagHasBeenSelectedBefore){
      this.gameSelectedFlag = this.gameFlagsArr[Math.floor(Math.random() * this.gameFlagsArr.length)];


      for (var i = 0 ; i < this.previousSelectedFlags.length; i++) {
        if (this.gameSelectedFlag.id == this.previousSelectedFlags[i].id ){
          selectedFlagHasBeenSelectedBefore = true;
          i = this.previousSelectedFlags.length;
        } else{
          selectedFlagHasBeenSelectedBefore = false;
        }
      }
    
    }


    this.previousSelectedFlags.push(this.gameSelectedFlag);
  }

  selectGameFlags(){
    if(!this.gameIsFinished){
      var randomNum = this.selectRandomItem(this.entitiesByTypeArray);
      //fill gameFlags with random flagsByTypeArray items
      this.fillGameFlagsArray(this.entitiesByTypeArray);

      this.selectedActualRoundFlag();

      this.gameFlagsArr.splice(randomNum,1);
      this.gameSelectedFlag.selected = true;

    }

    for (let flag of this.gameFlagsArr) {
      this.getBase64ImageFromURL(flag.link).subscribe(base64data => {    
       flag.link = ('data:image/jpg;base64,' + base64data);
      });
    }

  }

  onGameFinished(){
    this.gameIsFinished = true;
    this.askResetGame();
  }

  askResetGame() {
      this.resetGame = true
  }

  onFlagEvent(answer){
    this.changeStats(answer);
    this.selectGameFlags();
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
      }, 500 );
  }


  onBeginAnotherGame(){

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