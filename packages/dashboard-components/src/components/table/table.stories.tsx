import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@zevaguillo/ui-components";

const meta: Meta<typeof Table> = {
  title: "Table/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: "1", name: "John Doe", email: "john@example.com", status: "active" },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "inactive",
  },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", status: "active" },
];

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "status", header: "Status" },
];

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: sampleData,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: "No customers found",
  },
};

export const WithRowClick: Story = {
  args: {
    columns,
    data: sampleData,
    onRowClick: (row) => console.log("Clicked:", row),
  },
};

export const SubComponents: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>ID</Table.Header>
          <Table.Header>Name</Table.Header>
          <Table.Header>Email</Table.Header>
          <Table.Header>Status</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sampleData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.status}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};
