import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const t = useTranslations('HomePage.faq');

  return (
    <section id="faq" className="container space-y-12 py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          {t('title')}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t('description')}
        </p>
      </div>

      <div className="mx-auto max-w-[58rem] relative">
        <div 
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          aria-hidden="true"
        />
        
        <Accordion type="single" collapsible className="w-full">
          {t.raw('items').map((faq: any, index: number) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-purple-100/10 bg-gradient-to-b from-purple-50/5 to-transparent backdrop-blur-xl mb-4 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="p-6 text-base font-semibold hover:text-purple-500">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}