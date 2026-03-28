import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import React, { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "tel", "url"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    onChange: {
      action: "changed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    helperText: "Must be at least 8 characters",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    value: "invalid-email",
    error: true,
    errorMessage: "Please enter a valid email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    value: "Cannot edit",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Input",
    placeholder: "Small...",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Input",
    placeholder: "Large...",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <Input size="small" label="Small" placeholder="Small input" />
      <Input size="medium" label="Medium" placeholder="Medium input" />
      <Input size="large" label="Large" placeholder="Large input" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <Input placeholder="Default" />
      <Input placeholder="With value" defaultValue="Some text" />
      <Input placeholder="Disabled" disabled />
      <Input
        placeholder="Error state"
        error
        errorMessage="This field is required"
      />
    </div>
  ),
};
