import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@zevaguillo/ui-components";

const meta: Meta<any> = {
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
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    status: "active",
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    status: "pending",
  },
];

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "status", header: "Status" },
];

export const Basic: Story = {
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
    onRowClick: (row: any) => console.log("Clicked:", row),
  },
};

export const CustomRender: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>ID</Table.Header>
          <Table.Header>Name</Table.Header>
          <Table.Header>Email</Table.Header>
          <Table.Header>Status</Table.Header>
          <Table.Header>Actions</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sampleData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell className="font-medium">{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  row.status === "active"
                    ? "bg-green-100 text-green-800"
                    : row.status === "inactive"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {row.status}
              </span>
            </Table.Cell>
            <Table.Cell>
              <button className="text-blue-600 hover:underline text-sm">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Orders: Story = {
  render: () => {
    const orders = [
      {
        id: "ORD-001",
        customer: "John Doe",
        total: "$125.00",
        status: "fulfilled",
        date: "2024-01-15",
      },
      {
        id: "ORD-002",
        customer: "Jane Smith",
        total: "$89.99",
        status: "pending",
        date: "2024-01-16",
      },
      {
        id: "ORD-003",
        customer: "Bob Johnson",
        total: "$250.00",
        status: "cancelled",
        date: "2024-01-17",
      },
    ];
    return (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header>Order</Table.Header>
            <Table.Header>Customer</Table.Header>
            <Table.Header>Date</Table.Header>
            <Table.Header>Total</Table.Header>
            <Table.Header>Status</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order.id}>
              <Table.Cell className="font-medium">{order.id}</Table.Cell>
              <Table.Cell>{order.customer}</Table.Cell>
              <Table.Cell>{order.date}</Table.Cell>
              <Table.Cell>{order.total}</Table.Cell>
              <Table.Cell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    order.status === "fulfilled"
                      ? "bg-green-100 text-green-800"
                      : order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {order.status}
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const Products: Story = {
  render: () => {
    const products = [
      {
        id: "PROD-001",
        name: "Product A",
        inventory: 150,
        price: "$29.99",
        status: "published",
      },
      {
        id: "PROD-002",
        name: "Product B",
        inventory: 0,
        price: "$49.99",
        status: "draft",
      },
      {
        id: "PROD-003",
        name: "Product C",
        inventory: 75,
        price: "$19.99",
        status: "published",
      },
    ];
    return (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header>Product</Table.Header>
            <Table.Header>Price</Table.Header>
            <Table.Header>Inventory</Table.Header>
            <Table.Header>Status</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell className="font-medium">{product.name}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>
                {product.inventory === 0 ? (
                  <span className="text-red-600">Out of stock</span>
                ) : (
                  product.inventory
                )}
              </Table.Cell>
              <Table.Cell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    product.status === "published"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {product.status}
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const WithCheckbox: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const toggleAll = () => {
      if (selected.length === sampleData.length) {
        setSelected([]);
      } else {
        setSelected(sampleData.map((d) => d.id));
      }
    };
    const toggle = (id: string) => {
      if (selected.includes(id)) {
        setSelected(selected.filter((s) => s !== id));
      } else {
        setSelected([...selected, id]);
      }
    };
    return (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header>
              <input
                type="checkbox"
                checked={selected.length === sampleData.length}
                onChange={toggleAll}
              />
            </Table.Header>
            <Table.Header>ID</Table.Header>
            <Table.Header>Name</Table.Header>
            <Table.Header>Email</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>
                <input
                  type="checkbox"
                  checked={selected.includes(row.id)}
                  onChange={() => toggle(row.id)}
                />
              </Table.Cell>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};
