import * as React from 'react';
import Navigation from './navigation';

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
        <div>
            <title>{pageTitle}</title>

            <Navigation items={navigationItems}></Navigation>

            <main>{children}</main>
        </div>
    );
};

export default Layout;
