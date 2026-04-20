import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Data StoryTellers Consulting
          </a>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('nav.home')}
            </a>
          </Link>
          <Link href="/services">
            <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('nav.services')}
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('nav.projects')}
            </a>
          </Link>
          <Link href="/team">
            <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('nav.team')}
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('nav.contact')}
            </a>
          </Link>
        </nav>

        {/* Language Selector */}
        <div className="flex items-center gap-3">
          <Button
            variant={language === 'fr' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('fr')}
            className="w-10 h-10 p-0"
          >
            FR
          </Button>
          <Button
            variant={language === 'en' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('en')}
            className="w-10 h-10 p-0"
          >
            EN
          </Button>
        </div>
      </div>
    </header>
  );
}
