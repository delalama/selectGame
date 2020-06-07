import {gameStats, AnswerType} from '../../../assets/interfaces'
import { Stopwatch } from "ts-stopwatch";

export class StatsController  {

stats : gameStats ;
gameIsFinished: boolean;
message: string;
answerBonusNum: number; 
actualTime: number;
bonusAcc: number;
roundBonus: number;
// timer
stopwatch = new Stopwatch();


    constructor() {
        this.resetStats();
        this.gameIsFinished  = this.stats.leftTurns == 0
        this.message = '';
        this.answerBonusNum =  0;
        this.bonusAcc = 0 ; 
        this.stopwatch.start();
    }


    getAnswer( answer: AnswerType ){
        answer == AnswerType.CORRECT ? this.correctAnswer() : this.failedAnswer();
        this.stats.leftTurns -= 1; 
        return this.messageByTime( answer ) 
    }

    messageByTime(answer){
        let bonus = this.roundBonus;
        if(answer == "WRONG"){
            return 'se ba bé !'
        } else if ( bonus == 0 ){
            return '...mmm...';
          }else if ( 5000 > bonus && bonus > 0) {
            return 'good +' + bonus
          }else if ( 10000 > bonus && bonus >= 5000) {
            return  'oh mamma +' + bonus + '!!' 
          }else if ( 15000 >= bonus && bonus >= 10000) {
            return  'amazing +'+ bonus + '!!' 
          }
    }

    getPoints(){
        return this.stats.points;
    }

    failedAnswer(){
        this.stats.failedAnswers += 1;
        this.stats.points -= 1000;
    }

    correctAnswer(){
        this.stats.correctAnswers += 1; 

        let timeObj = this.stopwatch.slice()
        this.roundBonus = this.getBonus(timeObj);
        this.roundBonus < 0 ? this.roundBonus = 0 :  
        this.bonusAcc += this.roundBonus;
        this.stats.points += 1000 + this.roundBonus;
    }

    getBonus( time ){
        let timeBetweenCorrectAnswers = Math.round( time.duration ) ;

        this.actualTime = timeBetweenCorrectAnswers;
        return 15000 - (timeBetweenCorrectAnswers) 
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