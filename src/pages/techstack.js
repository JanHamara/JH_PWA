import * as React from 'react';
import {Box, AspectRatio} from '@chakra-ui/react';
import Layout from '../components/layout';
import SpaSlideshow from '../components/spa-slideshow';
import ProgressSidebar from '../components/progress-sidebar';
import FadeIn from '../components/fade-in';
import techstack from '../mocks/pages/techstack';

const TechStackPage = () => {
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
                            techstack={true}
                            items={techstack}
                            onchange={(value) => {
                                onchange(value);
                            }}
                        ></SpaSlideshow>
                    </Box>
                </Layout>
            </FadeIn>

            <FadeIn>
                <Box
                    position="absolute"
                    w="2px"
                    h="45vh"
                    backgroundColor="#777"
                    right={{base: 8, xs: 10, md: 16}}
                    top={{base: '30vh'}}
                    display={{base: 'none', xl: 'block'}}
                >
                    <ProgressSidebar
                        current={current}
                        items={techstack.length}
                    ></ProgressSidebar>
                </Box>
            </FadeIn>
        </>
    );
};

export default TechStackPage;
