import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../button/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "elevated"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <p>This is a default card</p>,
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: <p>This is a bordered card</p>,
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: <p>This is an elevated card</p>,
  },
};

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <h3 style={{ margin: "0 0 0.5rem 0" }}>Card Title</h3>
        <p style={{ margin: 0 }}>Card content goes here</p>
      </>
    ),
  },
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <h3 style={{ margin: "0 0 0.5rem 0" }}>Card Title</h3>
      <p style={{ margin: "0 0 1rem 0" }}>Card content goes here</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button size="small" variant="outline">
          Cancel
        </Button>
        <Button size="small" variant="primary">
          Confirm
        </Button>
      </div>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card style={{ cursor: "pointer" }} onClick={() => console.log("clicked")}>
      <p>Click me!</p>
    </Card>
  ),
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
    </div>
  ),
};
