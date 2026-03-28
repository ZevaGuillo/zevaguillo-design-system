import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import React, { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs = [
  { label: "Account", content: "Account settings content" },
  { label: "Password", content: "Password settings content" },
  { label: "Preferences", content: "Preferences content" },
];

export const Default: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <Tabs tabs={tabs} activeIndex={activeIndex} onChange={setActiveIndex} />
    );
  },
};

export const WithInitialActive: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
      <Tabs tabs={tabs} activeIndex={activeIndex} onChange={setActiveIndex} />
    );
  },
};

export const TwoTabs: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <Tabs
        tabs={[
          { label: "Tab A", content: "Content A" },
          { label: "Tab B", content: "Content B" },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    );
  },
};

export const Pills: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <Tabs
        tabs={tabs}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
        variant="pills"
      />
    );
  },
};

export const ManyTabs: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <Tabs
        tabs={[
          { label: "Tab 1", content: "Content 1" },
          { label: "Tab 2", content: "Content 2" },
          { label: "Tab 3", content: "Content 3" },
          { label: "Tab 4", content: "Content 4" },
          { label: "Tab 5", content: "Content 5" },
        ]}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    );
  },
};

export const Uncontrolled: Story = {
  args: {
    tabs,
    defaultIndex: 0,
  },
};
