import { useTranslation } from '@/hooks/useTranslation';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663150253504/ep8aWy9tTvzpncwJXAqw6H/hero-projects-BC3a82TV3Ab6RDWnoN8YM4.webp',
      tags: ['E-commerce', 'React', 'Node.js'],
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663150253504/ep8aWy9tTvzpncwJXAqw6H/hero-team-2nfamjSq8EPAjCiSuY8jzt.webp',
      tags: ['Mobile', 'Flutter', 'Firebase'],
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663150253504/ep8aWy9tTvzpncwJXAqw6H/abstract-pattern-QV9Tq3W7z3j2qxNThzoJro.webp',
      tags: ['ERP', 'Python', 'PostgreSQL'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden h-48 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projets réalisés' },
              { number: '100+', label: 'Clients satisfaits' },
              { number: '15+', label: 'Années d\'expérience' },
              { number: '24/7', label: 'Support disponible' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
