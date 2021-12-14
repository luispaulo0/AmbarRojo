import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import {Routes, RouterModule} from "@angular/router";
import { CardsComponent } from './components/cards/cards.component';
import { CardNewsComponent } from './components/card-news/card-news.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

];

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardsComponent,
    CardNewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
