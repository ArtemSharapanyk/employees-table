import { leadDataToTableUnderstending } from "../../helpers/ui/table";

describe("leadDataToTableUnderstending should:", () => {
  it("return correct value", () => {
    // mockdate
    const { data, columId, titleOfColumn } = {
      data: [1, {}, "sdfdsfsd"],
      columId: "1",
      titleOfColumn: "first",
    };

    const expectedValue = { data, columId, titleOfColum: titleOfColumn };

    expect(leadDataToTableUnderstending(data, columId, titleOfColumn)).toEqual(
      expectedValue,
    );
  });
});
