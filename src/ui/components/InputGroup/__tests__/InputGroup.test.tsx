import { describe, expect, it } from "vitest";
import {
  renderWithProviders,
  screen,
  userEvent,
} from "@/tests/utils/test-utils";
import InputGroup, { FormGroup } from "../InputGroup";

describe("InputGroup", () => {
  it("should render input with label", () => {
    renderWithProviders(
      <InputGroup label="Email" placeholder="Enter your email" />,
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("should display helper text when provided", () => {
    renderWithProviders(
      <InputGroup
        label="Username"
        helperText="Must be at least 3 characters"
      />,
    );

    expect(
      screen.getByText("Must be at least 3 characters"),
    ).toBeInTheDocument();
  });

  it("should show required indicator", () => {
    renderWithProviders(<InputGroup label="Required Field" required />);

    const label = screen.getByText("Required Field");
    // MUI adds asterisk for required fields
    expect(label.closest("label")).toHaveClass("Mui-required");
  });

  it("should show error state", () => {
    renderWithProviders(
      <InputGroup label="Email" error helperText="Invalid email address" />,
    );

    const helperText = screen.getByText("Invalid email address");
    expect(helperText.closest("p")).toHaveClass("Mui-error");
  });

  it("should handle user input", async () => {
    const user = userEvent.setup();
    renderWithProviders(<InputGroup label="Name" />);

    const input = screen.getByLabelText("Name");
    await user.type(input, "John Doe");

    expect(input).toHaveValue("John Doe");
  });

  it("should be disabled when disabled prop is true", () => {
    renderWithProviders(<InputGroup label="Disabled Input" disabled />);

    const input = screen.getByLabelText("Disabled Input");
    expect(input).toBeDisabled();
  });

  it("should render with placeholder", () => {
    renderWithProviders(
      <InputGroup label="Search" placeholder="Type to search..." />,
    );

    expect(
      screen.getByPlaceholderText("Type to search..."),
    ).toBeInTheDocument();
  });

  it("should accept different input types", () => {
    renderWithProviders(<InputGroup label="Password" type="password" />);

    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");
  });
});

describe("FormGroup", () => {
  it("should render form group with label and children", () => {
    renderWithProviders(
      <FormGroup label="Custom Field">
        <input data-testid="custom-input" />
      </FormGroup>,
    );

    expect(screen.getByText("Custom Field")).toBeInTheDocument();
    expect(screen.getByTestId("custom-input")).toBeInTheDocument();
  });

  it("should show helper text", () => {
    renderWithProviders(
      <FormGroup label="Field" helperText="This is a helper">
        <input />
      </FormGroup>,
    );

    expect(screen.getByText("This is a helper")).toBeInTheDocument();
  });

  it("should apply required state", () => {
    renderWithProviders(
      <FormGroup label="Required Field" required>
        <input />
      </FormGroup>,
    );

    const label = screen.getByText("Required Field");
    expect(label.closest("label")).toHaveClass("Mui-required");
  });

  it("should apply error state", () => {
    renderWithProviders(
      <FormGroup label="Field" error helperText="Error message">
        <input />
      </FormGroup>,
    );

    const helperText = screen.getByText("Error message");
    expect(helperText.closest("p")).toHaveClass("Mui-error");
  });
});
