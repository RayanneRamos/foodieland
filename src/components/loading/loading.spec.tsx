import { render, screen } from "@testing-library/react";
import { Loading } from ".";

describe("Loading", () => {
  it("should render the loading container", () => {
    render(<Loading />);

    const container = screen.getByRole("status");
    expect(container).toBeInTheDocument();
  });

  it("should render the loading circle with correct class", () => {
    render(<Loading />);

    const circle = screen.getByTestId("loading-circle");
    expect(circle).toBeInTheDocument();
  });

  it("should render the loading text", () => {
    render(<Loading />);

    const text = screen.getByText("Carregando...");
    expect(text).toBeInTheDocument();
  });
});
