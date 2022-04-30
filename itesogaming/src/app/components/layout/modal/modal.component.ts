import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/user.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult = '';

  password: string = '';

  user: User = {
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
    private database: DatabaseService
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
  }

  createUser() {
    this.user.id = this.createID()
    this.database.createUser(this.user).subscribe((user) => { console.log(user) })
    console.log(this.user)
  }


  private createID() {
    return '' + Math.random().toString(36).substr(2, 9);
  }

}
