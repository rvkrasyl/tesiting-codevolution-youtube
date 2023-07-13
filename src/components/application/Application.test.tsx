import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("<Applicatin >", () => {
  test("renders correctly", () => {
    render(<Application />);

    const nameElement = screen.getByRole("textbox");
    const jobLocationElement = screen.getByRole("combobox");
    const termsElement = screen.getByRole("checkbox");
    const submitButtonElement = screen.getByRole("button");

    expect(nameElement).toBeInTheDocument(); 
    expect(jobLocationElement).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });
});
