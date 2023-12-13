import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import GlobalStyle from './GlobalStyle';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '깃허브 맞팔 탐지기',
  description: '[심심스 토이프로젝트] 은서 정우 깃허브 맞팔 탐지기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <GlobalStyle />
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
