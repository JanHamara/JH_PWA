import {AspectRatio, Box, Center, Img} from '@chakra-ui/react';
import * as React from 'react';
import Navigation from './navigation';
import SiteHeader from './site-header';

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
}

const Layout = ({pageTitle, children}: LayoutProps) => {
    return (
        <Box h="full">
            {/* <title>{pageTitle}</title> */}

            <Navigation items={navigationItems}></Navigation>

            <main>
                <SiteHeader></SiteHeader>

                <Box layerStyle="constraintMax">{children}</Box>
            </main>
        </Box>
    );
};

export default Layout;
