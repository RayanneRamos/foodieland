import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  args: {
    author: {
      authorAvatar:
        "https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMjYxNjAuanBlZw==",
      authorName: "John Smith",
      authorDatePosted: "15 March 2022",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
