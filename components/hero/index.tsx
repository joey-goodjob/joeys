import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations('HomePage.hero');

  return (
    <div className="relative isolate">
      {/* Background decorations */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                {t('title')}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('description')}
              </p>
              <div className="mt-10 flex gap-x-6 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
                  {t('buttons.start')}
                </Button>
                <Button variant="outline" size="lg">
                  {t('buttons.vote')}
                </Button>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex-1 relative">
              <Image
                src="/imgs/hero.png"
                width={600}
                height={600}
                alt="Hero"
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}