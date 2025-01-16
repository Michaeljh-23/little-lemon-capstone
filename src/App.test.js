import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Booking from "./components/Booking";

test("Renders time options correctly", async () => {
  render(<Booking />);

  //? Testing if time options are rendered correctly, ensuring time generating functions operating correctly
  const timeSelect = screen.getByLabelText(/time/i);
  expect(timeSelect).toBeInTheDocument();

  const options = await screen.findAllByRole("option");
  expect(options.length).toBeGreaterThan(0);
  expect(options[0]).toHaveTextContent("00:00");
  expect(options[1]).toHaveTextContent("00:15");
  expect(options[2]).toHaveTextContent("00:30");
  expect(options[3]).toHaveTextContent("00:45");
});

test("Time can be selected from the dropdown", async () => {
  render(<Booking />);

  const timeSelect = screen.getByLabelText(/time/i);
  userEvent.selectOptions(timeSelect, "15:30");

  await waitFor(() => {
    expect(timeSelect).toHaveValue("15:30");
  });
});

test("Time state updates correctly on user selection", async () => {
  render(<Booking />);

  const timeSelect = screen.getByLabelText(/time/i);
  userEvent.selectOptions(timeSelect, "18:00");

  await waitFor(() => {
    expect(timeSelect).toHaveValue("18:00");
  });
});

test("Renders booking form correctly", () => {
  render(<Booking />);

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByText(/book now/i)).toBeInTheDocument();
});
