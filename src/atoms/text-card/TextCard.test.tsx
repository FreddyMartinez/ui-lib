import { render } from "@testing-library/react";
import React from "react";
import { TextCard } from "./TextCard";

describe("TextCard", () => {
  it("should render an array of text items", () => {
    const textTtems = ["fisrt item", "second item"];
    const { queryByText } = render(<TextCard items={textTtems} />);

    const firstItem = queryByText(textTtems[0])
    expect(firstItem).not.toBeNull();

    const secondItem = queryByText(textTtems[1])
    expect(secondItem).not.toBeNull();
  });
});
