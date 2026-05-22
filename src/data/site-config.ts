import avatar from '../assets/images/Data_science_analytics.jpg';
import hero from '../assets/images/Data_science_analytics.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://PaoAlbanData.github.io',
    avatar: {
        src: avatar,
        alt: 'Paola Albán'
    },
    title: 'Paola Alban | Data Analytics & Business Intelligence',
    subtitle: 'Portafolio de proyectos de Data Analytics, Business Intelligence y Machine Learning aplicado.',
    description: 'Portafolio de proyectos de Data Analytics, Business Intelligence y Machine Learning aplicado.',
   image: {
    src: '/Data_science_analytics.jpg',
    alt: 'Paola Albán - Data Analytics and Business Intelligence Portfolio'
},
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/paola-alban-data/'
        },
    
        {
            text: 'Email',
            href: 'mailto:paola.alban.data@gmail.com/'
        }
    ],
    hero: {
        title: 'Transformando datos en información útil para la toma de decisiones',
        text: "Soy Paola Albán, Ingeniera Industrial con experiencia en análisis de información, gestión de procesos, reporting y toma de decisiones basada en datos. He finalizado un Máster en Data Science y actualmente curso un MBA en Data Analytics, consolidando una evolución profesional orientada hacia Data Analytics, Business Intelligence y Machine Learning aplicado. Este portafolio reúne proyectos desarrollados con Python, SQL, Power BI y técnicas de Machine Learning, enfocados en transformar datos en información útil para el análisis, la visualización, la predicción y la mejora de procesos.",
        image: {
            src: hero,
            alt: 'Paola Alban, portfolio de Data Analytics y Business Intelligence'
        },
        actions: [
            {
                text: 'Contactar',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribete al portafolio',
        text: 'Recibe novedades sobre proyectos de Data Analytics, Business Intelligence y Machine Learning.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
