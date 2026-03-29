import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Avatar size",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Avatar Component

Display user avatar with image or initials fallback.

### When to use:
- User profile pictures
- Author attribution
- Team member display
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    fallback: "JD",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    alt: "John Doe",
  },
};

export const Small: Story = {
  args: {
    fallback: "JD",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    fallback: "JD",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    fallback: "JD",
    size: "large",
  },
};

export const WithLongName: Story = {
  args: {
    fallback: "JD",
    alt: "John Doe",
  },
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Avatar fallback="JD" src="https://i.pravatar.cc/150?img=1" />
      <Avatar fallback="AS" />
      <Avatar fallback="MK" />
      <Avatar fallback="LP" />
    </div>
  ),
};
