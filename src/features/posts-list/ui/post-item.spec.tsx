import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PostItem } from "./post-item";

describe("post item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <PostItem
        post={{
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
