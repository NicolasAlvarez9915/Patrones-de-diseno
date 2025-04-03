import { Injectable } from '@angular/core';
import { ThemeType } from '../models/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: ThemeType = ThemeType.LIGHT;

  setTheme(theme: ThemeType): void {
    document.body.classList.remove(...Object.values(ThemeType));
    document.body.classList.add(theme);
    this.currentTheme = theme;
  }

  getTheme(): ThemeType {
    return this.currentTheme;
  }
}
