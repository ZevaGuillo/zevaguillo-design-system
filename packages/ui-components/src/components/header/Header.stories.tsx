import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Button } from "../button/Button";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Header Component

A page header with title and actions.

### When to use:
- Page headers
- Section headers
- Navigation headers
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Page Title",
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Page Title",
    subtitle: "This is a subtitle",
  },
};

export const WithLeftContent: Story = {
  args: {
    title: "Page Title",
    left: <Button size="small">Back</Button>,
  },
};

export const WithRightContent: Story = {
  args: {
    title: "Page Title",
    right: <Button>Action</Button>,
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: "Page Title",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Parent", href: "/parent" },
    ],
  },
};

export const Complete: Story = {
  args: {
    title: "Page Title",
    subtitle: "This is a subtitle",
    left: <Button size="small">Back</Button>,
    right: <Button>Action</Button>,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Parent", href: "/parent" },
    ],
  },
};
