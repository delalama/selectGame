import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Entity } from '../../assets/interfaces';
import { flags, actors, topFootballPlayers, topAthletes, mobilesAllTime, mobilesNokia, appleIphones, appleWatches, sportCars } from '../../app/db/db';

@Injectable({
  providedIn: 'root'
})

export class GamesServerService {

   constructor() { }

  levelConversion(level){
    switch(level){
      case 'FÁCIL': return 1;
      case 'INTERMEDIO': return 2;
      case 'DIFÍCIL': return 3;
      case 'MUY_DIFÍCIL': return 4;
      case 'IMPOSIBLE': return 5;
    }
  }

  getEntities(url, level) {
    switch(url){
      case 'flags' : return flags.filter(i => i.type === this.levelConversion(level));
      case 'actors' : return actors.filter(i => i.type === this.levelConversion(level));
      case 'topFootballPlayers' : return topFootballPlayers.filter(i => i.type === this.levelConversion(level));
      case 'topAthletes' : return topAthletes.filter(i => i.type === this.levelConversion(level));
      case 'mobilesAllTime' : return mobilesAllTime.filter(i => i.type === this.levelConversion(level));
      case 'mobilesNokia' : return mobilesNokia.filter(i => i.type === this.levelConversion(level));
      case 'appleIphones' : return appleIphones.filter(i => i.type === this.levelConversion(level));
      case 'appleWatches' : return appleWatches.filter(i => i.type === this.levelConversion(level));
      case 'sportCars' : return sportCars.filter(i => i.type === this.levelConversion(level));
    }
  }

}
