import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
@Input () gameInfo;
@Output() onGameSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(name: string){
    this.onGameSelected.emit(name)
    ;}
}
