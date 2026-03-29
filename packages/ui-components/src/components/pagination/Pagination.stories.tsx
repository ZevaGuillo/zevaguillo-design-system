import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    showFirstLast: {
      control: "boolean",
      description: "Show first/last page buttons",
    },
    showPrevNext: {
      control: "boolean",
      description: "Show previous/next buttons",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Pagination Component

Navigation for splitting content across pages.

### When to use:
- Large data sets
- Search results
- List views
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        total={100}
        pageSize={10}
        currentPage={page}
        onPageChange={setPage}
      />
    );
  },
};

export const WithFirstLast: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        total={100}
        pageSize={10}
        currentPage={page}
        onPageChange={setPage}
        showFirstLast
      />
    );
  },
};

export const SmallDataset: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        total={25}
        pageSize={10}
        currentPage={page}
        onPageChange={setPage}
      />
    );
  },
};

export const MiddlePage: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <Pagination
        total={100}
        pageSize={10}
        currentPage={page}
        onPageChange={setPage}
        showFirstLast
      />
    );
  },
};
