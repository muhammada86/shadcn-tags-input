import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Zap, Shield, Palette, Code } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Production Ready
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Professional Tags Input
            <span className="text-primary block">Component Library</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Enterprise-grade React component with advanced form validation,
            smooth animations, and comprehensive TypeScript support. Built for
            scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="#getting-started">
                Try Live Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Type Safe</h3>
              <p className="text-sm text-muted-foreground">
                Full TypeScript support with comprehensive type definitions
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Performant</h3>
              <p className="text-sm text-muted-foreground">
                Optimized with React.memo and efficient re-rendering
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Customizable</h3>
              <p className="text-sm text-muted-foreground">
                Multiple variants and extensive styling options
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Developer DX</h3>
              <p className="text-sm text-muted-foreground">
                Intuitive API with comprehensive documentation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Start */}
        {/* <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Quick Start</h2>
              <p className="text-muted-foreground">Get up and running in seconds</p>
            </div>

            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-muted-foreground">#</span>
                <span>Install the component</span>
              </div>
              <code className="text-primary">npm install @your-org/tags-input-field</code>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}
