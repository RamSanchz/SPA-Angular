import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(
    private heroesServices: HeroesService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.termino = params.termino;
      this.heroes = this.heroesServices.buscarHeroes(params.termino);
      // console.log(this.heroes);
    });
  }
}
