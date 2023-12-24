import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,

  fontSize: '62.5%',
  color: 'inherit',
  verticalAlign: 'baseline',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle(':root', {
  overflowX: 'hidden',
  overflowY: 'scroll',

  width: '100%',
  lineHeight: 1.5,
});

globalStyle('button', {
  cursor: 'pointer',
  background: 'none',
  border: 0,
});

globalStyle('a', {
  textDecoration: 'none',
});
