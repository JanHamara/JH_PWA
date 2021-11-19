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
    absolute: any;
}

const Layout = ({pageTitle, children, absolute}: LayoutProps) => {
    const location = useLocation();
    const isLanding = location.pathname == '/';

    React.useEffect(() => {
        console.log(isLanding);
    }, []);

    return (
        <Box h="full">
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            >
                <meta charSet="utf-8" />
                <title>Jan Hamara | Personal Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <FadeIn duration={1.5} delay={300}>
                <Navigation items={navigationItems}></Navigation>
            </FadeIn>

            <main>
                <SiteHeader variant={isLanding ? 'default' : 'subpage'}></SiteHeader>

                <Box layerStyle="constraintMax">{children}</Box>
            </main>
        </Box>
    );
};

export default Layout;
