import { Component } from '@angular/core';
import { SiteHeader } from '../../site-header/site-header';
import { applyPageMeta } from '../page-meta';

@Component({
  selector: 'app-home-es',
  imports: [SiteHeader],
  templateUrl: './home-es.html',
})
export class HomeEs {
  constructor() {
    applyPageMeta(
      'es',
      'Skooltrak reúne la administración, las clases, las calificaciones y la comunicación con las familias en un solo lugar seguro para los colegios de Panamá.',
    );
  }
}
