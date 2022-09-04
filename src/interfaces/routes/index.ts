import { ReactNode } from "react";
import { RoutesEnum } from "../../routes";

export interface AppRouteInterface {
  path: RoutesEnum;
  component: ReactNode;
  name: string;
}
