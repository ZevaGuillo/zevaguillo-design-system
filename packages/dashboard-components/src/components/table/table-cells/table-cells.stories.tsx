import type { Meta, StoryObj } from "@storybook/react";
import { PaymentStatusCell } from "./order/payment-status-cell/payment-status-cell";
import { FulfillmentStatusCell } from "./order/fulfillment-status-cell/fulfillment-status-cell";
import { ProductStatusCell } from "./product/product-status-cell/product-status-cell";
import { PromotionStatusCell } from "./promotion/status-cell/status-cell";

const meta: Meta<any> = {
  title: "Table/TableCells",
};

export default meta;

export const PaymentStatus: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <PaymentStatusCell value="paid" />
      <PaymentStatusCell value="awaiting" />
      <PaymentStatusCell value="pending" />
      <PaymentStatusCell value="refunded" />
      <PaymentStatusCell value="partially_refunded" />
      <PaymentStatusCell value="canceled" />
      <PaymentStatusCell value="failed" />
      <PaymentStatusCell value="requires_action" />
      <PaymentStatusCell value="" />
    </div>
  ),
};

export const FulfillmentStatus: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <FulfillmentStatusCell value="fulfilled" />
      <FulfillmentStatusCell value="not_fulfilled" />
      <FulfillmentStatusCell value="partially_fulfilled" />
      <FulfillmentStatusCell value="canceled" />
      <FulfillmentStatusCell value="requires_action" />
      <FulfillmentStatusCell value="" />
    </div>
  ),
};

export const ProductStatus: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ProductStatusCell value="published" />
      <ProductStatusCell value="draft" />
      <ProductStatusCell value="proposed" />
      <ProductStatusCell value="rejected" />
      <ProductStatusCell value="pending" />
      <ProductStatusCell value="" />
    </div>
  ),
};

export const PromotionStatus: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <PromotionStatusCell value="active" />
      <PromotionStatusCell value="inactive" />
      <PromotionStatusCell value="scheduled" />
      <PromotionStatusCell value="expired" />
      <PromotionStatusCell value="disabled" />
      <PromotionStatusCell value="" />
    </div>
  ),
};
