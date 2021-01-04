import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      // tslint:disable-next-line: no-string-literal
      this.heroe = this.heroesService.getHeroe(params['id']);
    });
  }
}
