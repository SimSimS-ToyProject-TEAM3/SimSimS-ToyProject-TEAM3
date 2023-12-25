import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';

export const UserItemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2.2rem 0 2.7rem',
  borderBottom: `0.2rem solid ${vars.colors.black}`,
  ...vars.fonts.title2,
  listStyle: 'none',
});

export const Img = style({
  width: '4rem',
  borderRadius: '50%',
});

export const Li = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
});

export const UserInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});
