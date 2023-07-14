import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe('<Users />', () => { 
  test('renders correctly', () => { 
    render(<Users />);

    const textElement = screen.getByRole("heading");

    expect(textElement).toBeInTheDocument();
   });

   test('renders a list of users', async () => { 
    render(<Users />);

    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(3);
   });

   test('renders an error message', async () => { 
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users',
      (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Users />);

    const errorText = await screen.findByText(/Error fetching/i);

    expect(errorText).toBeInTheDocument();
   });
});
