import { PurpleTheme } from "../models/purple-theme";
import { Theme } from "../models/theme";
import { ThemeFactory } from "./theme-factory.abstract";

export class PurpleThemeFactory extends ThemeFactory {
    createTheme(): Theme {
        return new PurpleTheme();
    }
}