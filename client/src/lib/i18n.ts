// Système de traduction multilingue FR/EN
export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      projects: 'Réalisations',
      team: 'Équipe',
      contact: 'Contact',
    },
    hero: {
      title: 'Bienvenue sur notre plateforme',
      subtitle: 'Solutions innovantes pour votre entreprise',
      cta: 'Commencer',
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Découvrez nos solutions professionnelles',
      service1: {
        title: 'Consultation',
        description: 'Expertise et conseils stratégiques adaptés à vos besoins',
      },
      service2: {
        title: 'Développement',
        description: 'Solutions technologiques modernes et performantes',
      },
      service3: {
        title: 'Support',
        description: 'Assistance continue et support technique 24/7',
      },
    },
    projects: {
      title: 'Nos Réalisations',
      subtitle: 'Projets réussis et clients satisfaits',
      project1: {
        title: 'Projet Alpha',
        description: 'Plateforme e-commerce innovante',
      },
      project2: {
        title: 'Projet Beta',
        description: 'Application mobile multilingue',
      },
      project3: {
        title: 'Projet Gamma',
        description: 'Système de gestion intégré',
      },
    },
    team: {
      title: 'Notre Équipe',
      subtitle: 'Professionnels passionnés et expérimentés',
      member1: {
        name: 'Alice Martin',
        role: 'Directrice Générale',
      },
      member2: {
        name: 'Bob Dupont',
        role: 'Lead Développeur',
      },
      member3: {
        name: 'Claire Rousseau',
        role: 'Responsable Design',
      },
    },
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Nous serions ravis de vous entendre',
      email: 'Email',
      phone: 'Téléphone',
      message: 'Message',
      send: 'Envoyer',
      address: 'Adresse',
      addressValue: '123 Rue de Paris, 75000 Paris, France',
      emailValue: 'contact@example.com',
      phoneValue: '+33 1 23 45 67 89',
    },
    footer: {
      copyright: '© 2026 Tous droits réservés',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      social: 'Suivez-nous',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      team: 'Team',
      contact: 'Contact',
    },
    hero: {
      title: 'Welcome to our platform',
      subtitle: 'Innovative solutions for your business',
      cta: 'Get Started',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Discover our professional solutions',
      service1: {
        title: 'Consulting',
        description: 'Strategic expertise and advice tailored to your needs',
      },
      service2: {
        title: 'Development',
        description: 'Modern and high-performance technological solutions',
      },
      service3: {
        title: 'Support',
        description: 'Continuous assistance and 24/7 technical support',
      },
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Successful projects and satisfied clients',
      project1: {
        title: 'Project Alpha',
        description: 'Innovative e-commerce platform',
      },
      project2: {
        title: 'Project Beta',
        description: 'Multilingual mobile application',
      },
      project3: {
        title: 'Project Gamma',
        description: 'Integrated management system',
      },
    },
    team: {
      title: 'Our Team',
      subtitle: 'Passionate and experienced professionals',
      member1: {
        name: 'Alice Martin',
        role: 'Chief Executive Officer',
      },
      member2: {
        name: 'Bob Dupont',
        role: 'Lead Developer',
      },
      member3: {
        name: 'Claire Rousseau',
        role: 'Design Manager',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We would love to hear from you',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send',
      address: 'Address',
      addressValue: '123 Paris Street, 75000 Paris, France',
      emailValue: 'contact@example.com',
      phoneValue: '+33 1 23 45 67 89',
    },
    footer: {
      copyright: '© 2026 All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      social: 'Follow us',
    },
  },
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
