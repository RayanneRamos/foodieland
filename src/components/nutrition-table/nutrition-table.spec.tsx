import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NutritionTable } from ".";

describe("Nutrition Table", () => {
  it("should render the title and subtitle", () => {
    render(<NutritionTable />);

    expect(screen.getByText(/nutrition information/i)).toBeInTheDocument();
    expect(
      screen.getByText(/adipiscing elit, sed do eiusmod tempor/i)
    ).toBeInTheDocument();
  });

  it("should render all nutrition info passed as props", () => {
    const nutrition = {
      calories: "200",
      totalFat: "10",
      protein: "5",
      carbohydrate: "30",
      cholesterol: "50",
    };

    render(<NutritionTable nutrition={nutrition} />);

    expect(screen.getByText(/200 kcal/i)).toBeInTheDocument();
    expect(screen.getByText(/10 g/i)).toBeInTheDocument();
    expect(screen.getByText(/5 g/i)).toBeInTheDocument();
    expect(screen.getByText(/30 g/i)).toBeInTheDocument();
    expect(screen.getByText(/50 mg/i)).toBeInTheDocument();
  });

  it("should render empty values if nutrition is undefined", () => {
    render(<NutritionTable nutrition={undefined} />);

    expect(
      screen.getByText((_, el) => el?.textContent === " kcal")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText((_, el) => el?.textContent === " g").length
    ).toBeGreaterThanOrEqual(2);

    expect(
      screen.getByText((_, el) => el?.textContent === " mg")
    ).toBeInTheDocument();
  });

  it("should render some values if only some nutrition fields are passed", () => {
    render(<NutritionTable nutrition={{ calories: "123", protein: "0" }} />);

    expect(screen.getByText(/123 kcal/i)).toBeInTheDocument();
    expect(screen.getByTestId("protein")).toHaveTextContent("0 g");
    expect(
      screen.getAllByText((_, el) => el?.textContent === " g").length
    ).toBeGreaterThanOrEqual(2);
    expect(
      screen.getByText((_, el) => el?.textContent === " mg")
    ).toBeInTheDocument();
  });
});
