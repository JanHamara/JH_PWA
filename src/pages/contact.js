import {Box, AspectRatio} from '@chakra-ui/layout';
import * as React from 'react';
import FadeIn from '../components/fade-in';
import Layout from '../components/layout';
import Contact from '../components/contact';
import {StaticImage} from 'gatsby-plugin-image';
import contact from '../mocks/pages/contact';

const ContactPage = () => {
    return (
        <>
            <FadeIn>
                <Layout pageTitle="About">
                    <Box
                        h={{base: '75vh', md: '70vh'}}
                        maxW={{base: '88vw', lg: '880px', xl: '1120px', xxl: 'container.xl'}}
                        display={{base: 'flex', md: 'block'}}
                        alignItems={{base: 'center', md: 'flex-start'}}
                        mx="auto"
                        overflow="hidden"
                        zIndex={3}
                    >
                        <Contact info={contact} social={true}></Contact>
                    </Box>
                </Layout>
            </FadeIn>

            <FadeIn duration={3}>
                <Box
                    position="absolute"
                    left={0}
                    top="50%"
                    transform="translate(-10%, -50%)"
                    zIndex={-3}
                >
                    <AspectRatio
                        w={{base: '80vw', lg: '50vw', xl: '25vw'}}
                        opacity={{base: 0.1, xxl: 0.7}}
                        filter="contrast(1.05)"
                        transition="width 1s, opacity 1s"
                        ratio={7 / 10}
                    >
                        <StaticImage
                            src="../images/illustrations/contact.png"
                            alt="contact-image"
                            aria-label="image-of-hands"
                            placeholder="none"
                            loading="eager"
                        ></StaticImage>
                    </AspectRatio>
                </Box>

                <Box
                    position="absolute"
                    right={{base: 8, xs: 10, md: 12}}
                    bottom="64px"
                    display={{base: 'none', lg: 'block'}}
                    zIndex={-1}
                >
                    <AspectRatio w="30px" h="240px" opacity={1} ratio={1 / 8}>
                        <StaticImage
                            src="../images/categories/contact.png"
                            alt="contact-page-label-image"
                            aria-label="contact-text-image"
                            placeholder="none"
                            loading="eager"
                        ></StaticImage>
                    </AspectRatio>
                </Box>
            </FadeIn>
        </>
    );
};

export default ContactPage;
