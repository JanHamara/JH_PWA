import {
    Text,
    AspectRatio,
    Flex,
    HStack,
    Stack,
    Center,
    Img,
    Box,
    Link as ChakraLink,
    StylesProvider,
    useMultiStyleConfig,
} from '@chakra-ui/react';
import * as React from 'react';
import ProjectHeader from '../../components/project-header';
import {StaticImage} from 'gatsby-plugin-image';
import FadeIn from '../../components/fade-in';
import TechStack from '../tech-stack';
import {Link} from 'gatsby';

// Static Assets Imports
import loaderGif from '../../images/projects/bat/loader.gif';
import cartGif from '../../images/projects/bat/cart-animation.gif';
import cartEmptyGif from '../../images/projects/bat/cart.gif';

interface ProjectProps {
    data: {
        title: string;
        header: {
            techstack: string;
            client?: string;
            role: string[];
            agency?: string;
        };
        brief: string;
        role: string;
        stack: string[];
        achievement: string;
        slug: string;
        images?: string[];
        sideImages?: {
            left: string;
            right: string;
        };
        video?: string;
        conclusion?: string;
    };
}

const Project = (props: ProjectProps) => {
    const {
        title,
        header,
        slug,
        brief,
        stack,
        role,
        achievement,
        conclusion,
        images,
        sideImages,
        video,
    } = props.data;
    const styles = useMultiStyleConfig('Project', {});

    return (
        <Flex flexDirection="column" w="full" h="auto">
            <StylesProvider value={styles}>
                {/* Project Header */}
                <ProjectHeader title={title} header={header}></ProjectHeader>

                {/* Project Thumbnail */}
                {images && images[0] && (
                    <FadeIn delay={1000}>
                        <AspectRatio {...styles.pThumbnail} mt={{base: 14, md: 12}}>
                            <Img src={images[0]} alt="project-thumbnail-image"></Img>
                        </AspectRatio>
                    </FadeIn>
                )}

                {/* Project Brief */}
                {brief && (
                    <FadeIn delay={1300}>
                        <Text {...styles.pHeading}>Project Brief</Text>

                        <Text
                            {...styles.phContent}
                            dangerouslySetInnerHTML={{
                                __html: brief,
                            }}
                        ></Text>
                    </FadeIn>
                )}

                {/* Project Stack */}
                {stack && <TechStack pf={stack}></TechStack>}

                {/* Project Thumbnail 2 */}
                {images && images[1] && (
                    <AspectRatio {...styles.pThumbnail}>
                        <Img src={images[1]} alt="project-thumbnail-image"></Img>
                    </AspectRatio>
                )}

                {/* Side Images */}
                {sideImages && (
                    <Stack
                        spacing={4}
                        mt={{base: 10, md: 20}}
                        direction={{base: 'column', md: 'row'}}
                    >
                        <AspectRatio {...styles.pHalfThumbnail}>
                            <Img src={sideImages.left} alt="project-thumbnail-image"></Img>
                        </AspectRatio>
                        <AspectRatio {...styles.pHalfThumbnail}>
                            <Img src={sideImages.right} alt="project-thumbnail-image"></Img>
                        </AspectRatio>
                    </Stack>
                )}

                {/* Project Role */}
                {role && (
                    <Text
                        {...styles.pContent}
                        dangerouslySetInnerHTML={{
                            __html: role,
                        }}
                    ></Text>
                )}

                {/* Project Thumbnail 3 */}
                {images && images[2] && (
                    <AspectRatio {...styles.pThumbnail}>
                        <Img src={images[2]} alt="project-thumbnail-image"></Img>
                    </AspectRatio>
                )}

                {achievement && (
                    <Text
                        {...styles.pContent}
                        dangerouslySetInnerHTML={{
                            __html: achievement,
                        }}
                    ></Text>
                )}

                {/* Project Thumbnail 3 */}
                {images && images[3] && (
                    <AspectRatio {...styles.pThumbnail}>
                        <Img src={images[3]} alt="project-thumbnail-image"></Img>
                    </AspectRatio>
                )}

                {/* Project Role */}
                {conclusion && (
                    <Text
                        {...styles.pContent}
                        dangerouslySetInnerHTML={{
                            __html: conclusion,
                        }}
                    ></Text>
                )}

                {slug == 'bat' && (
                    <Box position="relative">
                        <AspectRatio {...styles.pThumbnail}>
                            <Img
                                src="https://res.cloudinary.com/jhamara/image/upload/v1637930728/projects/BAT_-_4_nkcudo.jpg"
                                alt="project-thumbnail-image"
                            ></Img>
                        </AspectRatio>

                        <HStack
                            w="90%"
                            h={{base: 'auto', md: '400px'}}
                            position="absolute"
                            top={{base: '70%', xs: '65%', lg: '60%'}}
                            left="50%"
                            transform="translate(-50%, -50%)"
                            spacing={28}
                            justifyContent="center"
                        >
                            {/* <Img
                                src={loaderGif}
                                maxW={{base: '150px', md: '200px'}}
                                alt="cart-animation"
                            ></Img> */}

                            <Img
                                src={cartGif}
                                maxW={{base: '50px', xs: '70px', md: '140px', lg: '200px'}}
                                alt="cart-animation"
                            ></Img>
                            {/* 
                            <Img
                                src={cartEmptyGif}
                                maxW={{base: '150px', md: '200px'}}
                                alt="cart-empty-animation"
                            ></Img> */}
                        </HStack>
                    </Box>
                )}

                {/* Project Demo */}
                {video && (
                    <Box {...styles.pVideo} maxH="500px">
                        <iframe
                            title="vimeo-player"
                            src={video + '&title=0&byline=0&portrait=0'}
                            width="100%"
                            height="auto"
                            frameborder="0"
                            className="video-vim"
                            allowfullscreen
                        ></iframe>
                    </Box>
                )}

                <Center {...styles.pButton}>
                    <Link to="/portfolio">
                        <ChakraLink
                            href="/portfolio"
                            variant="secondary"
                        >
                            Back to portfolio
                        </ChakraLink>
                    </Link>
                </Center>
            </StylesProvider>
        </Flex>
    );
};

export default Project;
