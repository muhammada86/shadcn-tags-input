import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { InstallationSection } from "@/components/installation-section"
import { DemoSection } from "@/components/demo-section"
import { ApiSection } from "@/components/api-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InstallationSection />
        <DemoSection />
        <ApiSection />
      </main>
      <Footer />
    </div>
  )
}
