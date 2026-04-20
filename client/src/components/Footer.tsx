import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Brand</h3>
            <p className="text-gray-400 text-sm">
              Solutions innovantes pour votre entreprise
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.home')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services">
                  <a className="hover:text-blue-400 transition-colors">
                    {t('nav.services')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="hover:text-blue-400 transition-colors">
                    {t('nav.projects')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="hover:text-blue-400 transition-colors">
                    {t('nav.team')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.social')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{t('contact.emailValue')}</li>
              <li>{t('contact.phoneValue')}</li>
              <li className="text-xs">{t('contact.addressValue')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
