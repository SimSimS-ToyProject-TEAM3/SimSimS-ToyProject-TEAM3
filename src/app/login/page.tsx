import * as S from './page.css';

import TokenInputContainer from 'components/login/TokenInputContainer';

function Page() {
  return (
    <div className={S.PageWrapper}>
      <TokenInputContainer />
    </div>
  );
}

export default Page;
