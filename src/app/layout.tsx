import '../styles/global.css';

import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import Providers from 'utils/Providers';

const notoSansKr = Noto_Sans_KR({ weight: ['500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: '깃허브 맞팔 탐지기',
  description: '[심심스 토이프로젝트] 은서 정우 깃허브 맞팔 탐지기',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" id="root">
      <body className={notoSansKr.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
