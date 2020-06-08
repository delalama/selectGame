import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { gameInfo } from '../../../assets/interfaces';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
@Input () gameInfo: gameInfo[];
@Output() onGameSelected = new EventEmitter<string>();

searchString;

  constructor() {
  }

  ngOnInit(): void {
  }

  applyFilter(filterValue: string) {
    this.searchString = filterValue.toLowerCase() ;
  }

  emitEvent(name: string){
    this.onGameSelected.emit(name)
    ;}
}
