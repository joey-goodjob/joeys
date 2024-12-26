import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Features() {
  const t = useTranslations('HomePage.features');

  return (
    <section id="features" className="container space-y-12 py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          {t('title')}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t('description')}
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {t.raw('items').map((feature: any, index: number) => (
          <Card key={index} className="relative overflow-hidden border border-purple-100/10 bg-gradient-to-b from-purple-50/5 to-transparent backdrop-blur-xl">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            
            <CardHeader className="pb-4">
              <Image
                src={`/imgs/icons/${index + 1}.svg`}
                width={40}
                height={40}
                alt={feature.title}
                className="mb-2"
              />
              <CardTitle className="font-semibold text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}