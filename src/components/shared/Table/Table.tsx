/* eslint-disable no-plusplus */
/* eslint-disable react/require-default-props */
import React, { FC, ReactNode } from "react";
import { TableDataInterface } from "../../../interfaces/components/table";
import "./Table.scss";

interface Props {
  data: TableDataInterface[];
  classes?: string;
  // eslint-disable-next-line no-unused-vars
  renderElement: (data: any) => ReactNode;
  EmptyColumElement: ReactNode;
}

export const Table: FC<Props> = ({
  // eslint-disable-next-line no-unused-vars
  classes = null,
  // eslint-disable-next-line no-unused-vars
  data,
  renderElement,
  EmptyColumElement,
}) => {
  return (
    <div className={`table ${classes || ""} scroll-bar`}>
      <div className="table__columns">
        {data.map((colum) => (
          <div className="table__column">
            <div className="table__column-head">
              <div className="table__column-name">{colum.titleOfColum}</div>
            </div>
            <div className="table__column-body">
              {!colum.data.length
                ? EmptyColumElement
                : colum.data.map((element) => renderElement(element))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
