import { createGlobalTheme } from '@vanilla-extract/css';

const root = createGlobalTheme('#root', {
  fonts: {
    title1: {
      fontFamily: 'Noto Sans KR',
      fontSize: '2.5rem',
      fontWeight: '700',
      fontStyle: 'normal',
    },
    body1: {
      fontFamily: 'Noto Sans KR',
      fontSize: '1.5rem',
      fontWeight: '500',
      fontStyle: 'normal',
    },
    body2: {
      fontFamily: 'Noto Sans KR',
      fontSize: '1.2rem',
      fontWeight: '500',
      fontStyle: 'normal',
    },
  },
  colors: {
    black: '#000000',
    brightYellow: 'rgb(249, 221, 160)',
    green: '#95B89A',
    lightGray: 'rgb(231, 231, 231)',
    lightYellow: '#FAF7EE',
    red: '#DF9491',
    white: '#FFFFFF',
    yellow: '#F0D46E',
  },
});

export const vars = { ...root };
