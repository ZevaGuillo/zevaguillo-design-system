# @zevaguillo/design-system

Monorepo para el sistema de diseño modular. Paquetes independientes y reutilizables para construir interfaces de usuario modernas.

## Paquetes

| Paquete                     | Descripción                                     | Versión |
| --------------------------- | ----------------------------------------------- | ------- |
| `@zevaguillo/design-tokens` | Tokens de diseño (colores, tipografía, spacing) | 0.1.0   |
| `@zevaguillo/ui-components` | Componentes de UI (58 componentes)              | 0.1.0   |
| `@zevaguillo/hooks`         | React hooks personalizados                      | 0.1.0   |
| `@zevaguillo/utils`         | Utilidades y funciones helper                   | 0.1.0   |
| `@zevaguillo/i18n`          | Internacionalización                            | 0.1.0   |
| `@zevaguillo/themes`        | Definiciones de temas                           | 0.1.0   |

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
# Instalar todas las dependencias del monorepo
npm install

# O solo un paquete específico
npm install @zevaguillo/ui-components
```

## Comandos

### Desarrollo

```bash
# Ejecutar todos los paquetes en modo watch
npm run dev

# Ejecutar un paquete específico
npm run dev --workspace=@zevaguillo/ui-components
```

### Build

```bash
# Build de todos los paquetes
npm run build

# Build de un paquete específico
npm run build --workspace=@zevaguillo/ui-components

# Build con Turborepo (más rápido)
npx turbo run build
```

### Storybook

```bash
# Iniciar Storybook en modo desarrollo
npm run storybook --workspace=@zevaguillo/ui-components

# Build de Storybook estático
npm run build-storybook --workspace=@zevaguillo/ui-components

# Storybook se ejecutará en http://localhost:6006
```

### Testing

```bash
# Ejecutar tests
npm run test

# Ejecutar tests de un paquete
npm run test --workspace=@zevaguillo/ui-components
```

### Linting

```bash
# Ejecutar lint
npm run lint

# Typecheck
npm run typecheck
```

## Estructura del Proyecto

```
zevaguillo-design-system/
├── packages/
│   ├── design-tokens/        # Tokens de diseño
│   │   ├── src/
│   │   │   ├── tokens/       # JSON tokens
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── ui-components/         # Componentes de UI
│   │   ├── src/
│   │   │   ├── components/   # Componentes
│   │   │   ├── docs/         # Documentación MDX
│   │   │   └── index.ts
│   │   ├── .storybook/       # Configuración Storybook
│   │   └── package.json
│   │
│   ├── hooks/                # React hooks
│   ├── utils/               # Utilidades
│   ├── i18n/                # Internacionalización
│   └── themes/              # Temas
│
├── package.json              # Workspace root
├── turbo.json                # Configuración Turborepo
└── tsconfig.base.json       # TypeScript base
```

## Componentes Disponibles

### Componentes básicos

- Button
- Input
- Textarea
- Select
- Checkbox
- Radio
- Toggle
- Switch
- Label

### Componentes de visualización

- Card
- Badge
- Avatar
- Spinner
- Skeleton
- Tag
- Chip
- Divider

### Componentes de navegación

- Tabs
- Breadcrumb
- Pagination
- Sidebar
- Header

### Componentes de overlayer

- Modal
- Drawer
- Popover
- Tooltip
- Toast
- Toaster

### Componentes de formularios

- Form
- DatePicker
- Calendar
- TimeInput
- CurrencyInput

### Otros componentes

- Alert
- Accordion
- Progress
- Table
- List
- Command
- CommandBar
- Code
- CodeBlock
- Container
- Heading
- Text
- Kbd
- Hint
- StatusBadge
- IconButton
- IconBadge
- FocusModal
- ProgressAccordion
- ProgressTabs
- Prompt
- InlineTip
- Copy
- DateSegment
- I18nProvider

## Uso de Componentes

### Importación básica

```tsx
import { Button, Input, Card } from "@zevaguillo/ui-components";

function App() {
  return (
    <Card>
      <Input label="Email" placeholder="Enter email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Con estilos personalizados

```tsx
import { Button } from "@zevaguillo/ui-components";

<Button
  variant="primary"
  size="large"
  className="my-custom-class"
  onClick={() => console.log("clicked")}
>
  Click me
</Button>;
```

### Con Storybook

```bash
npm run storybook --workspace=@zevaguillo/ui-components
```

Luego visita http://localhost:6006 para ver los componentes interactivos.

## Documentación

La documentación de cada componente se encuentra en:

- **Storybook**: http://localhost:6006
- **MDX Docs**: `packages/ui-components/src/docs/`

### Guías de documentación

Cada componente incluye:

- Especificaciones (props, tipos)
- Cuándo usar el componente
- Guía de variantes
- Mejores prácticas
- Anti-patterns
- Ejemplos de implementación
- Requisitos de accesibilidad

## Contribuir

1. Haz fork del repositorio
2. Crea una rama (`git checkout -b feature/nombre`)
3. Commit tus cambios (`git commit -m 'Add feature'`)
4. Push a la rama (`git push origin feature/nombre`)
5. Abre un Pull Request

### Añadir nuevos componentes

1. Crea la carpeta en `packages/ui-components/src/components/`
2. Añade los archivos:
   - `ComponentName.tsx`
   - `ComponentName.types.ts`
   - `index.ts`
   - `ComponentName.stories.tsx`
3. Exporta en `packages/ui-components/src/index.ts`
4. Añade documentación en `packages/ui-components/src/docs/`

## Licencia

MIT
