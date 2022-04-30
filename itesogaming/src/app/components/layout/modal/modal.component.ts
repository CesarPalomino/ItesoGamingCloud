import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult = '';

  password: string = '';
  nickname: string = '';

  user: User = {
    correo: '',
    id: '',
    image: 'http://cdn.onlinewebfonts.com/svg/img_227643.png',
    password: '',
    inscritos: 0,
    creados: 0,
    nickname: ''
  };
  usuarios: User[] = []
  constructor(
    private modalService: NgbModal,
    private database: DatabaseService,
    private auth: AuthService,
    private router: Router
  ) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }

  createUser() {
    this.user.id = this.createID()
    this.database.createUser(this.user).subscribe((user) => { console.log(user) })
    console.log(this.user)
  }

  getUsers() {
    this.database.getAllUsers().subscribe(
      {
        next: (response: User[]) => {
          console.log("usuarios: ", response)
          this.usuarios = response
        }
      }
    )
  }

  private createID() {
    return '' + Math.random().toString(36).substr(2, 9);
  }

  loginUser() {
    let usuario: User = {

      correo: '',
      id: '',
      image: 'http://cdn.onlinewebfonts.com/svg/img_227643.png',
      password: '',
      inscritos: 0,
      creados: 0,
      nickname: ''
    }

    for (let user of this.usuarios)
      if (user.nickname == this.nickname && user.password == this.password)
        usuario = user

    console.log(usuario)
    if (usuario.nickname != '') {
      this.auth.login(usuario)
      this.router.navigate(['home']);
    }

    //console.log(this.nickname, this.password)
  }

}
