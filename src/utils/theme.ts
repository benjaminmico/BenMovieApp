// theme.ts

import type { TextStyle } from 'react-native';

interface Colors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  caption: string;
}

interface Spacers {
  tiny: number;
  small: number;
  medium: number;
  large: number;
}

interface Borders {
  tiny: number;
  small: number;
  medium: number;
  large: number;
}

interface Typography {
  headline: TextStyle;
  title: TextStyle;
  body: TextStyle;
  caption: TextStyle;
}

interface Theme {
  colors: Colors;
  typography: Typography;
  spacer: Spacers;
  borders: Borders;
}

const colors: Colors = {
  primary: '#FFFFFF', // Netflix red
  secondary: '#221f1f', // Dark gray
  background: '#000000', // Black
  text: '#FFFFFF', // White
  caption: '#aaaaaa', // Light gray
};

const typography: Typography = {
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.text,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.caption,
  },
};

const spacer: Spacers = {
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
};

const borders: Borders = {
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
};

export const theme: Theme = { colors, typography, spacer, borders };
