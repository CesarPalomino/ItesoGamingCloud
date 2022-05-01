import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TourneyComponent } from './components/tourney/tourney.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home',pathMatch:'full'
  },{
    path:'home',component:HomeComponent
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'create',component:CreateComponent
  },
  {path:'tourney', component:TourneyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
