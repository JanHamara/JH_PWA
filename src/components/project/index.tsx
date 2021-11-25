import {
    Text,
    AspectRatio,
    Flex,
    Link,
    Center,
    Img,
    StylesProvider,
    useMultiStyleConfig,
} from '@chakra-ui/react';
import * as React from 'react';
import ProjectHeader from '../../components/project-header';
import {StaticImage} from 'gatsby-plugin-image';
import FadeIn from '../../components/fade-in';
import TechStack from '../tech-stack';
import {useLocation} from '@reach/router';

interface ProjectProps {
    data: {
        title: string;
        header: {
            techstack: string;
            client: string;
            role: string;
            agency: string;
        };
        brief: string;
        role: string;
        stack: string[];
        achievement: string;
        slug: string;
        images: string[];
        conclusion?: string;
    };
}

const Project = (props: ProjectProps) => {
    const {title, header, slug, brief, stack, role, achievement, conclusion, images} = props.data;
    const styles = useMultiStyleConfig('Project', {});

    return (
        <Flex flexDirection="column" w="full" h="auto">
            <StylesProvider value={styles}>
                {/* Project Header */}
                <ProjectHeader title={title} header={header}></ProjectHeader>

                {/* Project Thumbnail */}
                <FadeIn delay={1000}>
                    <AspectRatio {...styles.pThumbnail} mt={{base: 14, md: 16}}>
                        <Img src={images[0]} alt="project-thumbnail-image"></Img>
                    </AspectRatio>
                </FadeIn>

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
                {images[1] && (
                    <AspectRatio {...styles.pThumbnail}>
                        <Img src={images[1]} alt="project-thumbnail-image"></Img>
                    </AspectRatio>
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
                {images[2] && (
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
                {images[3] && (
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

                <Center {...styles.pButton}>
                    <Link
                        href="/"
                        variant="secondary"
                        fontSize={{
                            base: '10px',
                            mini: '12px',
                            xs: '14px',
                            md: 'xs',
                            lg: '17px',
                        }}
                    >
                        Back to portfolio
                    </Link>
                </Center>
            </StylesProvider>
        </Flex>
    );
};

export default Project;