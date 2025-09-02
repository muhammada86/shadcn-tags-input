"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { Book, Code2, Settings, Zap } from "lucide-react"

export function ApiSection() {
  const propsInterface = `interface TagsInputFieldProps<TFieldValues extends FieldValues> {
  // Core Props
  name: Path<TFieldValues>                    // Form field name (required)
  label: string                               // Field label (required)
  
  // Display & Behavior
  beautifyName?: string                       // Custom name for tag counter
  description?: string                        // Help text below field
  placeholder?: string                        // Input placeholder text
  disabled?: boolean                          // Disable the entire field
  className?: string                          // Additional CSS classes
  autoFocus?: boolean                         // Auto-focus on mount
  
  // Validation & Limits
  maxTags?: number                           // Maximum number of tags
  maxLength?: number                         // Maximum tag character length
  allowDuplicates?: boolean                  // Allow duplicate tags
  
  // Styling Variants
  variant?: "default" | "enterprise" | "minimal"
  tagVariant?: "default" | "secondary" | "outline" | "destructive"
  
  // Icons & Suggestions
  startIcon?: ReactNode                      // Icon at start of input
  endIcon?: ReactNode                        // Icon at end of input
  suggestions?: string[]                     // Autocomplete suggestions
}`

  const usageExamples = `// Basic Usage
<TagsInputField
  name="skills"
  label="Skills"
  placeholder="Add your skills..."
/>

// With Validation
<TagsInputField
  name="technologies"
  label="Technologies"
  description="Add up to 10 technologies"
  maxTags={10}
  maxLength={20}
  allowDuplicates={false}
/>

// Enterprise Variant with Suggestions
<TagsInputField
  name="frameworks"
  label="Frameworks"
  variant="enterprise"
  tagVariant="secondary"
  suggestions={["React", "Vue", "Angular", "Svelte"]}
  startIcon={<Code className="w-4 h-4" />}
/>`

  const formIntegration = `import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const schema = z.object({
  skills: z.array(z.string()).min(1, "At least one skill required"),
  technologies: z.array(z.string()).max(10, "Maximum 10 technologies")
})

function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      skills: [],
      technologies: []
    }
  })

  const onSubmit = (data) => {
    console.log(data) // { skills: ["React"], technologies: ["Next.js"] }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TagsInputField name="skills" label="Skills" />
        <TagsInputField name="technologies" label="Technologies" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  )
}`

  const keyboardShortcuts = `// Keyboard Interactions
Enter / Comma    → Add current input as tag
Backspace        → Remove last tag (when input is empty)
Escape          → Close suggestions dropdown
Arrow Keys      → Navigate suggestions (coming soon)
Tab             → Focus next element`

  return (
    <section id="api" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Book className="w-3 h-3 mr-1" />
            API Reference
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Complete API Documentation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive reference for all props, methods, and configuration options.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="props" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="props">Props</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="forms">Form Integration</TabsTrigger>
              <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
            </TabsList>

            <TabsContent value="props" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Component Props
                  </CardTitle>
                  <CardDescription>All available props and their TypeScript definitions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={propsInterface} language="tsx" title="TagsInputFieldProps Interface" />

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Required Props</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <code className="text-sm font-mono text-primary">name</code>
                          <p className="text-sm text-muted-foreground mt-1">
                            Form field name for React Hook Form integration
                          </p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <code className="text-sm font-mono text-primary">label</code>
                          <p className="text-sm text-muted-foreground mt-1">Display label for the input field</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Variant Options</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <code className="text-sm font-mono text-primary">variant</code>
                          <p className="text-sm text-muted-foreground mt-1">"default" | "enterprise" | "minimal"</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <code className="text-sm font-mono text-primary">tagVariant</code>
                          <p className="text-sm text-muted-foreground mt-1">
                            "default" | "secondary" | "outline" | "destructive"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Usage Examples
                  </CardTitle>
                  <CardDescription>Common implementation patterns and configurations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={usageExamples} language="tsx" title="Common Usage Patterns" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forms" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Form Integration
                  </CardTitle>
                  <CardDescription>How to integrate with React Hook Form and validation libraries.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={formIntegration} language="tsx" title="React Hook Form + Zod Integration" />

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Form Provider Required</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      The component must be wrapped in a FormProvider from React Hook Form. This enables form
                      validation, error handling, and proper state management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="keyboard" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Keyboard Shortcuts
                  </CardTitle>
                  <CardDescription>Built-in keyboard interactions for better user experience.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={keyboardShortcuts} language="text" title="Keyboard Interactions" />

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-3">Tag Management</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <kbd className="px-2 py-1 bg-background rounded text-xs">Enter</kbd>
                          <span className="text-muted-foreground">Add tag</span>
                        </div>
                        <div className="flex justify-between">
                          <kbd className="px-2 py-1 bg-background rounded text-xs">Comma</kbd>
                          <span className="text-muted-foreground">Add tag</span>
                        </div>
                        <div className="flex justify-between">
                          <kbd className="px-2 py-1 bg-background rounded text-xs">Backspace</kbd>
                          <span className="text-muted-foreground">Remove last</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-3">Navigation</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <kbd className="px-2 py-1 bg-background rounded text-xs">Escape</kbd>
                          <span className="text-muted-foreground">Close suggestions</span>
                        </div>
                        <div className="flex justify-between">
                          <kbd className="px-2 py-1 bg-background rounded text-xs">Tab</kbd>
                          <span className="text-muted-foreground">Next field</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
