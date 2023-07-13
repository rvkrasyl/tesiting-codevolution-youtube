import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("<Applicatin >", () => {
  test("renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();
  });
});
