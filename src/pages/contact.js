import {Box} from '@chakra-ui/layout';
import * as React from 'react';
import FadeIn from '../components/fade-in';
import Layout from '../components/layout';

const ContactPage = () => {
    return (
        <>
            <FadeIn>
                <Layout pageTitle="About">
                    <Box
                        h="70vh"
                        maxW={{base: '88vw', lg: '880px', xl: '1120px', xxl: 'container.xl'}}
                        mx="auto"
                        overflow="hidden"
                        zIndex={3}
                    >
                        Hello world
                    </Box>
                </Layout>
            </FadeIn>
        </>
    );
};

export default ContactPage;
