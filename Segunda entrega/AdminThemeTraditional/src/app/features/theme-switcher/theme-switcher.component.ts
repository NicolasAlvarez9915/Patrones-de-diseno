import { Component } from '@angular/core';
import { ThemeType } from '../../core/theme/models/theme.enum';
import { ThemeService } from '../../core/theme/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css'
})
export class ThemeSwitcherComponent {
  ThemeType = ThemeType;

  constructor(private themeService: ThemeService) { }

  setTheme(theme: ThemeType): void {
    this.themeService.setTheme(theme);
  }
}
