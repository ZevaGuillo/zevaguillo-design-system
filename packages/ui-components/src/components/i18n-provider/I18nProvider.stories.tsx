import type { Meta, StoryObj } from "@storybook/react";
import { I18nProvider } from "./I18nProvider";
import { Text } from "../text/Text";
import { useState } from "react";

const meta: Meta<typeof I18nProvider> = {
  title: "Components/I18nProvider",
  component: I18nProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## I18nProvider Component

Internationalization context provider.

### When to use:
- Multi-language apps
- Localization
- Translation support
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof I18nProvider>;

const translations = {
  en: {
    greeting: "Hello!",
    farewell: "Goodbye!",
  },
  es: {
    greeting: "¡Hola!",
    farewell: "¡Adiós!",
  },
  fr: {
    greeting: "Bonjour!",
    farewell: "Au revoir!",
  },
};

export const Default: Story = {
  render: () => (
    <I18nProvider defaultLocale="en" translations={translations}>
      <Text>Use the provider in your app</Text>
    </I18nProvider>
  ),
};

export const WithLocale: Story = {
  render: () => (
    <I18nProvider defaultLocale="es" translations={translations}>
      <Text>Spanish locale</Text>
    </I18nProvider>
  ),
};
