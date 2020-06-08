import {gameStats, AnswerType} from '../../../assets/interfaces'
import { Stopwatch } from "ts-stopwatch";

export class StatsController  {

stats : gameStats ;
gameIsFinished: boolean;
message: string;
actualTime: number;

// points
correctAnswerPoints = 1000;
failedAnswerPoints = 1000;
bonusAcc: number;
roundBonus: number;

// timer , it acts as a typical chronometer
stopwatch = new Stopwatch();

// flag to check if previous answer was failed
lastAnswerFailed: boolean;

    constructor() {
        this.resetStats();
        this.gameIsFinished = false  ;
        this.message = '';
        this.bonusAcc = 0 ; 
        this.stopwatch.start();
        this.lastAnswerFailed = false;
    }


    getAnswer( answer: AnswerType ){
        answer == AnswerType.CORRECT ? this.correctAnswer() : this.failedAnswer();
        return this.messageByAnswer( answer ) 
    }

    getPoints(){
        return this.stats.points;
    }

    failedAnswer(){
        this.lastAnswerFailed = true;
        this.stats.failedAnswers += 1;
        this.stats.points -= 1000;
    }

    correctAnswer(){
        this.stats.correctAnswers += 1; 

        let timeObj = this.stopwatch.slice()
        this.roundBonus = this.getBonus(timeObj);
        if( this.roundBonus < 0 || this.lastAnswerFailed ){
            this.roundBonus = 0 ;
        }
        this.lastAnswerFailed = false;
        this.bonusAcc += this.roundBonus;
        this.stats.leftTurns -= 1; 
        this.stats.points +=1000 + this.roundBonus;
        
    }

    getBonus( time ){
        let timeBetweenCorrectAnswers = Math.round( time.duration ) ;

        this.actualTime = timeBetweenCorrectAnswers;
        return 15000 - (timeBetweenCorrectAnswers) 
    };

    resetStats (){
        this.stats = {
            leftTurns : 20 ,
            failedAnswers : 0,
            correctAnswers : 0 ,
            points : 0
        };
    }

    // booleans Staff
    isGameFinished(){
        return this.stats.leftTurns == 0
    }

    messageByAnswer(answer){
        let bonus = this.roundBonus;
        if(answer == "WRONG"){
            return 'NO ! , -' + this.failedAnswerPoints + ' !!' 
        } else if ( this.NOBONUS(bonus) ){
            return '...mmm... ' + this.correctAnswerPoints;
          }else if ( this.MINBONUS(bonus) ) {
            return 'GOOD, +' + this.correctAnswerPoints + ' + ' + bonus + "!!"
          }else if ( this.MIDDLEBONUS(bonus) ) {
            return  'OH MAMMA, +' + this.correctAnswerPoints + ' + ' + bonus + "!!" 
          }else if ( this.MAXBONUS(bonus) ) {
            return  'AMAZING, +' + this.correctAnswerPoints + ' + ' + bonus + "!!"
          }
    }

    MAXBONUS(bonus){
        return 15000 >= bonus && bonus >= 10000;
    }
    MIDDLEBONUS(bonus){
        return 10000 > bonus && bonus >= 5000;
    }
    MINBONUS(bonus){
        return 5000 > bonus && bonus > 0;
    }
    NOBONUS(bonus){
        return bonus == 0;
    }

}