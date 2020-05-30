import { Component, OnInit , EventEmitter, Output,Input, OnChanges, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  @Input() flag;
  @Output() flagSelectedEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    console.log("changes");
  }

  onFlagSelect(event){
    this.flagSelectedEvent.emit(event);
  }

}
