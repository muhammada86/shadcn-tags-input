"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  className?: string
}

export function CodeBlock({ code, language = "tsx", title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative rounded-lg border bg-muted/50", className)}>
      {title && (
        <div className="flex items-center justify-between border-b px-4 py-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{title}</span>
            <Badge variant="outline" className="text-xs">
              {language}
            </Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-6 w-6 p-0">
            {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
          </Button>
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className="text-sm font-mono">{code}</code>
      </pre>
      {!title && (
        <Button variant="ghost" size="sm" onClick={copyToClipboard} className="absolute right-2 top-2 h-6 w-6 p-0">
          {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
        </Button>
      )}
    </div>
  )
}
