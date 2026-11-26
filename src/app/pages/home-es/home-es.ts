import { Component } from '@angular/core';
import { applyPageMeta } from '../page-meta';

@Component({
  selector: 'app-home-es',
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
