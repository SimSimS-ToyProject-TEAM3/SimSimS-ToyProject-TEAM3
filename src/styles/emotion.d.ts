import '@emotion/react';

type colors = 'yellow' | 'green' | 'red' | 'black' | 'white' | 'lightYellow' | 'lightGray' | 'brightYellow';
type fonts = 'title1' | 'body1' | 'body2';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      // eslint-disable-next-line no-unused-vars
      [key in colors]: string;
    };
    fonts: {
      // eslint-disable-next-line no-unused-vars
      [key in fonts]: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: string;
      };
    };
  }
}
