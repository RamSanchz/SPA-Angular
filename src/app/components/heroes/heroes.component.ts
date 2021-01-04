import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  /* el constructor se dispara cuando se cambia la pag */
  constructor(private heroesService: HeroesService, private router: Router) {}

  /* el ngOnInit se dispara hasta que ya tenemos la pagina renderizada */
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }
  verHeroe(idx: number): void {
    this.router.navigate(['/heroe', idx]);
  }
}
