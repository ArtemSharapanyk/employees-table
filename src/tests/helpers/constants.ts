import { alphabet } from "../../components/pages/Employees/EmployeesTable/constants";
import { UserModelInterface } from "../../interfaces/models/user";

const mockDate: UserModelInterface[] = [
  {
    id: "5e00928d91e7feaa9872ec08",
    firstName: "Yang",
    lastName: "Carson",
    dob: "2019-02-26T16:52:36.244Z",
  },
];

const expectedValue = alphabet.map((letter) => ({ letter, users: [] }));
const findMockedElement = expectedValue.find(
  (item) => item.letter === mockDate[0].firstName[0],
);

// @ts-ignore
findMockedElement.users = mockDate;

export { expectedValue, mockDate };
