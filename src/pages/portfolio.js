import * as React from 'react';
import Layout from '../components/layout';

const PortfolioPage = ({location}) => {
    return (
        <Layout pageTitle="Portfolio" canonicalUrl={location.href.replace(location.pathname, '')}>
            <h1>Portfolio</h1>
            <p>[Portfolio Page Content]</p>
        </Layout>
    );
};

export default PortfolioPage;
