import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const t = useTranslations('HomePage.testimonials');

  return (
    <section id="testimonials" className="container space-y-12 py-16 md:py-20 lg:py-24 relative">
      {/* Background decorations */}
      <div 
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          {t('title')}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t('description')}
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[64rem]">
        {t.raw('items').map((testimonial: any, index: number) => (
          <Card key={index} className="relative overflow-hidden border border-purple-100/10 bg-gradient-to-b from-purple-50/5 to-transparent backdrop-blur-xl">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={`/imgs/user/${index + 1}.png`} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-base font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.description}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}