import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() gameHasBeenSelected: boolean;
  @Output() onResetSelected = new EventEmitter<string>();

  title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = environment.title;
  }

  resetTable(){
    this.onResetSelected.emit();
  }
}
