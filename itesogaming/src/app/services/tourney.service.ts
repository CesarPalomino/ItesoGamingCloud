import { Injectable } from '@angular/core';
import { Tourney } from '../interfaces/tourney.interface';

@Injectable({
  providedIn: 'root'
})
export class TourneyService {

  constructor() { }

  tourney!: Tourney

  setTourney(tourney: Tourney){
    this.tourney = tourney
  }
}
