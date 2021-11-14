import * as React from 'react';
import Layout from '../components/layout';

// markups
const NotFoundPage = () => {
    return (
        <Layout pageTitle="404">
            <title>Not found</title>
            Ooops, its seems like we got lost...
        </Layout>
    );
};

export default NotFoundPage;
