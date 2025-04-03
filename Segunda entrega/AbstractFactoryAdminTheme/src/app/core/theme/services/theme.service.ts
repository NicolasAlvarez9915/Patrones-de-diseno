import { Injectable } from '@angular/core';
import { LightTheme } from '../models/light-theme';
import { Theme } from '../models/theme';
import { ThemeFactory } from '../factories/theme-factory.abstract';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: Theme = new LightTheme(); // Tema por defecto

  setTheme(factory: ThemeFactory): void {
    this.theme = factory.createTheme();
  }

  getTheme(): Theme {

    return this.theme;
  }
}
