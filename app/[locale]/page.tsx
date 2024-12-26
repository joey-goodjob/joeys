import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background">
      {/* Background gradient and pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative">
        <Hero />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent" />
        <Features />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent" />
        <Testimonials />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent" />
        <FAQ />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent" />
        <CTA />
      </div>
    </div>
  );
}