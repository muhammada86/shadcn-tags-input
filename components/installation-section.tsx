import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";
import { Package, Download, Settings, CheckCircle } from "lucide-react";

export function InstallationSection() {
  const installationCode = `# Install required dependencies
npm install lucide-react class-variance-authority clsx tailwind-merge cmdk

# Install shadcn/ui components
npx shadcn@latest add form input badge button

# Install React Hook Form and validation
npm install react-hook-form @hookform/resolvers zod

# Install Framer Motion for animations
npm install framer-motion`;

  const setupCode = `// 1. Copy the shadcn UI Tags Input Component to your project
// src/components/tags-input-field.tsx

// 2. Configure path aliases in your bundler (if not already done)
// For Next.js, add to tsconfig.json:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

// 3. Ensure Tailwind CSS is configured
// 4. Ensure shadcn/ui is set up in your project`;

  const basicImplementationCode = `import { TagsInputField } from '@/components/tags-input-field'
import { useForm, FormProvider } from 'react-hook-form'

function MyComponent() {
  const form = useForm({
    defaultValues: {
      tags: []
    }
  })

  return (
    <FormProvider {...form}>
      <TagsInputField
        name="tags"
        label="Tags"
        placeholder="Add tags..."
      />
    </FormProvider>
  )
}`;

  const prerequisitesCode = `Prerequisites:
✅ React environment (Next.js, Vite, Create React App, etc.)
✅ Path aliases configured (@/ imports)
✅ shadcn/ui installed and configured
✅ Tailwind CSS setup and configured`;

  return (
    <section id="getting-started" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Download className="w-3 h-3 mr-1" />
            Getting Started
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Installation & Setup</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simply copy the component and install dependencies. No package
            installation required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="prerequisites">Prerequisites</TabsTrigger>
              <TabsTrigger value="install">Install</TabsTrigger>
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>

            <TabsContent value="prerequisites" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Prerequisites
                  </CardTitle>
                  <CardDescription>
                    Make sure your project has these requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={prerequisitesCode}
                    language="text"
                    title="Requirements"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="install" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Install Dependencies
                  </CardTitle>
                  <CardDescription>
                    Install the required packages for the component to work.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={installationCode}
                    language="bash"
                    title="Installation Commands"
                  />
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-900 dark:text-blue-100">
                          No Package Installation
                        </p>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                          Just copy the component file and install these
                          dependencies. No npm package to install.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="setup" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Project Setup
                  </CardTitle>
                  <CardDescription>
                    Copy the component and configure your project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={setupCode}
                    language="tsx"
                    title="Setup Steps"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Basic Usage
                  </CardTitle>
                  <CardDescription>
                    Start using the component in your React application.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={basicImplementationCode}
                    language="tsx"
                    title="Basic Implementation"
                  />
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900 dark:text-green-100">
                          Form Provider Required
                        </p>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          The component must be wrapped in a React Hook Form
                          FormProvider for proper functionality.
                        </p>
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
  );
}
