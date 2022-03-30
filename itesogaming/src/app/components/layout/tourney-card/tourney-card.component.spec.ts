import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneyCardComponent } from './tourney-card.component';

describe('TourneyCardComponent', () => {
  let component: TourneyCardComponent;
  let fixture: ComponentFixture<TourneyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourneyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
