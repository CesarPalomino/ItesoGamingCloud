import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TourneyService } from 'src/app/services/tourney.service';

@Component({
  selector: 'app-tourney-card',
  templateUrl: './tourney-card.component.html',
  styleUrls: ['./tourney-card.component.css']
})
export class TourneyCardComponent implements OnInit {

  @Input() tourney:any

  constructor(
    private  service:TourneyService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  setData(): void{
    console.log('setData', this.tourney)
    this.service.setTourney(this.tourney)
    this.route.navigate(['tourney'])
  }


}
