import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';

export const PageWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '100%',
  height: '100vh',
  padding: '0 1rem',

  backgroundColor: vars.colors.lightYellow,
});

export const Nav = style({
  width: '25.5rem',
  height: '3.6rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '1.4rem 6.8rem',
});

export const Btn = style({
  border: `0.2rem solid ${vars.colors.black}`,
  borderRadius: '2.6rem',
  width: '10.5rem',
  height: '3.6rem',
  backgroundColor: vars.colors.white,
  ...vars.fonts.body2,
});

export const SelectedBtn = style({
  backgroundColor: vars.colors.green,
});
