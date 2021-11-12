import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = ({location}) => {
    return (
        <Layout pageTitle="About" canonicalUrl={location.href.replace(location.pathname, '')}>
            <h1>About Me</h1>
            <p>[About Page Content]</p>
        </Layout>
    );
};

export default AboutPage;
