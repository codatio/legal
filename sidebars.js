/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  legal: [
    'faqs',
    {
      type: 'category',
      label: 'Codat Products Terms and Conditions',
      items: [
        'product/terms-and-conditions',
        'product/msa-standard',
        {
          type: 'category',
          label: 'Earlier versions',
          items: [
            'product/deprecated/22july21',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Processing',
      items: [
        'data/intro',
      ],
    },
    {
      type: 'category',
      label: 'Privacy',
      items: [
        'privacy/intro',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/intro',
      ],
    },
    {
      type: 'category',
      label: 'Addendum',
      items: [
        'addendum/intro',
      ],
    },
  ],
};

module.exports = sidebars;
