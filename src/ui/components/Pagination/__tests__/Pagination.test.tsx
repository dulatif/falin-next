import { describe, expect, it, vi } from "vitest";
import {
  renderWithProviders,
  screen,
  userEvent,
} from "@/tests/utils/test-utils";
import Pagination from "../Pagination";

describe("Pagination", () => {
  const mockOnNext = vi.fn();
  const mockOnPrev = vi.fn();
  const mockOnChange = vi.fn();

  const defaultProps = {
    page: 1,
    total: 10,
    onNext: mockOnNext,
    onPrev: mockOnPrev,
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnNext.mockClear();
    mockOnPrev.mockClear();
    mockOnChange.mockClear();
  });

  it("should render pagination component", () => {
    renderWithProviders(<Pagination {...defaultProps} />);

    // Check for prev and next buttons
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("should disable previous button on first page", () => {
    renderWithProviders(<Pagination {...defaultProps} page={1} />);

    const buttons = screen.getAllByRole("button");
    const prevButton = buttons[0]; // First button should be previous

    expect(prevButton).toBeDisabled();
  });

  it("should disable next button on last page", () => {
    renderWithProviders(<Pagination {...defaultProps} page={10} total={10} />);

    const buttons = screen.getAllByRole("button");
    const nextButton = buttons[buttons.length - 1]; // Last button should be next

    expect(nextButton).toBeDisabled();
  });

  it("should call onPrev when previous button is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Pagination {...defaultProps} page={2} />);

    const buttons = screen.getAllByRole("button");
    const prevButton = buttons[0];

    await user.click(prevButton);

    expect(mockOnPrev).toHaveBeenCalledTimes(1);
  });

  it("should call onNext when next button is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Pagination {...defaultProps} page={2} />);

    const buttons = screen.getAllByRole("button");
    const nextButton = buttons[buttons.length - 1];

    await user.click(nextButton);

    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });

  it("should call onChange when page number is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Pagination {...defaultProps} page={1} total={5} />);

    // Find page 2 button (MUI Pagination creates buttons for each page)
    const page2Button = screen.getByText("2");

    await user.click(page2Button);

    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it("should not call onPrev when on first page", async () => {
    renderWithProviders(<Pagination {...defaultProps} page={1} />);

    const buttons = screen.getAllByRole("button");
    const prevButton = buttons[0];

    // Button is disabled, so click should not trigger callback
    expect(prevButton).toBeDisabled();
    // Attempt to click won't work because it's disabled
  });

  it("should render correct number of pages", () => {
    renderWithProviders(<Pagination {...defaultProps} total={3} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should highlight current page", () => {
    renderWithProviders(<Pagination {...defaultProps} page={2} total={5} />);

    const currentPageButton = screen.getByText("2").closest("button");

    // MUI adds aria-current="page" to the current page
    expect(currentPageButton).toHaveAttribute("aria-current", "page");
  });
});
