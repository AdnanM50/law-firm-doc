

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lawstick',
  tagline: 'Lawstick is a platform that allows you to manage legal agreements in a simple and secure way.',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',

  baseUrl: '/',

  
  organizationName: 'facebook', 
  projectName: 'Lawstick',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
      
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Lawstick',
        logo: {
          alt: 'Lawstick',
          src: 'img/favicon.ico',
        },
        items: [
        ],
      },
    
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;