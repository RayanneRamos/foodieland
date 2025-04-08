import { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
