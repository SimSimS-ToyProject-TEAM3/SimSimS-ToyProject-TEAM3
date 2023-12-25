import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';

export const UserListWrapper = style({
  border: `0.2rem solid ${vars.colors.black}`,
  borderRadius: '6rem',
  backgroundColor: vars.colors.white,

  width: '39rem',
  height: '50rem',
  overflow: 'scroll',
  padding: '5rem',
});

export const Description = style({
  ...vars.fonts.body1,
  display: 'flex',
  justifyContent: 'center',
});
