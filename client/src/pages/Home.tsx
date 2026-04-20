import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4">
              <Link href="/services">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  {t('hero.cta')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 text-lg">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663150253504/ep8aWy9tTvzpncwJXAqw6H/hero-services-advD2QAFug3vvfw5tZLZLa.webp"
              alt="Hero"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`services.service${i}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`services.service${i}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              {t('nav.contact')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
