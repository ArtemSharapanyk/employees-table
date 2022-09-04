import React, { FC } from "react";
import { createUniqueReactKey } from "../../../../helpers";
import { TableDataInterface } from "../../../../interfaces/components/table";
import { UserModelInterface } from "../../../../interfaces/models/user";
import { Table } from "../../../shared/Table/Table";
import { EmployeerElement } from "../EmployeerElement/EmployeerElement";

interface Props {
  data: TableDataInterface[];
}
export const EmployeesTable: FC<Props> = ({ data }) => {
  return (
    <Table
      data={data}
      EmptyColumElement={<h3>No Employees</h3>}
      renderElement={(dataElement: UserModelInterface) => (
        <EmployeerElement
          employeer={dataElement}
          initials={`${dataElement.firstName} ${dataElement.lastName}`}
          key={createUniqueReactKey(dataElement.firstName, "employeer-element")}
        />
      )}
    />
  );
};
