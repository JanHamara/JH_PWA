import {AspectRatio, Center, Img, Text, VStack} from '@chakra-ui/react';
import * as React from 'react';
import Layout from '../components/layout';
import landingImage from '../images/landing-hero-image.png';
import landingHeading from '../images/landing-heading.png';
import LandingScreen from '../components/landing-screen';

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <AspectRatio
                w={{base: '270px', mini: '360px', md: '450px'}}
                h={{base: '240px', mini: '320px', md: '400px'}}
                ratio={9 / 8}
                position="absolute"
                top="100vh"
                left="50%"
                transform="translate(-50%, -100%)"
            >
                <Img
                    src={landingImage}
                    aria-label="woman-holding-her-head"
                    alt="landing-hero-image"
                ></Img>
            </AspectRatio>

            <LandingScreen subtitle="Web Developer | UI/UX Designer" />
        </Layout>
    );
};

export default IndexPage;
