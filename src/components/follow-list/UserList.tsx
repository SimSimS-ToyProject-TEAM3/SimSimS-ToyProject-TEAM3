import { User } from 'apis/getFollowData';

interface UserListProps {
  list: User[];
}

export default function UserList({ list }: UserListProps) {
  return (
    <>
      {list.map((user, idx) => (
        <li key={String(idx) + user}>
          <strong>id: </strong>
          <span>{user.login}</span>
        </li>
      ))}
    </>
  );
}
