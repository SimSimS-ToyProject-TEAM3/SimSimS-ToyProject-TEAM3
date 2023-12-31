import { ChangeEvent, useEffect } from 'react';

interface CheckboxProps {
  isAllChecked: boolean;
  username: string;
  checkList: string[];
  setCheckList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Checkbox({ isAllChecked, username, checkList, setCheckList }: CheckboxProps) {
  let isChecked = false;

  useEffect(() => {
    isChecked = checkList.includes(username);
  }, [isAllChecked]);

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

  isChecked = checkList.includes(username);

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
