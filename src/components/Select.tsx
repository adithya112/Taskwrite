import React, { useState } from "react";

interface selectProps {
  defaultSelectValue: string;
  selectOptions: string[];
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({
  defaultSelectValue,
  handleSelectChange,
  selectOptions,
}: selectProps) {
  const [selectVal, setSelectVal] = useState(defaultSelectValue);
  return (
    <select
      value={selectVal}
      onChange={(e) => {
        setSelectVal(e.target.value);
        handleSelectChange(e);
      }}
      className="cursor-pointer bg-inherit border rounded-sm  border-input p-2 focus:outline-none focus:ring-1 focus:ring-slate-900"
    >
      {selectOptions.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

export default Select;
