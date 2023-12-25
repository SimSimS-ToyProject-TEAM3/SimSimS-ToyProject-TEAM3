import * as S from './AllCheckBox.css';

import { User } from 'apis/getFollowData';

interface AllCheckBoxProps {
  isAllChecked: boolean;
  setIsAllChecked: React.Dispatch<React.SetStateAction<boolean>>;
  list: User[];
  setCheckList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function AllCheckbox({ isAllChecked, setIsAllChecked, list, setCheckList }: AllCheckBoxProps) {
  const handleOnChange = () => {
    setIsAllChecked(!isAllChecked);
    setCheckList([]);

    if (!isAllChecked) {
      for (const user of list) {
        setCheckList((prev) => [...prev, user.login]);
      }
    }
  };
  return (
    <>
      <label htmlFor="allCheck" className={S.Description}>
        <input type="checkbox" id="allCheck" name="allCheck" checked={isAllChecked} onChange={handleOnChange} />
        전체선택
      </label>
    </>
  );
}
