import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('HomePage.footer');

  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="font-bold text-xl">
              {t('brand.title')}
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('brand.description')}
            </p>
          </div>

          {/* Products Section */}
          <div className="grid gap-4">
            <h3 className="text-sm font-medium">{t('nav.products.title')}</h3>
            <ul className="grid gap-2 text-sm">
              {t.raw('nav.products.items').map((item: any, index: number) => (
                <li key={index}>
                  <Link 
                    href={item.url} 
                    className="text-muted-foreground hover:text-primary"
                    target={item.target}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="grid gap-4">
            <h3 className="text-sm font-medium">{t('nav.services.title')}</h3>
            <ul className="grid gap-2 text-sm">
              {t.raw('nav.services.items').map((item: any, index: number) => (
                <li key={index}>
                  <Link 
                    href={item.url}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="grid gap-4">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="grid gap-2 text-sm">
              {t.raw('social.items').map((item: any, index: number) => (
                <li key={index}>
                  <Link 
                    href={item.url}
                    className="text-muted-foreground hover:text-primary"
                    target={item.target}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}