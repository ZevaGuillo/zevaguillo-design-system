import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import React, { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: "changed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    label: "Accept terms",
  },
};

export const Checked: Story = {
  args: {
    label: "Accept terms",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled option",
    disabled: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Accept terms",
    description: "I agree to the terms and conditions",
  },
};

export const FormExample: Story = {
  render: () => {
    const [accepted, setAccepted] = useState(false);
    const [newsletter, setNewsletter] = useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Checkbox
          label="Accept terms and conditions"
          checked={accepted}
          onChange={setAccepted}
        />
        <Checkbox
          label="Subscribe to newsletter"
          checked={newsletter}
          onChange={setNewsletter}
        />
        <p>Accepted: {accepted ? "Yes" : "No"}</p>
      </div>
    );
  },
};
