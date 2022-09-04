/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
import { lazy } from "react";
import { withSuspense } from "../helpers";
import { AppRouteInterface } from "../interfaces/routes";

const EmployeesPage = lazy(
  () => import("../components/pages/Employees/Employees"),
);

export enum RoutesEnum {
  // eslint-disable-next-line no-unused-vars
  EMPLOYEES = "employees",
}

export const appRoutes: AppRouteInterface[] = [
  {
    name: "Employees",
    component: withSuspense(EmployeesPage),
    path: RoutesEnum.EMPLOYEES,
  },
];
