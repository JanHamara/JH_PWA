import * as React from 'react';
import Layout from '../components/layout';
import Project from '../components/project';
import FadeIn from '../components/fade-in';
import {AspectRatio, Box} from '@chakra-ui/layout';
import {StaticImage} from 'gatsby-plugin-image';

const ProjectPage = ({pageContext: {page}}) => {
    return (
        <>
            <Layout pageTitle={page.title} portfolio={true}>
                <Project data={page}></Project>
            </Layout>

            <FadeIn duration={3}>
                <Box position="absolute" left={0} top={0}>
                    <AspectRatio
                        w={{base: '30vw', md: '20vw', xl: '13vw'}}
                        maxW="330px"
                        opacity={{base: 0.1, md: 0.5}}
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
                        w={{base: '30vw', md: '20vw', xl: '13vw'}}
                        maxW="330px"
                        opacity={{base: 0.3, md: 0.5}}
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
            </FadeIn>
        </>
    );
};

export default ProjectPage;
