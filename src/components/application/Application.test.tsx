import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("<Application >", () => {
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

  test("paragraph with note renders correctly", () => {
    render(<Application />);

    const paragraphElement = screen.getByText(/all fields are mandatory/i);

    expect(paragraphElement).toBeInTheDocument();
  });

  test("name input renders with expected value", () => {
    render(<Application />);

    const nameElement = screen.getByDisplayValue(/Arjen Robben/i);

    expect(nameElement).toBeInTheDocument();
  });

  test("img renders correctly", () => {
    render(<Application />);

    const imageElement = screen.getByAltText(/a person with laptop/i);

    expect(imageElement).toBeInTheDocument();
  });

  test("close element renders correctly", () => {
    render(<Application />);

    const closeElement = screen.getByTitle(/close/i);

    expect(closeElement).toBeInTheDocument();
  });

  test("custom element renders correctly", () => {
    render(<Application />);

    const customElement = screen.getByTestId("custom-element");

    expect(customElement).toBeInTheDocument();
  });

  test("submit button renders correctly", () => {
    render(<Application />);

    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeDisabled();
  });
});
