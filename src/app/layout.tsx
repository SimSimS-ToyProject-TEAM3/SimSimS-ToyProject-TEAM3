'use client';

import { ThemeProvider } from '@emotion/react';
import { Noto_Sans_KR } from 'next/font/google';

import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

// import type { Metadata } from 'next';
const notoSansKr = Noto_Sans_KR({ weight: ['500', '700'], subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: '깃허브 맞팔 탐지기',
//   description: '[심심스 토이프로젝트] 은서 정우 깃허브 맞팔 탐지기',
// };

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body className={notoSansKr.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}

export default RootLayout;
