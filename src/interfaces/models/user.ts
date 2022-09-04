export interface UserModelInterface {
  firstName: string;
  id: string;
  lastName: string;
  dob: string;
}

export interface FilteredUserByLetterInterface {
  letter: string;
  users: UserModelInterface[];
}
