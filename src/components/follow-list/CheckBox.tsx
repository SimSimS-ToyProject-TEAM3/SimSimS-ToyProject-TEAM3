import { ChangeEvent } from 'react';

interface CheckboxProps {
  username: string;
  checkList: string[];
  setCheckList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Checkbox({ username, checkList, setCheckList }: CheckboxProps) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value;

    setCheckList((prevCheckList) => {
      if (prevCheckList.includes(target)) {
        return prevCheckList.filter((item) => item !== target);
      } else {
        return [...prevCheckList, target];
      }
    });
  };

  const isChecked = checkList.includes(username);
  return (
    <>
      <label htmlFor={username}>
        <input
          type="checkbox"
          id={username}
          name={username}
          checked={isChecked}
          value={username}
          onChange={handleOnChange}
        />
      </label>
    </>
  );
}
