import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: "boolean",
      description: "Loading state",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Table Component

A data table for displaying tabular data.

### When to use:
- Display lists of data
- Sortable data
- Data with actions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const columns = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "role", header: "Role" },
];

const data = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
];

export const Default: Story = {
  args: {
    columns: columns,
    data: data,
  },
};

export const WithLoading: Story = {
  args: {
    columns: columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: columns,
    data: [],
    emptyMessage: "No users found",
  },
};

export const WithCustomRender: Story = {
  args: {
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
      {
        key: "role",
        header: "Role",
        render: (row: any) => <span style={{ color: "blue" }}>{row.role}</span>,
      },
    ],
    data: data,
  },
};
