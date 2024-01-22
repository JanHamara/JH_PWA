import * as React from 'react';
import {AspectRatio, Box, Center, Img} from '@chakra-ui/react';
import {StaticImage} from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SpaSlideshow from '../components/spa-slideshow';
import FadeIn from '../components/fade-in';
import awards from '../mocks/pages/awards';

const AwardsPage = () => {
    return (
        <>
            <Layout pageTitle="Awards">
                <Box
                    h={{base: '75vh', md: '70vh'}}
                    display={{base: 'flex', md: 'block'}}
                    maxW={{base: '95vw', lg: '880px', xl: '1120px', xxl: 'container.xl'}}
                    mx="auto"
                    overflow="hidden"
                >
                    <SpaSlideshow items={awards}></SpaSlideshow>
                </Box>
            </Layout>

            <FadeIn duration={3}>
                <Box position="absolute" left={0} top={0}>
                    <AspectRatio
                        w={{base: '30vw', md: '20vw', xl: '17vw'}}
                        maxW="330px"
                        opacity={{base: 0.1, md: 0.7}}
                        ratio={1 / 1}
                    >
                        <StaticImage
                            src="../images/illustrations/awards.png"
                            alt="rose-image"
                            aria-label="image-of-rose"
                            placeholder="none"
                            loading="eager"
                        ></StaticImage>
                    </AspectRatio>
                </Box>

                <Box position="absolute" right={0} bottom={0}>
                    <AspectRatio
                        w={{base: '30vw', md: '20vw', xl: '17vw'}}
                        maxW="330px"
                        opacity={{base: 0.3, md: 0.7}}
                        ratio={0.9 / 1}
                    >
                        <StaticImage
                            src="../images/illustrations/awards_2.png"
                            alt="rose-image"
                            aria-label="image-of-rose"
                            placeholder="none"
                            loading="eager"
                        ></StaticImage>
                    </AspectRatio>
                </Box>

                <Box
                    position="absolute"
                    left={{base: 8, xs: 10, md: 12}}
                    bottom="64px"
                    display={{base: 'none', xl: 'block'}}
                    zIndex={-1}
                >
                    <AspectRatio w="26px" h="190px" opacity={1} ratio={1 / 8}>
                        <StaticImage
                            src="../images/categories/awards.png"
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

export default AwardsPage;
