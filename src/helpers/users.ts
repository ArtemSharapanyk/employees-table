import { alphabet } from "../components/pages/Employees/EmployeesTable/constants";
import {
  FilteredUserByLetterInterface,
  UserModelInterface,
} from "../interfaces/models/user";

export const filterUsersByFirstLater = (
  data: UserModelInterface[],
  filterLetter: string,
  filteredUsers: FilteredUserByLetterInterface[],
) => {
  if (data.length) {
    const filteredUsersByFirstLater = data.filter((user) => {
      const firstLetter = user.firstName[0];
      return firstLetter === filterLetter;
    });
    filteredUsers.push({
      letter: filterLetter,
      users: filteredUsersByFirstLater,
    });

    const filteredUsersIndex = data.map((user, index) => {
      const firstLetter = user.firstName[0];
      if (firstLetter === filterLetter) return index;
      return null;
    });

    filteredUsersIndex.forEach((index) => {
      if (index) data.splice(index, 1);
    });
  }
};

export const getFilteredUsersByFirstLater = (data: UserModelInterface[]) => {
  const filteredUsers: FilteredUserByLetterInterface[] = [];
  alphabet.forEach((letter) => {
    filterUsersByFirstLater(data, letter, filteredUsers);
  });

  return filteredUsers;
};
