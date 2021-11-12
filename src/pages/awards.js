import * as React from 'react';
import Layout from '../components/layout';

const AwardsPage = ({location}) => {
    return (
        <Layout pageTitle="Awards" canonicalUrl={location.href.replace(location.pathname, '')}>
            <h1>Awards</h1>
            <p>[Awards Page Content]</p>
        </Layout>
    );
};

export default AwardsPage;
