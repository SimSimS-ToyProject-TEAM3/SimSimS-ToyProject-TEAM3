import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';

export const Description = style({
  ...vars.fonts.body2,
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});
