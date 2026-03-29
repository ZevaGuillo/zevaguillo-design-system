import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./CodeBlock";

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  argTypes: {
    language: {
      control: "text",
      description: "Programming language",
    },
    showLineNumbers: {
      control: "boolean",
      description: "Show line numbers",
    },
    copyable: {
      control: "boolean",
      description: "Allow copying code",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## CodeBlock Component

A component for displaying code snippets.

### When to use:
- Code examples
- Syntax highlighting
- Documentation
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const exampleCode = `function hello() {
  console.log("Hello, World!");
  return true;
}`;

export const Default: Story = {
  args: {
    code: exampleCode,
  },
};

export const WithLanguage: Story = {
  args: {
    code: exampleCode,
    language: "javascript",
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: exampleCode,
    showLineNumbers: true,
  },
};

export const Copyable: Story = {
  args: {
    code: exampleCode,
    copyable: true,
  },
};

export const AllFeatures: Story = {
  args: {
    code: exampleCode,
    language: "javascript",
    showLineNumbers: true,
    copyable: true,
  },
};
