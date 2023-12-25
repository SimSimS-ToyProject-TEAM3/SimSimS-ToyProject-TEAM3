import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';

export const FollowButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  left: '50%',
  transform: 'translate(-50%)',
  bottom: 0,
  zIndex: 1,
  border: `0.2rem solid ${vars.colors.black}`,
  borderRadius: '1.3rem',
  backgroundColor: vars.colors.white,
  width: '39rem',
  height: '9rem',
});

export const FollowButton = style({
  marginTop: '1rem',
  border: `0.2rem solid ${vars.colors.black}`,
  borderRadius: '0.3rem',
  backgroundColor: vars.colors.lightGray,
  width: '33.5rem',
  height: '4rem',
  ...vars.fonts.body1,
  pointerEvents: 'none',
});

export const Activate = style({
  backgroundColor: vars.colors.yellow,
});
