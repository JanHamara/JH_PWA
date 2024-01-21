import {AspectRatio, Box, Center, Img} from '@chakra-ui/react';
import * as React from 'react';
import Navigation from './navigation';
import SiteHeader from './site-header';
import {useLocation} from '@reach/router';
import FadeIn from './fade-in';
import {Helmet} from 'react-helmet';

const navigationItems = [
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Tech Stack',
        href: '/techstack',
    },
    {
        label: 'Portfolio',
        href: '/portfolio',
    },
    {
        label: 'Awards',
        href: '/awards',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];

interface LayoutProps {
    pageTitle: string;
    children: any;
    portfolio?: boolean;
}

const Layout = ({portfolio = false, pageTitle = 'Personal Portfolio', children}: LayoutProps) => {
    const location = useLocation();
    const isLanding = location.pathname == '/';

    return (
        <Box h="full">
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            >
                <meta charSet="utf-8" />
                <meta name="robots" content="all" />
                <meta
                    name="description"
                    content="Personal portfolio website of Jan Hamara, a front-end developer and UI/UX designer based in Barcelona, Spain."
                />
                <title>Jan Hamara | {pageTitle}</title>
                <link rel="stylesheet" href="https://use.typekit.net/gza2ntw.css"></link>
                <link rel="canonical" href="https://jhpwa.gatsbyjs.io/" />
            </Helmet>

            <FadeIn duration={1.5} delay={300}>
                <Navigation items={navigationItems}></Navigation>
            </FadeIn>

            <main>
                <SiteHeader variant={isLanding ? 'default' : 'subpage'}></SiteHeader>

                <Box layerStyle={portfolio ? 'constraintProjectMax' : 'constraintMax'}>
                    {children}
                </Box>
            </main>
        </Box>
    );
};

export default Layout;
