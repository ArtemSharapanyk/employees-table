import React, { FC } from "react";

interface Props {
  // eslint-disable-next-line no-unused-vars
  onChanged: (e: any) => void;
  id: string;
  isSelected: boolean;
  label: string;
  value: string;
}

export const RadioButton: FC<Props> = ({
  onChanged,
  id,
  isSelected,
  label,
  value,
}) => {
  return (
    <div className="RadioButton">
      <input
        id={id}
        onChange={onChanged}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
