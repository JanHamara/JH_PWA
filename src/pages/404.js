import * as React from 'react';
import {AspectRatio, Img, Text, VStack, Link} from '@chakra-ui/react';
import Layout from '../components/layout';
import landingImage from '../images/landing-hero-image.png';

// markups
const NotFoundPage = ({location}) => {
    return (
        <Layout pageTitle="404" canonicalUrl={location.href.replace(location.pathname, '')}>
            <title>Not found</title>

            <VStack w="full" spacing={16}>
                <Text
                    textAlign="center"
                    fontFamily="body"
                    textTransform="uppercase"
                    fontWeight="semibold"
                    letterSpacing="wider"
                    w="full"
                    maxW="full"
                    fontSize="md"
                >
                    Ooops, its seems like we got lost...
                </Text>

                <Link
                    href="/"
                    textAlign="center"
                    fontFamily="body"
                    textTransform="uppercase"
                    fontWeight="bold"
                    letterSpacing="wider"
                    fontSize="xs"
                >
                    Back to Safety
                </Link>
            </VStack>

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
        </Layout>
    );
};

export default NotFoundPage;
