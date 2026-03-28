import type { Preview } from "@storybook/react";
import React from "react";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1a1a1a",
        },
        {
          name: "gray",
          value: "#f3f4f6",
        },
      ],
    },
    docs: {
      toc: true,
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.backgrounds?.value;
      return (
        <div
          style={{
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
            backgroundColor: theme === "#1a1a1a" ? "#1a1a1a" : "#ffffff",
            minHeight: "100px",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
