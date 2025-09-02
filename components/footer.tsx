import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Heart, Tag } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Tag className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold">Tags Input Field</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  v1.0.0
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional React component for enterprise applications.
            </p>
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Documentation</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="#getting-started"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Getting Started
              </Link>
              <Link
                href="#demo"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Live Demo
              </Link>
              <Link
                href="#api"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                API Reference
              </Link>
              <Link
                href="#examples"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Examples
              </Link>
            </nav>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold">Community</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="https://github.com/muhammadaqib86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Open source React component library.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Tags Input Field. Made with{" "}
              <Heart className="inline h-3 w-3 text-red-500" /> by
              <Link
                href="https://github.com/muhammadaqib86"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Muhammad Aqib
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
