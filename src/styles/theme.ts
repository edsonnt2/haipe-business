import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    haipe: {
      gray: {
        50: '#F5F8FA',
        100: '#EFF2F4',
        300: '#DCE2E5',
        500: '#C9CFD2',
        600: '#BBC1C4',
        700: '#96A9B5',
        900: '#617480',
      },
      yellow: {
        500: '#FFB844',
      },
      orange: {
        700: '#F99928',
        800: '#FF9416',
      },
      blue: {
        300: '#00A5DB',
        400: '#3559A4',
        600: '#115D8C',
        900: '#123952',
      },
      purple: {
        500: '#7340C7',
        900: '#4308B2',
      },
      violet: {
        50: '#FFD5FF',
        100: '#FFBBF5',
        200: '#FFA0DA',
        300: '#FF80BA',
        400: '#FF508A',
        500: '#ff3872',
        600: '#F9326C',
        700: '#ED2660',
        800: '#CC053F',
        900: '#BD0030',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'haipe.gray.50',
        color: 'haipe.blue.900',
      },
    },
  },
});
