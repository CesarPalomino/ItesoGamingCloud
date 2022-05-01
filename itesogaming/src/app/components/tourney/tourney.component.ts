import { Component, OnInit } from '@angular/core';
import { Tourney } from 'src/app/interfaces/tourney.interface';
import { TourneyService } from 'src/app/services/tourney.service';

@Component({
  selector: 'app-tourney',
  templateUrl: './tourney.component.html',
  styleUrls: ['./tourney.component.css']
})
export class TourneyComponent implements OnInit {


  xd: any = {
    "nombre": "Xd",
    "tid": 10001,
    "admin": 10001,
    "juego": 101,
    "fechai": "13/03/2050",
    "fechaf": "14/03/2050",
    "status": "Disponible",
    "hora": "15:00",
    "limit": 2000,
    "cost": 30,
    "place": "Online",
    "plat": "PC",
    "logo": "https://vetealaversh.com/wp-content/uploads/2016/11/darkar.png",
    "image": "https://vetealaversh.com/wp-content/uploads/2021/04/Thumbnail.jpg",
    "cantjug": 2,
    "desc": "a",
    "gamelist": [
      {
        "jugador": 10001
      },
      {
        "jugador": 10002
      }
    ]
  }

  get tourney(): Tourney { return this.tourneyService.tourney }

  constructor(
    private tourneyService: TourneyService
  ) { }

  ngOnInit(): void {
  }


  print(tourney: any) {
    if (tourney.cost == 0) return "Entrada Gratis"
    return "Costo de Inscripción:" + tourney.cost
  }

}
