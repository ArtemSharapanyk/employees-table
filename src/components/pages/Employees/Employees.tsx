import React, { useMemo } from "react";
import { EmployeesTable } from "./EmployeesTable/EmployeesTable";
import "./Employees.scss";
import { useGetUsersQuery } from "../../../redux/asyncActions/users";
import { leadDataToTableUnderstending } from "../../../helpers/ui/table";
import { createUniqueReactKey } from "../../../helpers";
import { ActiveEmployeesList } from "./ActiveEmployeesList/ActiveEmployeesList";
import { showPopup } from "../../../helpers/ui/popup";
import { ServerError } from "../../../helpers/errors";

const Employees = () => {
  const { isLoading, data, error } = useGetUsersQuery(null);

  if (error) {
    showPopup(new ServerError(error as any).getMessage());
  }

  const employeesTableData = useMemo(() => {
    if (data) {
      return data.map(({ users, letter }) => {
        return leadDataToTableUnderstending(
          users,
          createUniqueReactKey(letter, "table-id"),
          letter,
        );
      });
    }

    return [];
  }, [data]);

  if (isLoading) return null;

  return (
    <div className="employees page">
      <div className="employees__container">
        <div className="employees__employees-list">
          <div className="employees__title">Employees</div>
          <EmployeesTable data={employeesTableData} />
        </div>
        <div className="employees__active-employees-list scroll-bar">
          <div className="employees__title"> Employees birthday</div>
          <ActiveEmployeesList />
        </div>
      </div>
    </div>
  );
};

export default Employees;
