import { Component, OnInit , EventEmitter, Output,Input, OnChanges, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  @Input() entity;
  @Output() entitySelectedEvent = new EventEmitter<boolean>();
  
  path = 'assets/pics/AppleIphones/'

  constructor() { }

  ngOnInit(): void {
  }

  onFlagSelect(event){
    this.entitySelectedEvent.emit(event);
  }

}
