import * as React from 'react';
import {Box, AspectRatio} from '@chakra-ui/react';
import Layout from '../components/layout';
import SpaSlideshow from '../components/spa-slideshow';
import ProgressSidebar from '../components/progress-sidebar';
import FadeIn from '../components/fade-in';
import ProgressCounter from '../components/progress-counter';

const TechStackPage = () => {
    const [current, setCurrent] = React.useState(0);

    const onchange = (value) => {
        setCurrent(value);
    };

    const mockTechData = [
        {
            id: 0,
            title: '<strong>Front-end</strong> <span class="sep">/</span> <strong>Web Development</strong>',
            content: '',
            stack: 'frontend',
            label: 'Server-side / CRM / CMS',
        },
        {
            id: 1,
            title: '<strong>Server-side <span class="sep">/</span> CRM <span class="sep">/</span> CMS</strong>',
            content: '',
            stack: 'serverside',
            label: 'UI / UX / Graphic Design',
        },
        {
            id: 2,
            title: '<strong>UI <span class="sep">/</span> UX <span class="sep">/</span> Graphic Design</strong>',
            content: '',
            stack: 'design',
            label: 'Portfolio',
        },
    ];

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
                            items={mockTechData}
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
                        items={mockTechData.length}
                    ></ProgressSidebar>
                </Box>

                <Box
                    position="absolute"
                    right={{base: 8, xs: 10, md: 16}}
                    bottom={{base: '32px', xs: '40px', md: '64px'}}
                    display={{base: 'none', lg: 'block'}}
                >
                    <ProgressCounter current={current} items={3}></ProgressCounter>
                </Box>
            </FadeIn>
        </>
    );
};

export default TechStackPage;
