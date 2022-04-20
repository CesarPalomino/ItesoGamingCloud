import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CardCarrouselComponent } from './components/layout/card-carrousel/card-carrousel.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { GameCarrouselComponent } from './components/layout/game-carrousel/game-carrousel.component';
import { TourneyCardComponent } from './components/layout/tourney-card/tourney-card.component';
import { CreateComponent } from './components/create/create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/layout/modal/modal.component';
import { TourneyComponent } from './components/tourney/tourney.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardCarrouselComponent,
    SearchComponent,
    GameCarrouselComponent,
    TourneyCardComponent,
    CreateComponent,
    ModalComponent,
    TourneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
