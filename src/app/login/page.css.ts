import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';

export const PageWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100vh',
  padding: '0 1rem',

  backgroundColor: vars.colors.lightYellow,
});
