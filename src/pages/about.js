import * as React from 'react';
import {AspectRatio, Box, Img} from '@chakra-ui/react';
import Layout from '../components/layout';
import SpaSlideshow from '../components/spa-slideshow';
import ProgressSidebar from '../components/progress-sidebar';
import FadeIn from '../components/fade-in';

// Static Assets
import profilePhoto from '../images/illustrations/about.jpg';
import about from '../mocks/pages/about';

const AboutPage = () => {
    const [current, setCurrent] = React.useState(0);

    const onchange = (value) => {
        setCurrent(value);
    };

    return (
        <>
            <FadeIn>
                <Layout pageTitle="About">
                    <Box
                        h={{base: 'auto', md: '70vh'}}
                        maxW={{base: '88vw', lg: '880px', xl: '1120px', xxl: 'container.xl'}}
                        mx="auto"
                        overflow="hidden"
                        zIndex={3}
                    >
                        <SpaSlideshow
                            about={true}
                            items={about}
                            onchange={(value) => {
                                onchange(value);
                            }}
                        ></SpaSlideshow>
                    </Box>
                </Layout>
            </FadeIn>

            <FadeIn>
                <AspectRatio
                    display={{base: 'block', md: 'block'}}
                    h="100vh"
                    w={{base: '180px', md: '250px'}}
                    position="absolute"
                    ratio={3 / 8}
                    top={0}
                    left={0}
                    filter="contrast(1.05)"
                    opacity={{base: 0.1, xl: 0.4, xxl: 1}}
                    transition="opacity 1s"
                    zIndex={-1}
                >
                    <Img src={profilePhoto} aria-label="profile-photo" alt="my-profile-photo"></Img>
                </AspectRatio>
            </FadeIn>

            <FadeIn>
                <Box
                    position="absolute"
                    w="2px"
                    h="45vh"
                    backgroundColor="#777"
                    right={{base: 8, xs: 10, md: 16}}
                    top={{base: '30vh'}}
                    display={{base: 'none', lg: 'block'}}
                >
                    <ProgressSidebar
                        current={current}
                        items={about.length}
                    ></ProgressSidebar>
                </Box>
            </FadeIn>
        </>
    );
};

export default AboutPage;
