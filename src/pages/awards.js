import * as React from 'react';
import {AspectRatio, Box, Center, Img} from '@chakra-ui/react';
import {StaticImage} from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SpaSlideshow from '../components/spa-slideshow';
import FadeIn from '../components/fade-in';

const AwardsPage = () => {
    const mockAwardsData = [
        {
            id: 0,
            title: '<strong>2nd place</strong> at <strong>Cisco University Hackathon 2016</strong>',
            roles: ['Project Managment', 'UI / UX Design'],
            content:
                'Our start-up pitch for application <strong>Notify</strong> has beaten projects from Universities of Oxford and Cambridge, and was awarded a pitch for investor panel at <strong>start-up incubator IDEALondon</strong>',
            href: 'https://gblogs.cisco.com/uki/university-challenge-cisco-style/',
        },
        {
            id: 1,
            title: '<strong>1st place</strong> at <strong>J.P.Morgan Code For Good 2017</strong>',
            roles: ['UI Design', 'Front-end Development'],
            content:
                'First place in our category at one of <strong>the biggest hackathons in the United Kingdom</strong>, focused around the development of innovative real-world technology solutions for non-profit charity organisations, which has also earned me an internship at this global company',
            href: 'https://www.youtube.com/watch?v=o6zdH2O14jY&ab_channel=jpmorgan',
        },
        {
            id: 2,
            title: '<strong>Participant</strong> at <strong>Hack The North 2017</strong>',
            roles: ['UI Design', 'Front-end Development'],
            content:
                'Selected out of <strong>10 000+ applicants from over the world</strong> to participate at highly prestigious and biggest hackathon in <strong>Canada</strong>, focused on development and implementation of revolutionary blockchain-based technologies into cutting-edge application of the future',
            href: 'https://www.youtube.com/watch?v=nsHLq25t7oc&ab_channel=HacktheNorth',
        },
    ];

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
                    <SpaSlideshow items={mockAwardsData}></SpaSlideshow>
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
