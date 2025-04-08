import { Meta, StoryObj } from "@storybook/react";
import { FavoriteButton } from ".";

const meta: Meta<typeof FavoriteButton> = {
  title: "Favorite Button",
  component: FavoriteButton,
};

export default meta;

type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {};
