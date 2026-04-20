import { useTranslation } from '@/hooks/useTranslation';

export default function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t('team.member1.name'),
      role: t('team.member1.role'),
      bio: 'Directrice visionnaire avec 15 ans d\'expérience en gestion d\'entreprise.',
      image: '👩‍💼',
    },
    {
      id: 2,
      name: t('team.member2.name'),
      role: t('team.member2.role'),
      bio: 'Expert en développement full-stack avec passion pour les technologies modernes.',
      image: '👨‍💻',
    },
    {
      id: 3,
      name: t('team.member3.name'),
      role: t('team.member3.role'),
      bio: 'Designer créatif spécialisée en UX/UI et branding digital.',
      image: '👩‍🎨',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('team.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('team.subtitle')}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group text-center hover:transform hover:scale-105 transition-transform duration-300"
              >
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center text-6xl shadow-lg group-hover:shadow-xl transition-shadow">
                  {member.image}
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    tw
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    gh
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Nous cherchons constamment de nouvelles solutions créatives.',
              },
              {
                title: 'Excellence',
                description: 'Qualité et perfection dans chaque projet que nous réalisons.',
              },
              {
                title: 'Collaboration',
                description: 'Travail en équipe et partenariat avec nos clients.',
              },
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Rejoignez Notre Équipe
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nous recherchons des talents passionnés pour nous aider à créer des solutions innovantes.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Voir les offres d'emploi
          </button>
        </div>
      </section>
    </div>
  );
}
