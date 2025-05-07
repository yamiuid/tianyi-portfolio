import Hero from "@/components/hero"
import About from "@/components/about"
import PortfolioPreview from "@/components/portfolio-preview"
import Skills from "@/components/skills"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <About />
      <Skills />
      <PortfolioPreview />
      <ContactCTA />
    </div>
  )
}
