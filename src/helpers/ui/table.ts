import { ReactNode } from "react";
import { TableDataInterface } from "../../interfaces/components/table";

export const leadDataToTableUnderstending = (
  data: any[],
  columId: string,
  titleOfColum: string | ReactNode,
): TableDataInterface => {
  return {
    data,
    columId,
    titleOfColum,
  };
};
