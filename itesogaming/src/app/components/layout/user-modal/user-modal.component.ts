import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  @Output() logoutEvent = new EventEmitter();

  closeResult = '';
  usuario: User ={
    correo: '',
    id: '',
    image: 'http://cdn.onlinewebfonts.com/svg/img_227643.png',
    password: '',
    inscritos: 0,
    creados: 0,
    nickname: ''
  };

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    //private home: HomeComponent
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
    this.getUser()
  }

  getUser(): void{
    this.usuario = this.authService.getData();
    console.log(this.usuario);
  }

  logout(): void {
    this.authService.logOut()
   // this.home.ngOnInit()
  }

}
