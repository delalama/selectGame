import {gameStats, AnswerType} from '../../../assets/interfaces'
import { BoundTextAst } from '@angular/compiler';

export class StatsController  {

stats : gameStats ;
gameIsFinished: boolean;
message: string;
answerBonusNum: number; 

    constructor() {
          this.resetStats();
          this.gameIsFinished  = this.stats.leftTurns == 0
          this.message = '';
          this.answerBonusNum =  0;
    }

    getAnswer( answer: AnswerType , time: number ){
        answer == AnswerType.CORRECT ? this.correctAnswer(time) : this.failedAnswer();
        this.stats.leftTurns -= 1; 
        return this.messageByTime( answer,time ) 
    }

    messageByTime(answer , time){
        if(answer == "WRONG"){
            this.message = 'se ba bé !'
        } else if ( time >= 15 ){
              this.message = '...mmm...'
          }else if ( 16 > time && time > 10) {
              this.message = 'good +' + this.getBonus(time) 
          }else if ( 10 >= time && time > 5) {
              this.message = 'oh mamma +' + this.getBonus(time) + '!!' 
          }else if ( 5 >= time && time >= 0) {
              this.message = 'amazing +'+ this.getBonus(time) + '!!' 
          }
        return this.message;
    }

    getPoints(){
        return this.stats.points;
    }

    failedAnswer(){
        this.stats.failedAnswers += 1;
        this.stats.points -= 1;
    }

    correctAnswer(time: number){
        this.stats.points += this.getBonus(time);
        this.stats.correctAnswers += 1; 
        this.stats.points += 1;
    }

    getBonus(time){
        return 15 - time
    }

    resetStats (){
        this.stats = {
            leftTurns : 19 ,
            failedAnswers : 0,
            correctAnswers : 10 ,
            points : 0
        };
    }
}