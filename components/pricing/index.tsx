import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const FEATURES_COUNT = {
  0: 3, // Starter plan has 3 features
  1: 4  // Pro plan has 4 features
};

export default function Pricing() {
  const t = useTranslations('HomePage.pricing');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t('title')}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t('description')}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 pt-12">
          {[0, 1].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{t(`plans.${i}.name`)}</CardTitle>
                <div className="text-3xl font-bold">{t(`plans.${i}.price`)}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t(`plans.${i}.description`)}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {Array.from({ length: FEATURES_COUNT[i as keyof typeof FEATURES_COUNT] }).map((_, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {t(`plans.${i}.features.${j}`)}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">
                  {t('title')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}