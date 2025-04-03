import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Theme } from '../../core/theme/models/theme';
import { ThemeService } from '../../core/theme/services/theme.service';
import { ThemeFactory } from '../../core/theme/factories/theme-factory.abstract';
import { DarkThemeFactory } from '../../core/theme/factories/dark-theme-factory';
import { LightThemeFactory } from '../../core/theme/factories/light-theme-factory';
import { PurpleThemeFactory } from '../../core/theme/factories/purple-theme-factory';

@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  theme: Theme;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
  }

  setTheme(themeType: string): void {
    let factory: ThemeFactory;
    switch (themeType) {
      case 'dark':
        factory = new DarkThemeFactory();
        break;
      case 'light':
        factory = new LightThemeFactory();
        break;
      case 'purple':
        factory = new PurpleThemeFactory();
        break;
      default:
        factory = new LightThemeFactory();
    }
    this.themeService.setTheme(factory);
    this.theme = this.themeService.getTheme();
  }
}
