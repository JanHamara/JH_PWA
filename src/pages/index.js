import {AspectRatio, Box, Img, HStack, Text} from '@chakra-ui/react';
import * as React from 'react';
import Layout from '../components/layout';
// import landingImage from '../images/landing-hero-image.png';
import LandingScreen from '../components/landing-screen';
import {StaticImage} from 'gatsby-plugin-image';

// const line = (
//     <HStack
//         alignItems="center"
//         justifyContent="center"
//         position="absolute"
//         left={0}
//         bottom="170px"
//         spacing={2}
//         opacity={0.6}
//     >
//         <Box h=".5px" w="8vw" background="white"></Box>
//         <Text textStyle="base" fontSize="2xs">
//             PROUDLY SERVED CLIENTS
//         </Text>
//     </HStack>
// );

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
                filter="contrast(1.05)"
            >
                <StaticImage
                    src="../images/landing-hero-image.webp"
                    aria-label="woman-holding-her-head"
                    alt="landing-hero-image"
                ></StaticImage>
            </AspectRatio>

            <LandingScreen subtitle="Web Developer | UI/UX Designer" />
        </Layout>
    );
};

export default IndexPage;
