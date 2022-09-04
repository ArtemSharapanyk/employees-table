import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserModelInterface } from "../../../../interfaces/models/user";
import {
  removeUserFromActiveTable,
  setActiveUser,
} from "../../../../redux/slices/activeUsers";
import { RadioButton } from "../../../shared/RadioButton/RadioButton";

interface Props {
  initials: string;
  employeer: UserModelInterface;
}

// eslint-disable-next-line no-unused-vars
export const EmployeerElement: FC<Props> = ({ initials, employeer }) => {
  const [isActive, setIsActive] = useState<null | boolean>(null);
  const dispatch = useDispatch();
  const radioChangeHandler = () => {
    setIsActive((active) => !active);
  };

  useEffect(() => {
    if (isActive === false) {
      dispatch(removeUserFromActiveTable(employeer.id));
    }

    if (isActive === true) {
      dispatch(setActiveUser(employeer));
    }
  }, [dispatch, isActive, employeer]);

  return (
    <div className="employeer-element">
      <div
        className={`employeer-element__initials ${
          isActive ? "employeer-element_active" : ""
        }`}
      >
        {initials}
      </div>
      <div className="employeer-element__radios">
        <RadioButton
          label="active"
          isSelected={isActive === true}
          value="10"
          id="1"
          onChanged={radioChangeHandler}
        />
        <RadioButton
          label="no-active"
          isSelected={isActive === false || isActive === null}
          value="10"
          id="1"
          onChanged={radioChangeHandler}
        />
      </div>
    </div>
  );
};
