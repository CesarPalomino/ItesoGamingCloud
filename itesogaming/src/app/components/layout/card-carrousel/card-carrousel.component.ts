import { Component, OnInit, Input } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-card-carrousel',
  templateUrl: './card-carrousel.component.html',
  styleUrls: ['./card-carrousel.component.css']
})
export class CardCarrouselComponent implements OnInit {
  @Input() dataCarr:any

  @Input() list:any

  
  constructor() { }

  ngOnInit(): void {   
    
  }

  ngAfterViewInit(): void{
    let _ide=this.dataCarr.ide;
    (function ($) {
      //$('#carouselExampleIndicators{{dataCarr.ide}}.carousel .carousel-item').each(function (_:any,element:any) {
      //debe funcionar con el ide
      $('#carouselExampleIndicators'+_ide+'.carousel .carousel-item').each(function (_:any,element:any) {//no sirve
        var next = $(element).next();
        if (!next.length) {
            next = $(element).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(element));
        for (var i = 0; i < 4; i++) {
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
