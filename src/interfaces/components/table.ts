import { ReactNode } from "react";

export interface TableDataInterface {
  columId: string;
  data: any[];
  titleOfColum: string | ReactNode;
}
