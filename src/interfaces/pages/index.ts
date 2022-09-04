import { UserModelInterface } from "../models/user";

export interface FilteredUserByLetterInterface {
  letter: string;
  users: UserModelInterface[];
}
