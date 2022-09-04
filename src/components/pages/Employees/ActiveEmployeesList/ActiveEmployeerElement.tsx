import moment from "moment";
import React, { memo } from "react";
import { UserModelInterface } from "../../../../interfaces/models/user";

interface Props {
  employeer: UserModelInterface;
}

export const ActiveEmployeerElement = memo(({ employeer }: Props) => {
  const birthdayInNormalFormat = moment(employeer.dob).format(
    "DD MMMM, YYYY [year]",
  );
  return (
    <li className="active-employeer">
      {employeer.firstName}
      {employeer.lastName} - {birthdayInNormalFormat}
    </li>
  );
});
