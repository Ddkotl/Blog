import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NovelItem } from "./novel-item";

describe("novel item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <NovelItem
        novel={{
          id: "aeaer",
          name: "aergsb",
          description: "dfbdb",
        }}
        onDelete={onDelete}
      />,
    );
    await userEvent.click(screen.getByText("Удалить"));

    expect(onDelete).toHaveBeenCalled();
  });
});
