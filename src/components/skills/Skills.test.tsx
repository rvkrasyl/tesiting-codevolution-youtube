import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("<Skills />", () => {
  const skills = ["HTMS", "CSS", "JavaScript", "React", "Jest"];
  
  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");

    expect(listElement).toBeInTheDocument();
  });

  test("a list of skills contains an item for each skill", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");

    expect(listItemElements).toHaveLength(skills.length);
  });
})