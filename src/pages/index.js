import {AspectRatio, Box, Img, HStack, Text} from '@chakra-ui/react';
import * as React from 'react';
import Layout from '../components/layout';
// import landingImage from '../images/landing-hero-image.png';
import LandingScreen from '../components/landing-screen';
import {StaticImage} from 'gatsby-plugin-image';
import FadeIn from '../components/fade-in';

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <FadeIn duration={4}>
                <AspectRatio
                    w={{base: '80%', sm: '360px'}}
                    h='auto'
                    ratio={9 / 8}
                    position="absolute"
                    bottom="0"
                    left="50%"
                    transform="translate(-50%, 0)"
                    filter="contrast(1.05)"
                >
                    <StaticImage
                        src="../images/illustrations/landing-hero-image.webp"
                        aria-label="woman-holding-her-head"
                        alt="landing-hero-image"
                        placeholder="none"
                    ></StaticImage>
                </AspectRatio>
            </FadeIn>

            <LandingScreen subtitle="Web Developer | UI/UX Designer" />
        </Layout>
    );
};

export default IndexPage;
