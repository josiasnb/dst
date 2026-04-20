import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: '🎯',
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      details: 'Nous analysons votre situation et proposons des stratégies adaptées à vos objectifs.',
    },
    {
      id: 2,
      icon: '💻',
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      details: 'Développement web, mobile et backend avec les dernières technologies.',
    },
    {
      id: 3,
      icon: '🛠️',
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      details: 'Maintenance, mises à jour et support technique continu.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-8 border border-gray-200 rounded-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  {service.details}
                </p>
                <Button variant="outline" className="w-full">
                  En savoir plus
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Notre Processus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Découverte', desc: 'Compréhension de vos besoins' },
              { step: '02', title: 'Stratégie', desc: 'Planification et proposition' },
              { step: '03', title: 'Exécution', desc: 'Mise en œuvre du projet' },
              { step: '04', title: 'Suivi', desc: 'Support et optimisation' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Intéressé par nos services ?
          </h2>
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
