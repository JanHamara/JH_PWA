import * as React from 'react';
import {AspectRatio, Box, Img} from '@chakra-ui/react';
import Layout from '../components/layout';
import SpaSlideshow from '../components/spa-slideshow';
import ProgressSidebar from '../components/progress-sidebar';
import FadeIn from '../components/fade-in';

// Static Assets
import profilePhoto from '../images/illustrations/about.jpg';

const AboutPage = () => {
    const [current, setCurrent] = React.useState(0);

    const onchange = (value) => {
        setCurrent(value);
    };

    const mockAboutData = [
        {
            id: 0,
            content:
                'Hello there, my name is <strong>Jan</strong>. <br/><br/> I am a <strong>developer</strong> and <strong>designer</strong> with a passion for creating beautiful and purposeful <strong>user experiences for web and beyond</strong>, with strong focus on <strong>usability</strong>, <strong>performance</strong> and <strong>accessibility</strong>. <br/><br/> With over <strong>7 years of experience</strong> working for various global <strong>companies</strong>, <strong>agencies</strong>, <strong>start-ups</strong>, as well as on  <strong>personal projects</strong>, I have developed invaluable experience within areas of <strong>development</strong>, <strong>UI / UX design</strong> and <strong>project management</strong>',
            label: 'Education',
        },
        {
            id: 1,
            content:
                'I graduated from <strong>MA Digital Media & Information Studies</strong> <br/> degree at <strong>the University of Glasgow</strong>. <br/><br/> During my studies, I have completed multiple internships, most important one at <strong>J.P.Morgan Chase & Co.</strong> at their <strong>Technology Centre of Excellence</strong> in Glasgow. <br/><br/>Participation at many <strong>hackathons</strong> over the world during my studies has allowed me to learn from the very best developers and companies in the tech field, and has led to some notable achievements and <a href="https://www.instagram.com/jan_hamara/" class="inlineLink" target="_blank" style="color: #d1d1d1;"><strong>awards</strong></a>',
            label: 'Interests',
        },
        {
            id: 2,
            content:
                'I am also an <strong>avid traveler</strong>, <strong>photographer</strong> and <strong>film maker</strong> with an active travel blog on <a href="https://www.instagram.com/jan_hamara/" class="inlineLink" target="_blank" style="color: #d1d1d1">Instagram</a><br/><br/>Years of experience in <strong>hospitality and tourism</strong> have gained me valuable soft skills, like <strong>time management</strong>, <strong>adaptability</strong>, as well as <strong>organisational</strong> and <strong>communicational skills</strong>, so priceless during non-technical communication with clients.<br/><br/>I am also an enthusiast of <strong>VR technology</strong> and an active <strong>cryptocurrency investor</strong>',
            label: 'Technology Stack',
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
                            about={true}
                            items={mockAboutData}
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
                        items={mockAboutData.length}
                    ></ProgressSidebar>
                </Box>
            </FadeIn>
        </>
    );
};

export default AboutPage;
