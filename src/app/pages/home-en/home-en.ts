import { Component } from '@angular/core';
import { applyPageMeta } from '../page-meta';

@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.html',
})
export class HomeEn {
  constructor() {
    applyPageMeta(
      'en',
      'Skooltrak brings administration, classes, grades and family communication into one secure place for schools in Panama.',
    );
  }
}
