import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';

describe('App routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('renders the Spanish home page at /', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(
      'Todo su colegio, en la misma pista.',
    );
  });

  it('renders the English home page at /en', async () => {
    const harness = await RouterTestingHarness.create('/en');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('same track');
  });
});
