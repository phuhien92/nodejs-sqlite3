import theme from 'styled-theming';

export const DARK_BLUE = "#262f3d";

export const DARKER_BLUE = "#19212b";

// define background colours for `mode` theme
export const backgroundColor = theme('mode', {
    light: '#fafafa',
    dark: '#222'
});
  // define text color for `mode` theme
export const textColor = theme('mode', {
    light: '#000',
    dark: '#fff'
});

