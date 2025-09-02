"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TagsInputField } from "@/components/tags-input-field"
import { CodeBlock } from "@/components/code-block"
import { Sparkles, Zap, Shield, Palette, Code, Users, Settings, Database, Globe, Briefcase, Heart } from "lucide-react"

const formSchema = z.object({
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  technologies: z.array(z.string()).optional(),
  interests: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  frameworks: z.array(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(),
})

type FormData = z.infer<typeof formSchema>

export function DemoSection() {
  const [formData, setFormData] = useState<FormData | null>(null)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: ["React", "TypeScript"],
      technologies: [],
      interests: [],
      languages: [],
      frameworks: [],
      tools: [],
      categories: [],
    },
  })

  const onSubmit = (data: FormData) => {
    setFormData(data)
  }

  const scenarios = [
    {
      title: "Skills & Expertise",
      description: "Professional skills with validation",
      component: (
        <TagsInputField
          name="skills"
          label="Technical Skills"
          description="Add your technical skills"
          placeholder="Type and press Enter..."
          maxTags={10}
          suggestions={["JavaScript", "TypeScript", "Python", "Go", "Rust", "Java", "C++", "Swift"]}
          variant="enterprise"
          startIcon={<Code className="w-4 h-4" />}
        />
      ),
    },
    {
      title: "Technologies & Frameworks",
      description: "Secondary variant with length limits",
      component: (
        <TagsInputField
          name="technologies"
          label="Technologies"
          description="Frameworks and tools you use"
          maxTags={8}
          maxLength={15}
          tagVariant="secondary"
          suggestions={["React", "Next.js", "Vue", "Angular", "Node.js", "Express", "FastAPI", "Django"]}
          startIcon={<Settings className="w-4 h-4" />}
        />
      ),
    },
    {
      title: "Personal Interests",
      description: "Minimal variant with outline tags",
      component: (
        <TagsInputField
          name="interests"
          label="Interests"
          placeholder="What interests you?"
          variant="minimal"
          tagVariant="outline"
          suggestions={["AI/ML", "Web3", "Mobile", "DevOps", "Design", "Gaming"]}
          startIcon={<Heart className="w-4 h-4" />}
        />
      ),
    },
    {
      title: "Programming Languages",
      description: "Default variant with custom suggestions",
      component: (
        <TagsInputField
          name="languages"
          label="Programming Languages"
          placeholder="Add programming languages..."
          maxTags={12}
          suggestions={[
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "C#",
            "Go",
            "Rust",
            "PHP",
            "Ruby",
            "Swift",
            "Kotlin",
            "Dart",
          ]}
          startIcon={<Globe className="w-4 h-4" />}
        />
      ),
    },
    {
      title: "Development Tools",
      description: "Enterprise variant with destructive tags",
      component: (
        <TagsInputField
          name="tools"
          label="Development Tools"
          description="Tools and software you use daily"
          maxTags={15}
          tagVariant="destructive"
          variant="enterprise"
          suggestions={["VS Code", "Git", "Docker", "Kubernetes", "AWS", "Vercel", "Figma", "Postman"]}
          startIcon={<Database className="w-4 h-4" />}
        />
      ),
    },
    {
      title: "Project Categories",
      description: "Minimal variant with team collaboration focus",
      component: (
        <TagsInputField
          name="categories"
          label="Project Categories"
          placeholder="Categorize your projects..."
          variant="minimal"
          maxTags={6}
          allowDuplicates={true}
          suggestions={["Frontend", "Backend", "Full-stack", "Mobile", "Desktop", "DevOps", "Design", "Research"]}
          startIcon={<Briefcase className="w-4 h-4" />}
        />
      ),
    },
    {
      title: "Team & Collaboration",
      description: "Default variant for team-related tags",
      component: (
        <TagsInputField
          name="frameworks"
          label="Collaboration Tools"
          description="Tools for team collaboration"
          maxTags={8}
          maxLength={20}
          suggestions={["Slack", "Discord", "Notion", "Jira", "Trello", "Asana", "Linear", "GitHub"]}
          startIcon={<Users className="w-4 h-4" />}
        />
      ),
    },
  ]

  const basicUsageCode = `import { TagsInputField } from "@/components/tags-input-field"
import { useForm, FormProvider } from "react-hook-form"

function MyForm() {
  const form = useForm({
    defaultValues: {
      skills: ["React", "TypeScript"]
    }
  })

  return (
    <FormProvider {...form}>
      <TagsInputField
        name="skills"
        label="Skills"
        placeholder="Add your skills..."
        maxTags={10}
        suggestions={["JavaScript", "Python", "Go", "Rust"]}
      />
    </FormProvider>
  )
}`

  const advancedUsageCode = `<TagsInputField
  name="technologies"
  label="Technologies"
  description="Add technologies you work with"
  maxTags={8}
  maxLength={20}
  allowDuplicates={false}
  variant="enterprise"
  tagVariant="secondary"
  suggestions={[
    "Next.js", "React", "Vue", "Angular",
    "Node.js", "Python", "Go", "Rust"
  ]}
  startIcon={<Zap className="w-4 h-4" />}
/>`

  return (
    <section id="demo" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Demo & 7 Usage Scenarios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore different configurations and use cases. Test the component with various settings and see real-time
            results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Live Demo - 7 Usage Scenarios
              </CardTitle>
              <CardDescription>
                Try different configurations and see how the component behaves in various contexts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    {scenarios.map((scenario, index) => (
                      <div key={index} className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm">{scenario.title}</h4>
                          <p className="text-xs text-muted-foreground">{scenario.description}</p>
                        </div>
                        {scenario.component}
                      </div>
                    ))}
                  </div>

                  <Button type="submit" className="w-full">
                    Submit All Forms
                  </Button>
                </form>
              </FormProvider>

              {formData && (
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Form Data:</h4>
                  <pre className="text-sm overflow-x-auto whitespace-pre-wrap">{JSON.stringify(formData, null, 2)}</pre>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Key Features
              </CardTitle>
              <CardDescription>Enterprise-grade features built for production applications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  <Zap className="w-3 h-3 mr-1" />
                  Performance
                </Badge>
                <div>
                  <p className="font-medium">Optimized Rendering</p>
                  <p className="text-sm text-muted-foreground">
                    Memoized components with React Hook Form integration for minimal re-renders.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  <Palette className="w-3 h-3 mr-1" />
                  Variants
                </Badge>
                <div>
                  <p className="font-medium">Multiple Design Systems</p>
                  <p className="text-sm text-muted-foreground">
                    Enterprise, minimal, and default variants with customizable tag styles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  <Shield className="w-3 h-3 mr-1" />
                  Validation
                </Badge>
                <div>
                  <p className="font-medium">Form Integration</p>
                  <p className="text-sm text-muted-foreground">
                    Built-in validation with React Hook Form and Zod schema support.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Statistics</CardTitle>
              <CardDescription>See how the component performs across different scenarios.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Scenarios</span>
                <Badge variant="outline">7</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Variant Types</span>
                <Badge variant="outline">3</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tag Variants</span>
                <Badge variant="outline">4</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Max Suggestions</span>
                <Badge variant="outline">12</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Code Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Code Examples</CardTitle>
            <CardDescription>Copy and paste these examples to get started quickly.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic Usage</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Configuration</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="mt-4">
                <CodeBlock code={basicUsageCode} title="Basic Implementation" language="tsx" />
              </TabsContent>
              <TabsContent value="advanced" className="mt-4">
                <CodeBlock code={advancedUsageCode} title="Advanced Configuration" language="tsx" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
