import { DarkTheme } from "../models/dark-theme";
import { Theme } from "../models/theme";
import { ThemeFactory } from "./theme-factory.abstract";

export class DarkThemeFactory extends ThemeFactory {
    createTheme(): Theme {
        return new DarkTheme();
    }
}
