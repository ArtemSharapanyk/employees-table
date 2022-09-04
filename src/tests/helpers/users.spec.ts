import { getFilteredUsersByFirstLater } from "../../helpers/users";
import { expectedValue, mockDate } from "./constants";

describe("getFilteredUsersByFirstLater should:", () => {
  it("return correct value", () => {
    expect(getFilteredUsersByFirstLater(mockDate)).toEqual(expectedValue);
  });
});

export const b = "lox";
