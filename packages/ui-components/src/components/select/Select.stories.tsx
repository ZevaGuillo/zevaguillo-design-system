import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import React, { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
type Story = StoryObj<typeof Select>;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Select
        value={value}
        onChange={setValue}
        options={options}
        placeholder="Select an option"
      />
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Select
        label="Choose your option"
        value={value}
        onChange={setValue}
        options={options}
        placeholder="Select..."
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState("option2");
    return (
      <Select
        label="Pre-selected"
        value={value}
        onChange={setValue}
        options={options}
      />
    );
  },
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Select
        label="Error state"
        value={value}
        onChange={setValue}
        options={options}
        error="Please select an option"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Select label="Disabled" value="option1" options={options} disabled />
    );
  },
};

export const AllStates: Story = {
  render: () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("option2");
    const [value3, setValue3] = useState("");
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
        }}
      >
        <Select
          label="Default"
          value={value1}
          onChange={setValue1}
          options={options}
          placeholder="Select..."
        />
        <Select
          label="With value"
          value={value2}
          onChange={setValue2}
          options={options}
        />
        <Select
          label="Error"
          value={value3}
          onChange={setValue3}
          options={options}
          error="Required"
        />
        <Select label="Disabled" value="option1" options={options} disabled />
      </div>
    );
  },
};
