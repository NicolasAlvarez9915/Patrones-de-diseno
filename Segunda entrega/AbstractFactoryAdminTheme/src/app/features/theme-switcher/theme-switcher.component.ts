import { CommonModule } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { Theme } from '../../core/theme/models/theme';
import { ThemeService } from '../../core/theme/services/theme.service';
import { ThemeFactory } from '../../core/theme/factories/theme-factory.abstract';
import { DarkThemeFactory } from '../../core/theme/factories/dark-theme-factory';
import { LightThemeFactory } from '../../core/theme/factories/light-theme-factory';
import { PurpleThemeFactory } from '../../core/theme/factories/purple-theme-factory';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DarkTheme } from '../../core/theme/models/dark-theme';
import { LightTheme } from '../../core/theme/models/light-theme';
import { PurpleTheme } from '../../core/theme/models/purple-theme';

@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,],
  standalone: true,
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  theme: any;
  constructor(private themeService: ThemeService) {
    themeService.theme$.subscribe(theme => {
      this.theme = theme;
    });
  }

  setTheme(theme: string): void {
    let themeFactory: ThemeFactory;
    switch (theme) {
      case 'dark':
        themeFactory = new DarkThemeFactory(); // Debes tener una clase DarkTheme
        break;
      case 'light':
        themeFactory = new LightThemeFactory(); // Debes tener una clase LightTheme
        break;
      case 'purple':
        themeFactory = new PurpleThemeFactory(); // Debes tener una clase PurpleTheme
        break;
      default:
        themeFactory = new LightThemeFactory(); // Por defecto
    }
    this.themeService.setTheme(themeFactory); // Actualiza el tema globalmente
  }
}
