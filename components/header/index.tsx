import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from "@/components/ui/button";

export default function Header() {
  const t = useTranslations('HomePage.header');

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href={t('brand.url')} className="flex items-center space-x-2">
            <span className="font-bold text-xl">{t('brand.title')}</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {t.raw('nav.items').map((item: any, index: number) => (
              <Link
                key={index}
                href={item.url}
                target={item.target}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex">
            {t('buttons.signIn')}
          </Button>
        </div>
      </div>
    </header>
  );
}