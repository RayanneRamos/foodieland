import { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from ".";
import "../../styles/global.scss";

const iconOptions = ["Printer", "Export"];

const meta: Meta<typeof ActionButton> = {
  title: "Action Button",
  component: ActionButton,
  args: {
    icon: "Printer",
    name: "Print",
  },
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: iconOptions,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Printer: Story = {
  args: {
    icon: "Printer",
    name: "PRINT",
  },
};

export const Export: Story = {
  args: {
    icon: "Export",
    name: "EXPORT",
  },
};
