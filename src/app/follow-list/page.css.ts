import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';

export const Nav = style({
  display: 'flex',
  gap: '3rem',
  marginBottom: '1rem',
});

export const Button = style({
  padding: '0.5rem',
  border: `1px solid ${vars.colors.black}`,
});
