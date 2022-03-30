import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tourney-card',
  templateUrl: './tourney-card.component.html',
  styleUrls: ['./tourney-card.component.css']
})
export class TourneyCardComponent implements OnInit {

  @Input() tourney:any

  constructor() { }

  ngOnInit(): void {
  }

}
