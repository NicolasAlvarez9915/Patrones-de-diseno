import { LightTheme } from "../models/light-theme";
import { Theme } from "../models/theme";
import { ThemeFactory } from "./theme-factory.abstract";

export class LightThemeFactory extends ThemeFactory {
    createTheme(): Theme {
        return new LightTheme();
    }
}