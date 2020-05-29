import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Entity } from '../../assets/interfaces';

@Injectable({
  providedIn: 'root'
})

export class GamesServerService {
  baseUrl = environment.serverUrl;

   constructor(private http: HttpClient) { }


  getEntitiesByLevel(url ,level) {
    var endpoint = this.baseUrl + url; 
    let params = new HttpParams().set('level', this.levelConversion(level).toString());
      return this.http.get<Entity[]>(
        endpoint,{params}
      );
  }

  levelConversion(level){
    switch(level){
      case 'FÁCIL': return 1;
      case 'INTERMEDIO': return 2;
      case 'DIFÍCIL': return 3;
      case 'MUY_DIFÍCIL': return 4;
      case 'IMPOSIBLE': return 5;
    }
  }

}
