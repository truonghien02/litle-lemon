import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservation from "./Reservation";
import "@testing-library/jest-dom";

// Mock react-router-dom's useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockNavigate = require("react-router-dom").useNavigate;

describe("Reservation Component", () => {
  beforeEach(() => {
    localStorage.clear();
    mockNavigate.mockClear();
  });

  const fillForm = () => {
    fireEvent.change(screen.getByLabelText(/date \*/i), {
      target: { value: "2025-01-30" },
    });
    fireEvent.change(screen.getByLabelText(/time \*/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/name \*/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/phone \*/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/number of diners \*/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/note/i), {
      target: { value: "Vegetarian" },
    });
  };

  test("renders all form fields and submit button", () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    const formFields = [
      /date \*/i,
      /time \*/i,
      /name \*/i,
      /phone \*/i,
      /email/i,
      /number of diners \*/i,
      /note/i,
    ];

    formFields.forEach((field) => {
      expect(screen.getByLabelText(field)).toBeInTheDocument();
    });

    expect(screen.getByText(/reserve a table now/i)).toBeInTheDocument();
  });

  test("shows validation errors for empty required fields", async () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/reserve a table now/i));

    const errorMessages = [
      /date is a required field/i,
      /time is a required field/i,
      /name is a required field/i,
      /phone is a required field/i,
    ];

    for (const errorMessage of errorMessages) {
      expect(await screen.findByText(errorMessage)).toBeInTheDocument();
    }
  });

  test("accepts valid input and navigates to success page", async () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    fillForm();

    // Submit the form and wait for navigation
    await waitFor(() =>
      fireEvent.click(screen.getByText(/reserve a table now/i))
    );

    expect(mockNavigate).toHaveBeenCalledWith("/reservation/success");

    const storedData = JSON.parse(
      localStorage.getItem("customerReservation") || "{}"
    );

    expect(storedData).toMatchObject({
      date: "2025-01-30",
      time: "18:00",
      name: "John Doe",
      phone: "1234567890",
      email: "john.doe@example.com",
      numberOfDiners: 4,
      note: "Vegetarian",
    });
  });

  test("displays email validation error for invalid input", async () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.blur(screen.getByLabelText(/email/i));

    expect(
      await screen.findByText(/invalid email format/i)
    ).toBeInTheDocument();
  });
});
