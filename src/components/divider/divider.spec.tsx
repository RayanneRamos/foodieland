import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Divider } from ".";
import styles from "./styles.module.scss";

describe("Divider", () => {
  it("should render a divider element", () => {
    const { container } = render(<Divider />);
    const divider = container.firstChild;

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass(styles.divider);
  });
});
