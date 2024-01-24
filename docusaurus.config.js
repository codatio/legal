// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Codat_legal',
  tagline: 'Build powerful applications with financial data',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://legal.codat.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codatio', // Usually your GitHub org/user name.
  projectName: 'legal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
      image: 'img/meta/social-card.jpg',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Codat_legal Logo',
          src: 'img/logo/logo.svg',
          srcDark: 'img/logo/logo_white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'legal',
            position: 'left',
            label: 'Documents',
          },
          {
            href: 'https://github.com/codatio/legal',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'FAQs',
                to: '/faqs',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Website',
                href: 'https://www.codat.io/',
              },
              {
                label: 'Docs',
                href: 'https://docs.codat.io/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/codatdata',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/codat-limited/?originalSubdomain=uk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/codatio/legal',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Codat`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
