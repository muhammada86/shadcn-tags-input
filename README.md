# ShadCN UI Tags Input Component

A powerful, enterprise-grade React tags input component built with TypeScript, React Hook Form, Framer Motion, and shadcn/ui. Perfect for modern web applications requiring sophisticated tag management with smooth animations and comprehensive validation.

![Tags Input Demo](https://img.shields.io/badge/React-18+-blue.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg) ![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## Documentation

For complete API reference, advanced examples, and live demos, visit:
**[Documentation](https://your-docs-site.vercel.app)**

---

## ✨ Features

- 🎨 **Variants & Themes** – Supports multiple styles and sizes.
- 📝 **Validation** – Built-in error messages with `react-hook-form`.
- ⌨️ **Keyboard Support** – Add/remove tags with Enter/Backspace.
- 🧩 **Integration** – Works with Shadcn form, input, and badge components.
- 🚀 **Customizable** – Configure max tags, max length, duplicates, and suggestions.
- 🔍 **Accessibility** – Full ARIA support.

---

## 📦 Installation

```bash
npm install lucide-react class-variance-authority clsx tailwind-merge cmdk framer-motion react-hook-form
```

```bash
npx shadcn@latest add form input badge
```

```bash
# Copy from this repository
cp components/tags-input-field.tsx your-project/src/components/
```

---

## 🛠️ Usage

### Basic Usage

```tsx
import { TagsInputField } from "@/components/tags-input-field";
import { useForm, FormProvider } from "react-hook-form";

function MyForm() {
  const form = useForm({
    defaultValues: {
      skills: [],
    },
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <TagsInputField
          name="skills"
          label="Skills"
          placeholder="Enter your skills"
        />
      </form>
    </FormProvider>
  );
}
```

---

## License

MIT License
