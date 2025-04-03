import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from './features/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  imports: [ThemeSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AbstractFactoryAdminTheme';
}
