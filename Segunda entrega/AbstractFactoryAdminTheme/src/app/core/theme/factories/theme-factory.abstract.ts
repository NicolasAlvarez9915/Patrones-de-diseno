import { Theme } from "../models/theme";

export abstract class ThemeFactory {
    abstract createTheme(): Theme;
}
