import * as React from 'react';
import Layout from '../components/layout';

const ContactPage = ({location}) => {
    return (
        <Layout pageTitle="Contact" canonicalUrl={location.href.replace(location.pathname, '')}>
            <h1>Contact</h1>
            <p>[Contact Page Content]</p>
        </Layout>
    );
};

export default ContactPage;
