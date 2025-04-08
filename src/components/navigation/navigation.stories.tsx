import { Meta, StoryObj } from "@storybook/react";
import { Navigation } from ".";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Navigation> = {
  title: "Navigation",
  component: Navigation,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
