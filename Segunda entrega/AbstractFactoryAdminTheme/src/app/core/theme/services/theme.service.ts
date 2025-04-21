import { Injectable } from '@angular/core';
import { LightTheme } from '../models/light-theme';
import { Theme } from '../models/theme';
import { ThemeFactory } from '../factories/theme-factory.abstract';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(new LightTheme());
  theme$: Observable<Theme>;
  constructor() {
    this.theme$ = this.themeSubject.asObservable();
  }
  setTheme(factory: any): void {
    const newTheme = factory.createTheme();
    this.themeSubject.next(newTheme);
  }

}
