import * as React from 'react';
import Layout from '../../components/layout';
import mockData from '../../mocks/pages/utmb';
import Project from '../../components/project';

const UtmbPage = () => {
    return (
        <Layout pageTitle="UTMB World Series" portfolio={true}>
            <Project data={mockData}></Project>
        </Layout>
    );
};

export default UtmbPage;
