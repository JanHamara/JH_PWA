// gatsby-config.js

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules'
);

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'Jan Hamara Personal PWA',
    },
    plugins: [
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                /**
                 * @property {boolean} [resetCSS=true]
                 * if false, this plugin will not use `<CSSReset />
                 */
                resetCSS: true,
                /**
                 * @property {boolean} [isUsingColorMode=true]
                 * if false, this plugin will not use <ColorModeProvider />
                 */
                isUsingColorMode: true,
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jan Hamara | Personal Portfolio`,
                short_name: `Jan Hamara`,
                start_url: `/`,
                background_color: `#10100F`,
                theme_color: `#10100F`,
                display: `standalone`,
                icon: 'src/images/icon.png',
                icons: [],
            },
        },
        `gatsby-plugin-offline`,
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'eslint-plugin-gatsby',
            options: {
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                failOnError: false,
            },
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                includeInDevelopment: true,
                id: 2732286,
                sv: 6,
            },
        },
    ],
};
