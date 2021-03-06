import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destacados: any = [{ nombre: "Xd", juego: "League of Legends", fechaI: "13/03/2050", fechaF: "14/03/2050", status: "Disponible", plat: "PC", link: "#", imagen: "https://vetealaversh.com/wp-content/uploads/2021/04/Thumbnail.jpg" },
  { nombre: "Maincra", juego: "Minecraft", fechaI: "28/06/2500", fechaF: "30/06/2500", plat: "Xbox", status: "En Curso", link: "#", imagen: "https://i.ytimg.com/vi/bhdYWKu87pI/maxresdefault.jpg" },
  { nombre: "Dragon Tournament", juego: "Dragon Ball Fighterz", fechaI: "25/10/2022", fechaF: "02/11/2022", plat: "PlayStation", link: "#", status: "Terminado", imagen: "https://as.com/meristation/imagenes/2020/02/06/noticias/1581000094_274876_1581000229_noticia_normal.jpg" },
  { nombre: "Mortal Campionship", juego: "Mortal Mortal 11", fechaI: "10/12/2040", fechaF: "18/12/2040", plat: "PlayStation", link: "#", status: "En Curso", imagen: "https://fanaticosdelhardware.com/wp-content/uploads/2019/04/Mortal-Kombat-11-FDH.jpg" },
  { nombre: "Smash Cup", juego: "Super Smash Bros", fechaI: "14/02/2030", fechaF: "16/02/2030", plat: "Nintendo", status: "Disponible", link: "#", imagen: "https://revistamorcego.com/wp-content/uploads/2020/10/dda7ilv-f4a7d3c8-0e71-4d87-9a4c-6637a32016af.png" },]

  proximosTitle: any = { name: "Torneos Proximos", src: "#", ide: "px" }


  proximosList: any = [{ nombre: "Xd", juego: "League of Legends", fechaI: "13/03/2050", fechaF: "14/03/2050", plat: "PC", status: "Disponible", link: "#", imagen: "https://vetealaversh.com/wp-content/uploads/2021/04/Thumbnail.jpg" },
  { nombre: "Karmaland", juego: "Maincra", fechaI: "28/06/2500", fechaF: "30/06/2500", plat: "Xbox", status: "En Curso", link: "#", imagen: "https://i.ytimg.com/vi/bhdYWKu87pI/maxresdefault.jpg" },
  { nombre: "Dragon Tournament", juego: "Dragon Ball Fighterz", fechaI: "25/10/2022", fechaF: "02/11/2022", status: "Terminado", link: "#", plat: "PlayStation", imagen: "https://as.com/meristation/imagenes/2020/02/06/noticias/1581000094_274876_1581000229_noticia_normal.jpg" },
  { nombre: "Mortal Campionship", juego: "Mortal Mortal 11", fechaI: "10/12/2040", fechaF: "18/12/2040", plat: "PlayStation", link: "#", status: "En Curso", imagen: "https://fanaticosdelhardware.com/wp-content/uploads/2019/04/Mortal-Kombat-11-FDH.jpg" },
  { nombre: "Smash Cup", juego: "Super Smash Bros", fechaI: "14/02/2030", fechaF: "16/02/2030", plat: "Nintendo", status: "Disponible", link: "#", imagen: "https://revistamorcego.com/wp-content/uploads/2020/10/dda7ilv-f4a7d3c8-0e71-4d87-9a4c-6637a32016af.png" },]

  recientesTitle: any = { name: "Torneos Recientes", src: "#", ide: "rc" }


  recientesList: any = [{ nombre: "Xd", juego: "League of Legends", fechaI: "13/03/2050", fechaF: "14/03/2050", plat: "PC", status: "Disponible", link: "#", imagen: "https://vetealaversh.com/wp-content/uploads/2021/04/Thumbnail.jpg" },
  { nombre: "Karmaland", juego: "Maincra", fechaI: "28/06/2500", fechaF: "30/06/2500", plat: "Xbox", status: "En Curso", link: "#", imagen: "https://i.ytimg.com/vi/bhdYWKu87pI/maxresdefault.jpg" },
  { nombre: "Dragon Tournament", juego: "Dragon Ball Fighterz", fechaI: "25/10/2022", fechaF: "02/11/2022", status: "Terminado", plat: "PlayStation", link: "#", imagen: "https://as.com/meristation/imagenes/2020/02/06/noticias/1581000094_274876_1581000229_noticia_normal.jpg" },
  { nombre: "Mortal Campionship", juego: "Mortal Mortal 11", fechaI: "10/12/2040", fechaF: "18/12/2040", plat: "PlayStation", status: "En Curso", link: "#", imagen: "https://fanaticosdelhardware.com/wp-content/uploads/2019/04/Mortal-Kombat-11-FDH.jpg" },
  { nombre: "Smash Cup", juego: "Super Smash Bros", fechaI: "14/02/2030", fechaF: "16/02/2030", plat: "Nintendo", status: "Disponible", link: "#", imagen: "https://revistamorcego.com/wp-content/uploads/2020/10/dda7ilv-f4a7d3c8-0e71-4d87-9a4c-6637a32016af.png" },]

  GratisTitle: any = { name: "Entrada Gratis", src: "#", ide: "eg" }

  GratisList: any = [{ nombre: "Xd", juego: "League of Legends", fechaI: "13/03/2050", fechaF: "14/03/2050", plat: "PC", status: "Disponible", link: "#", imagen: "https://vetealaversh.com/wp-content/uploads/2021/04/Thumbnail.jpg" },
  { nombre: "Karmaland", juego: "Maincra", fechaI: "28/06/2500", fechaF: "30/06/2500", plat: "Xbox", status: "En Curso", link: "#", imagen: "https://i.ytimg.com/vi/bhdYWKu87pI/maxresdefault.jpg" },
  { nombre: "Dragon Tournament", juego: "Dragon Ball Fighterz", fechaI: "25/10/2022", fechaF: "02/11/2022", status: "Terminado", plat: "PlayStation", link: "#", imagen: "https://as.com/meristation/imagenes/2020/02/06/noticias/1581000094_274876_1581000229_noticia_normal.jpg" },
  { nombre: "Mortal Campionship", juego: "Mortal Mortal 11", fechaI: "10/12/2040", fechaF: "18/12/2040", plat: "PlayStation", status: "En Curso", link: "#", imagen: "https://fanaticosdelhardware.com/wp-content/uploads/2019/04/Mortal-Kombat-11-FDH.jpg" },
  { nombre: "Smash Cup", juego: "Super Smash Bros", fechaI: "14/02/2030", fechaF: "16/02/2030", plat: "Nintendo", status: "Disponible", link: "#", imagen: "https://revistamorcego.com/wp-content/uploads/2020/10/dda7ilv-f4a7d3c8-0e71-4d87-9a4c-6637a32016af.png" },]

  ProcessTitle: any = { name: "En Curso", src: "#", ide: "ec" }

  ProcessList: any = [{ nombre: "Xd", juego: "League of Legends", fechaI: "13/03/2050", fechaF: "14/03/2050", plat: "PC", status: "Disponible", link: "#", imagen: "https://vetealaversh.com/wp-content/uploads/2021/04/Thumbnail.jpg" },
  { nombre: "Karmaland", juego: "Maincra", fechaI: "28/06/2500", fechaF: "30/06/2500", plat: "Xbox", status: "En Curso", link: "#", imagen: "https://i.ytimg.com/vi/bhdYWKu87pI/maxresdefault.jpg" },
  { nombre: "Dragon Tournament", juego: "Dragon Ball Fighterz", fechaI: "25/10/2022", fechaF: "02/11/2022", status: "Terminado", plat: "PlayStation", link: "#", imagen: "https://as.com/meristation/imagenes/2020/02/06/noticias/1581000094_274876_1581000229_noticia_normal.jpg" },
  { nombre: "Mortal Campionship", juego: "Mortal Mortal 11", fechaI: "10/12/2040", fechaF: "18/12/2040", plat: "PlayStation", status: "En Curso", link: "#", imagen: "https://fanaticosdelhardware.com/wp-content/uploads/2019/04/Mortal-Kombat-11-FDH.jpg" },
  { nombre: "Smash Cup", juego: "Super Smash Bros", fechaI: "14/02/2030", fechaF: "16/02/2030", plat: "Nintendo", status: "Disponible", link: "#", imagen: "https://revistamorcego.com/wp-content/uploads/2020/10/dda7ilv-f4a7d3c8-0e71-4d87-9a4c-6637a32016af.png" },]

  FinishTitle: any = { name: "Terminado", src: "#", ide: "tm" }

  FinishList: any = [{ nombre: "Xd", juego: "League of Legends", fechaI: "13/03/2050", fechaF: "14/03/2050", plat: "PC", status: "Disponible", link: "#", imagen: "https://vetealaversh.com/wp-content/uploads/2021/04/Thumbnail.jpg" },
  { nombre: "Karmaland", juego: "Maincra", fechaI: "28/06/2500", fechaF: "30/06/2500", plat: "Xbox", status: "En Curso", link: "#", imagen: "https://i.ytimg.com/vi/bhdYWKu87pI/maxresdefault.jpg" },
  { nombre: "Dragon Tournament", juego: "Dragon Ball Fighterz", fechaI: "25/10/2022", fechaF: "02/11/2022", status: "Terminado", plat: "PlayStation", link: "#", imagen: "https://as.com/meristation/imagenes/2020/02/06/noticias/1581000094_274876_1581000229_noticia_normal.jpg" },
  { nombre: "Mortal Campionship", juego: "Mortal Mortal 11", fechaI: "10/12/2040", fechaF: "18/12/2040", plat: "PlayStation", status: "En Curso", link: "#", imagen: "https://fanaticosdelhardware.com/wp-content/uploads/2019/04/Mortal-Kombat-11-FDH.jpg" },
  { nombre: "Smash Cup", juego: "Super Smash Bros", fechaI: "14/02/2030", fechaF: "16/02/2030", plat: "Nintendo", status: "Disponible", link: "#", imagen: "https://revistamorcego.com/wp-content/uploads/2020/10/dda7ilv-f4a7d3c8-0e71-4d87-9a4c-6637a32016af.png" },]

  constructor(
    private service: DatabaseService
  ) { }

  users: User[] = [];
  tourney: any[] = []

  ngOnInit(): void {
    this.getUsers();
    this.getTourneys();
  }


  getUsers() {
    this.service.getAllUsers().subscribe(
      {
        next: (response: User[]) => {
          console.log("usuarios: ", response)
          this.users = response
        }
      }
    )
  }

  getTourneys() {
    this.service.getTourney().subscribe(
      {
        next: response => {
          console.log("torneos: ", response)
          this.tourney = response
        }
      }
    )
  }

}
