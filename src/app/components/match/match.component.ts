import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() match : any

  @Output () removeMatch  = new EventEmitter  <any>()

  constructor() { }

  ngOnInit(): void {
  }

  passId(){
    console.log(this.match.id);

    this.removeMatch.emit(this.match.id)
    

  }



}
