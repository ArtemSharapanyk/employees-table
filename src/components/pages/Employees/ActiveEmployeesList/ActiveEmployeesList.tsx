import React from "react";
import { useTypedSelector } from "../../../../hooks/redux";
import { ActiveEmployeerElement } from "./ActiveEmployeerElement";

export const ActiveEmployeesList = () => {
  const { activeUsersList } = useTypedSelector(
    (state) => state.rootReducer.activeUsersList,
  );

  if (!activeUsersList.length) return <h3>Empty</h3>;
  return (
    <ul className="active-employees-list">
      {activeUsersList.map((user) => (
        <ActiveEmployeerElement employeer={user} />
      ))}
    </ul>
  );
};
