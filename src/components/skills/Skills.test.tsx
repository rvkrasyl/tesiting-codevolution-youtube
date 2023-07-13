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

  test("login button renders by default", () => {
    render(<Skills skills={skills} />);

    const buttonElements = screen.getByRole("button", { name: "Login"});

    expect(buttonElements).toBeInTheDocument();
  });

  test("Start learning is not rendered by default", () => {
    render(<Skills skills={skills} />);

    const startLearningButtonElements = screen.queryByRole("button", { name: "Start learning"});

    expect(startLearningButtonElements).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);

    const startLearningButtonElements = await screen.findByRole("button", { name: "Start learning"}, { timeout: 2000 }); // default timeout is 1000ms

    expect(startLearningButtonElements).toBeInTheDocument();
  });
})