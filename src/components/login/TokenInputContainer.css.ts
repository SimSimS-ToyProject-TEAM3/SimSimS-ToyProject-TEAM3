import { style } from '@vanilla-extract/css';

import { vars } from 'styles/theme.css';
export const TokenInputContainerWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  padding: '1.2rem',

  backgroundColor: vars.colors.white,
  border: `0.3rem solid ${vars.colors.black}`,
  borderRadius: '1.4rem',
});

export const CreateTokenButton = style({
  width: '15rem',
  height: '2.5rem',

  backgroundColor: vars.colors.green,

  borderRadius: '9rem',

  ...vars.fonts.body2,
  color: vars.colors.white,

  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.4rem 0.4rem',
});

export const CreateTokenNoticeWrapper = style({
  display: 'flex',
  columnGap: '0.2rem',
  alignItems: 'center',
  marginTop: '1rem',
});

export const CreateTokenNotice = style({
  ...vars.fonts.body2,
});

export const TokenInput = style({
  width: '100%',
  height: '4.3rem',
  padding: '0 1.5rem',
  marginTop: '0.8rem',

  border: `0.2rem solid ${vars.colors.lightGray}`,
  borderRadius: '0.3rem',

  ...vars.fonts.body2,

  '::placeholder': {
    ...vars.fonts.body2,
    color: vars.colors.lightGray,
  },
});

export const FollowerCheckButton = style({
  width: '100%',
  height: '4.3rem',
  marginTop: '0.8rem',

  backgroundColor: vars.colors.yellow,
  border: `0.2rem solid ${vars.colors.black}`,
  borderRadius: '0.3rem',

  ...vars.fonts.body2,

  color: vars.colors.black,
});

export const OrText = style({
  margin: '1rem auto',
  ...vars.fonts.body1,
});

export const LoginWrapper = style({
  display: 'flex',
  columnGap: '2rem',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const LoginText = style({
  ...vars.fonts.body2,
});

export const LoginButton = style({
  display: 'flex',
  columnGap: '0.8rem',
  alignItems: 'center',
  justifyContent: 'center',

  width: '12.5rem',
  height: '4rem',

  color: vars.colors.black,

  backgroundColor: vars.colors.brightYellow,
  border: `0.2rem solid ${vars.colors.black}`,
  borderRadius: '2rem',
});

export const LoginButtonText = style({
  ...vars.fonts.body2,
});
