import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("<Applicatin >", () => {
  test("headers renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", { level: 1 });
    const sectionHeading = screen.getByRole("heading", { level: 2 });

    expect(pageHeading).toBeInTheDocument();
    expect(sectionHeading).toBeInTheDocument();
  });

  test("form renders correctly", () => {
    render(<Application />);

    const bioElement = screen.getByRole("textbox", { name: "Bio" }); // same but get by role
    const nameElement = screen.getByLabelText("Name", { selector: "input" }); // same but get by label
    const jobLocationElement = screen.getByRole("combobox");
    const termsElement = screen.getByRole("checkbox");
    const submitButtonElement = screen.getByRole("button");

    expect(bioElement).toBeInTheDocument(); 
    expect(nameElement).toBeInTheDocument(); 
    expect(jobLocationElement).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });

  test("name input renders correctly", () => {
    render(<Application />);
    
    const nameElement = screen.getByPlaceholderText(/fullname/i);

    expect(nameElement).toBeInTheDocument(); 
  });
});
