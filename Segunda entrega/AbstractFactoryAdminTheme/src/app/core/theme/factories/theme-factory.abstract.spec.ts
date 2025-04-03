import { ThemeFactory } from './theme-factory.abstract';

describe('ThemeFactory', () => {
  it('should create an instance', () => {
    expect(new ThemeFactory()).toBeTruthy();
  });
});
