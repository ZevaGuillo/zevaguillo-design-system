import type { Meta, StoryObj } from "@storybook/react";
import { BadgeListSummary } from "./badge-list-summary/badge-list-summary";
import { EmptyTableContent } from "./empty-state/empty-table-content";
import { Skeleton } from "./skeleton/skeleton";
import { ProgressBar } from "./progress-bar/progress-bar";
import { SwitchBox } from "./switch-box/switch-box";
import { ChipGroup } from "./chip-group/chip-group";

const meta: Meta<any> = {
  title: "Common/Components",
};

export default meta;

export const BadgeListSummary_: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <BadgeListSummary labels={["Active", "Pending", "Draft"]} />
      <BadgeListSummary
        labels={["Active", "Pending", "Draft", "Archived"]}
        more={2}
      />
      <BadgeListSummary labels={["Active"]} />
      <BadgeListSummary labels={[]} />
    </div>
  ),
};

export const EmptyState: StoryObj = {
  render: () => (
    <EmptyTableContent
      title="No orders yet"
      message="Start by creating your first order"
    />
  ),
};

export const EmptyStateWithAction: StoryObj = {
  render: () => (
    <EmptyTableContent
      title="No products yet"
      message="Start by adding your first product"
      action={{
        label: "Add Product",
        onClick: () => console.log("Add product"),
      }}
    />
  ),
};

export const Skeleton_: StoryObj = {
  render: () => (
    <div className="space-y-4 w-64">
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width="100%" height={100} />
    </div>
  ),
};

export const ProgressBar_: StoryObj = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar value={0} />
      <ProgressBar value={50} />
      <ProgressBar value={100} />
      <ProgressBar value={75} showValue />
    </div>
  ),
};

export const SwitchBox_: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <SwitchBox label="Enable notifications" />
      <SwitchBox label="Enable notifications" checked />
      <SwitchBox label="Enable notifications" disabled />
    </div>
  ),
};

export const ChipGroup_: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <ChipGroup
        values={["Active", "Pending", "Draft"]}
        onChange={(values) => console.log(values)}
      />
    </div>
  ),
};
