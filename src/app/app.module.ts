import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Rutas */
import { APP_ROUTING } from './app.routes'; /* las rutas se importan en los imports */

/* Servicos */
import { HeroesService } from './services/heroes.services';

/* Componentes */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  /* decalarations es para  los componentes */
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
  ],
  /* rutas */
  imports: [BrowserModule, APP_ROUTING],
  /* servicios */
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
