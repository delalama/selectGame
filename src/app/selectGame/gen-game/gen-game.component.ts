import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GamesServerService } from '../../services/games-server.service';
import { AnswerType , EntityDescription, gameData } from '../../../assets/interfaces';
import { Observable , Observer} from 'rxjs';
import { trigger, state, style, transition, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { element } from 'protractor';
import { StatsController } from '../gameUtils/statsController';
import { TimerComponent } from '../gameUtils/timer/TimerComponent';


@Component({
  selector: 'app-gen-game',
  templateUrl: './gen-game.component.html',
  styleUrls: ['./gen-game.component.css'],
  animations: [
  ]
})


export class GenGameComponent implements OnInit {
@Input() game ;
 
  // game constants
  path = 'assets/pics/'
  maxNumberOfItems = 12 ;
  gamePicsUrl ;
  gameName ;
  gameData: gameData;

  // game variables
  level;
  points: number;
  answerTime;
  answerMessage: string;
  // controller
  statsController: StatsController;
  timer : TimerComponent;
  showBonusMessageBoolean;

  entitiesByLevel: EntityDescription[] ;
  gameEntitiesArr: EntityDescription[];
  flagWrong = false;
  gameIsFinished = false;
  gameSelectedEntityName ; 
  resetGame = false;

  // anmimations
  eleAnimation = 'slide_in_elliptic_left';

  constructor(private server: GamesServerService) {
  }

  ngOnInit(): void {
    this.prepareNewGame();
  }

  prepareNewGame(){
    this.statsController = new StatsController; 
    this.showBonusMessageBoolean = false;
    this.points = this.statsController.getPoints(); 
    this.timer = new TimerComponent; 
    this.level = -1 ; 
    this.gamePicsUrl = this.game.gameUrl;
    this.gameName = this.game.gameName;
    this.gameIsFinished = false;
    this.selectGameFlags();
  }

  resetEntitiesArray(){
    this.gameEntitiesArr = [];
  }

 
  /* game functions */
  getEntitiesByLevel(level){
    this.gameData = this.server.getEntities(this.gameName , level);
    this.gameEntitiesArr = this.gameData.entities;
    
    // CANDIDATO A CADÁVER
    this.gameSelectedEntityName = this.replaceSlashed(this.gameData.selected.name);

    let src;
    this.gameEntitiesArr.forEach(element =>{
      src = element.src;
      element.src = this.path + this.gamePicsUrl + src
    })
  }

  resetStats(){
    console.log('esto ha de quedar vacío')
  }

  beginNewGame(){
    this.resetStats();
    this.gameIsFinished = false;
    this.selectGameFlags();
  }
  
  selectGameFlags(){
    console.log('quedan: ', this.statsController.stats.leftTurns)
    this.level += 1; 

    if(!this.gameIsFinished){
      this.getEntitiesByLevel(this.level);

      for (let entity of this.gameEntitiesArr) {
        this.getBase64ImageFromURL(entity.src).subscribe(base64data => {    
         entity.src = ('data:image/jpg;base64,' + base64data);
        });
      }
    }
    this.timer.startTimer();
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
    this.answerTime = this.timer.timerRef;
    console.log('tiempo : ', this.answerTime)
    this.timer.clearTimer;
    this.changeStats(answer, this.answerTime);

    console.log("flag selected");
  }

  // isAnswerCorrect naming!
  changeStats(isAnswerCorrect, answerTime){
    if(isAnswerCorrect){
      //TODO MAKE ANIMATION
      this.selectGameFlags();
      this.answerMessage = this.statsController.getAnswer(AnswerType.CORRECT, answerTime) 
    }else{
      this.toogleFlagWrong();
      this.answerMessage = this.statsController.getAnswer(AnswerType.WRONG, answerTime) 
    }
    console.log('event -> ' + isAnswerCorrect)
    this.showBonusMessage();
    this.timer.clearTimer();
    this.refreshPoints();
    this.statsController.gameIsFinished ? this.onGameFinished(): console.log('allWruaight');
  }

  refreshPoints(){
    this.points = this.statsController.stats.points;
  }

  // WTF IS THIS SHIT MADAFACA
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

  showBonusMessage(){
    this.showBonusMessageBoolean = true;
    setTimeout( () => {
      this.showBonusMessageBoolean = false;
      }, 2500 );
      
  }

  onBeginAnotherGame(){
    this.resetEntitiesArray();
    this.gameIsFinished = true;
    this.resetGame = false;
    this.prepareNewGame()
  }

  onNotMoreGames(){
    this.resetGame = false;
  }

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

  replaceSlashed(str){
    return str.replace('_', ' ');
  }

}