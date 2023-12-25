import Checkbox from './CheckBox';
import * as S from './UserItem.css';

interface UserItemProps {
  username: string;
  userImgSrc: string;
  selectedMenu: 'f4fList' | 'notF4fList';
  checkList: string[];
  isAllChecked: boolean;
  setCheckList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function UserItem({
  username,
  userImgSrc,
  checkList,
  setCheckList,
  isAllChecked,
  selectedMenu,
}: UserItemProps) {
  return (
    <div className={S.UserItemWrapper}>
      <li key={username} className={S.Li}>
        {selectedMenu === 'notF4fList' && (
          <Checkbox isAllChecked={isAllChecked} username={username} checkList={checkList} setCheckList={setCheckList} />
        )}
        <label htmlFor={username} className={S.UserInfo}>
          <img className={S.Img} src={userImgSrc} alt={`${username}의 프로필 이미지`} />
          {username}
        </label>
      </li>
    </div>
  );
}
