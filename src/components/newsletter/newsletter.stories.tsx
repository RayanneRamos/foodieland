import { Meta, StoryObj } from "@storybook/react";
import { Newsletter } from ".";
import "./styles.module.scss";

const meta: Meta<typeof Newsletter> = {
  title: "Newsletter",
  component: Newsletter,
};

export default meta;

type Story = StoryObj<typeof Newsletter>;

export const Default: Story = {};
