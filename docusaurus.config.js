// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          //editUrl: 'https://github.com/codatio/legal/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
                to: '/docs/intro',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
