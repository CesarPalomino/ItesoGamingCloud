import { Component, OnInit,} from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  juegos: any = [{
    imagen: "https://store-images.s-microsoft.com/image/apps.9822.63836873768130262.f1f140d8-4fff-49c3-b318-36fca1cd7343.b9ce2807-8ca4-4d58-bea0-f5826e99e3c1",link: "#"
  },
  {
    imagen: "https://img.g2a.com/323x433/1x1x0/minecraft-windows-10-edition-microsoft-key-global/5d1ca6a47e696c05dd4f1e92",link: "#"
  },
  {
    imagen: "https://store-images.s-microsoft.com/image/apps.9688.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.09c2e91e-28bd-4f6f-bfd6-79d6b241667a",link: "#"
  },
  {
    imagen: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545",link: "#"
  },
  {
    imagen: "https://assets.nintendo.eu/image/upload/f_auto,q_auto,t_product_tile_desktop/MNS/NOE/70010000012331/SQ_NSwitch_SuperSmashBrosUltimate",link: "#"
  },
  {
    imagen: "https://store-images.s-microsoft.com/image/apps.21162.13589262686196899.16e3418a-cbf2-4748-9724-1c9dc9b7a0b9.14afafe9-1b03-4df0-95ad-12e2712a3b53",link: "#"
  },
  {
    imagen: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_THEKINGOFFIGHTERSXV_SNKCORPORATION_S2_1200x1600-5bf30907b3472a4d4bfed10e93fc7135",link: "#"
  },
  {
    imagen: "https://cdn-products.eneba.com/resized-products/KnLRtVy8MgodgE3-huZqtpHy8QTdkX3Hwq56eHnT3lc_350x200_1x-0.jpeg",link: "#"
  },
  {
    imagen: "https://cdn-products.eneba.com/resized-products/6W4C2PEevkZ4RixifeH0F54RkOSV9WsMdvOYagTYP9U_350x200_2x-0.jpg",link: "#"
  },
  {
    imagen: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co21yv.jpg",link: "#"
  }
]

juegosName = {
  titulo: "Seleccionar Juego"
}


  constructor() { }

  ngOnInit(): void {
  }

}