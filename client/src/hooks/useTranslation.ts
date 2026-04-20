import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';

export function useTranslation() {
  const { language } = useLanguage();

  return {
    t: (key: string) => getTranslation(language, key),
    lang: language,
  };
}
