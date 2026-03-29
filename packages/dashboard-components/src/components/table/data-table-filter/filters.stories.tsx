import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { StringFilter } from "./string-filter";
import { NumberFilter } from "./number-filter";
import { SelectFilter } from "./select-filter";
import { DateFilter } from "./date-filter";

const meta: Meta<any> = {
  title: "Table/Filters",
};

export default meta;

export const String: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="w-64">
        <StringFilter
          value={value}
          onChange={setValue}
          placeholder="Filter by name..."
        />
        <p className="mt-2 text-sm text-gray-500">
          Value: {value || "(empty)"}
        </p>
      </div>
    );
  },
};

export const Number: StoryObj = {
  render: () => {
    const [value, setValue] = useState<number | undefined>();
    return (
      <div className="w-64">
        <NumberFilter
          value={value}
          onChange={setValue}
          placeholder="Filter by quantity..."
        />
        <p className="mt-2 text-sm text-gray-500">
          Value: {value ?? "(empty)"}
        </p>
      </div>
    );
  },
};

export const Select: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="w-64">
        <SelectFilter
          value={value}
          onChange={setValue}
          options={[
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
            { value: "pending", label: "Pending" },
          ]}
          placeholder="Select status..."
        />
        <p className="mt-2 text-sm text-gray-500">
          Value: {value || "(empty)"}
        </p>
      </div>
    );
  },
};

export const Date: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="w-64">
        <DateFilter
          value={value}
          onChange={setValue}
          placeholder="Select date..."
        />
        <p className="mt-2 text-sm text-gray-500">
          Value: {value || "(empty)"}
        </p>
      </div>
    );
  },
};
