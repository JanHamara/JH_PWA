import {Box, AspectRatio} from '@chakra-ui/layout';
import * as React from 'react';
import FadeIn from '../components/fade-in';
import Layout from '../components/layout';
import Contact from '../components/contact';
import {StaticImage} from 'gatsby-plugin-image';

const mockContactData = {
    heading: 'Have a project inquiry, or interested in working together?',
    subheading: "Send me a message and let's chat about it!",
    info: [
        {
            label: 'Email',
            value: 'jhamara@protonmail.com',
        },
        {
            label: 'Phone',
            value: '+34 602 558 175',
        },
    ],
};

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
                        <Contact info={mockContactData} social={true}></Contact>
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
                    right={{base: 8, xs: 10, md: 16}}
                    bottom="64px"
                    display={{base: 'none', lg: 'block'}}
                    zIndex={-1}
                >
                    <AspectRatio w="37px" h="288px" opacity={1} ratio={1 / 8}>
                        <StaticImage
                            src="../images/illustrations/contact-text.png"
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
