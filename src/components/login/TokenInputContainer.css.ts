import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';

export const createTokenButton = style({
  width: '20rem',
  height: '3rem',
  borderRadius: '9rem',
  border: '0.1rem solid black',
  color: vars.colors.green,
  ...vars.fonts.body1,
});
