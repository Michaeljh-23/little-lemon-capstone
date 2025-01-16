import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Booking from "./components/Booking";

test("initializeTimes fetches and sets available times", async () => {
  const mockFetchAPI = jest.fn(() => ["18:00", "19:00", "20:00"]);
  window.fetchAPI = mockFetchAPI;

  render(<Booking />);

  await waitFor(() => {
    expect(mockFetchAPI).toHaveBeenCalledTimes(1);
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveValue("18:00");
  });
});

test("updateTimes fetches and updates available times when a new date is selected", async () => {
  const mockFetchAPI = jest.fn(() => ["17:00", "18:30", "19:30"]);
  window.fetchAPI = mockFetchAPI;

  render(<Booking />);

  const dateField = screen.getByLabelText(/date/i);
  fireEvent.change(dateField, { target: { value: "2025-02-15" } });

  await waitFor(() => {
    expect(mockFetchAPI).toHaveBeenCalledWith(new Date("2025-02-15"));
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveValue("17:00");
  });
});
