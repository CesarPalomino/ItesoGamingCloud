import {Component,OnInit} from '@angular/core';

@Component({selector: 'app-navigation',templateUrl: './search.component.html',styleUrls: ['./search.component.css']})

export class SearchComponent implements OnInit {

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
    titulo: "Fitrar por Juego"
  }

  xd: any = {nombre: "Xd",juego: "League of Legends",fechaI: "13/03/2050",fechaF: "14/03/2050",status: "Disponible",plat: "PC",logo: "https://vetealaversh.com/wp-content/uploads/2016/11/darkar.png",costo: 150,ubicacion: "Online",hora: "15:00"}

  maincra: any = {nombre: "Maincra",juego: "Minecraft",fechaI: "28/06/2500",fechaF: "30/06/2500",plat: "Xbox",status: "En Curso",logo: "https://png.vector.me/files/images/2/8/286710/minecraft_block_preview",costo: 10000,ubicacion: "Online",hora: "12:00"}

  dragon: any = {nombre: "Dragon Tournament", juego: "Dragon Ball Fighterz",fechaI: "25/10/2022",fechaF: "02/11/2022",plat: "PlayStation",status: "Terminado",logo: "https://image.api.playstation.com/cdn/UP0700/CUSA09072_00/vRai0p5eVj1tN4abFUylDN7enlhcabvL.png",costo: 0,ubicacion: "ITESO",hora: "16:00"}

  mortal: any = {nombre: "Mortal Campionship",juego: "Mortal Mortal 11",fechaI: "10/12/2040",fechaF: "18/12/2040",plat: "PlayStation",status: "En Curso",logo: "https://i.redd.it/uopwhswwywu21.jpg",costo: 50,ubicacion: "en tu casa",hora: "18:00"}

  smash: any = {nombre: "Smash Cup",juego: "Super Smash Bros",fechaI: "14/02/2030",fechaF: "16/02/2030",plat: "Nintendo",status: "Disponible",logo: "https://cdn.vox-cdn.com/thumbor/m43bhBuTlrUok97DZv4tMjI5lzg=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/10387783/Screen_Shot_2018-03-08_at_5.33.48_PM.0.png",costo: 0,ubicacion: "ITESO",hora: "17:00"}

  sus: any = {nombre: "SuS",juego: "Among Us",fechaI: "19/07/2025",fechaF: "20/07/2025",plat: "PC",status: "En Curso",logo: "https://static.wikia.nocookie.net/ddb79a0c-2765-4d26-b56a-76c0d2b5f9db",costo: 0,ubicacion: "Online",hora: "15:00"}

  return: any = {nombre: "De Regreso al 2002",juego: "KOV XV",fechaI: "27/06/2022",fechaF: "30/06/2022",plat: "PlayStation",status: "En Curso",logo: "https://pbs.twimg.com/media/FMDbgRTX0AM4Tnk.jpg:large",costo: 5,ubicacion: "Casa del Kennet",hora: "10:00"}

  rock: any = {nombre: "Let's Metal",juego: "Guitly Gear Strive",fechaI: "15/11/2046",fechaF: "01/12/2046",plat: "PlayStation",status: "Disponible",logo: "https://p325k7wa.twic.pics/high/guilty-gear/01-guilty-gear-strive/03-characters-gallery/sol_icon.jpg?twic=v1/cover=180x180/step=10/quality=80",costo: 250,ubicacion: "Hell & Heaven Bar",hora: "19:00"}

  rugal: any = {nombre: "Usar a Rugal es de...",juego: "KOV 2002",fechaI: "18/06/2002",fechaF: "24/07/2002",plat: "Otro",status: "Terminado",logo: "https://lh3.googleusercontent.com/rXLEYxOSminn7le7qcIUUgQBWLHcx6QWqC1xTcQEBzeZvAGqCEisiEmBnpjyXLEV4BQ=w300",costo: 69,ubicacion: "En la casa del Español",hora: "22:00"}

  melee: any = {nombre: "Melee Cup",juego: "Smash Bros Melee",fechaI: "28/12/2012",fechaF: "13/01/2013",plat: "Otro",status: "Terminado",logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef02abe3-63cc-4dfa-8eab-5543cf3bcf4f/dadt5p4-8aa907b7-ddff-4ec9-a98c-26d66119a0b4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VmMDJhYmUzLTYzY2MtNGRmYS04ZWFiLTU1NDNjZjNiY2Y0ZlwvZGFkdDVwNC04YWE5MDdiNy1kZGZmLTRlYzktYTk4Yy0yNmQ2NjExOWEwYjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.46BHY1FCflyfvEZRS7m4WL-9kGFE6mfraBD-kdffuY4",costo: 100,ubicacion: "La Frikiplaza",hora: "13:00"}
  constructor() {}

  ngOnInit(): void {

  }

}