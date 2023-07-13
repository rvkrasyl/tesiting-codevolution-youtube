import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("<Counter />", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    
    expect(countElement).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0 by default", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicked increment button", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");

    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicked increment button twice", async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");

    expect(countElement).toHaveTextContent("2");
  });
});
