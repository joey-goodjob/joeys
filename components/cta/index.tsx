import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

export default function CTA() {
  const t = useTranslations('HomePage.cta');

  return (
    <section id="cta" className="container space-y-8 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[58rem] relative rounded-3xl overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-xl" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative px-4 py-16">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              {t('title')}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t('description')}
            </p>
            <Button 
              size="lg" 
              className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
            >
              {t('button')}
            </Button>
          </div>
        </div>

        {/* Border gradients */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
    </section>
  );
}