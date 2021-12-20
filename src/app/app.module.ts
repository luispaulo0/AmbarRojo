import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import {Routes, RouterModule} from "@angular/router";
import { CardsComponent } from './components/cards/cards.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PortafoliosComponent } from './pages/portafolios/portafolios.component';
import { CardsPortafoliosComponent } from './components/cards-portafolios/cards-portafolios.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent, pathMatch: 'full'
  },
  {
    path:'Nosotros', component: NosotrosComponent
  },
  {
    path:'Noticias', component: NoticiasComponent
  },
  {
    path:'Portafolios', component: PortafoliosComponent
  },
  {
    path:'Servicios', component: ServiciosComponent
  }


];

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardsComponent,
    CardNewsComponent,
    FooterComponent,
    NosotrosComponent,
    ServiciosComponent,
    NoticiasComponent,
    PortafoliosComponent,
    CardsPortafoliosComponent
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
