import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCarrouselComponent } from './game-carrousel.component';

describe('GameCarrouselComponent', () => {
  let component: GameCarrouselComponent;
  let fixture: ComponentFixture<GameCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
