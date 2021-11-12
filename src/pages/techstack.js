import * as React from 'react';
import Layout from '../components/layout';

const TechStackPage = ({location}) => {
    return (
        <Layout pageTitle="Tech Stack" canonicalUrl={location.href.replace(location.pathname, '')}>
            <h1>TechStack</h1>
            <p>[TechStackPage Page Content]</p>
        </Layout>
    );
};

export default TechStackPage;
