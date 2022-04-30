import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-game-carrousel',
  templateUrl: './game-carrousel.component.html',
  styleUrls: ['./game-carrousel.component.css']
})
export class GameCarrouselComponent implements OnInit {

  @Input() list: any

  @Input() title: any

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    console.log("entra")
    console.log(value)
    
  }

  casas(value: string): void {
    console.log("entra")
    console.log(value)
    this.newItemEvent.emit(value);
  }

  ngAfterViewInit(): void {
    (function ($) {
      //$('#carouselExampleIndicators{{dataCarr.ide}}.carousel .carousel-item').each(function (_:any,element:any) {
      //debe funcionar con el ide
      $('#carouselgames.carousel .carousel-item').each(function (_: any, element: any) {//no sirve
        var next = $(element).next();
        if (!next.length) {
          next = $(element).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(element));
        for (var i = 0; i < 13; i++) {
          next = next.next();
          if (!next.length) {
            next = $(element).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(element));
        }
      });
    })(jQuery)
  }
}
