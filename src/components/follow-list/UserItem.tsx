import Checkbox from './CheckBox';
import * as S from './UserItem.css';

interface UserItemProps {
  username: string;
  selectedMenu: 'f4fList' | 'notF4fList';
  checkList: string[];
  setCheckList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function UserItem({ username, checkList, setCheckList, selectedMenu }: UserItemProps) {
  return (
    <div className={S.UserItemWrapper}>
      {selectedMenu === 'notF4fList' && (
        <Checkbox username={username} checkList={checkList} setCheckList={setCheckList} />
      )}
      <li key={username}>
        <label htmlFor={username}>{username}</label>
      </li>
    </div>
  );
}
