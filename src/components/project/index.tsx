import {
    Text,
    AspectRatio,
    Flex,
    Link,
    Center,
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
    };
}

const Project = (props: ProjectProps) => {
    const {title, header, brief, stack, role, achievement} = props.data;
    const styles = useMultiStyleConfig('Project', {});
    const location = useLocation();

    return (
        <Flex flexDirection="column" w="full" h="auto">
            <StylesProvider value={styles}>
                {/* Project Header */}
                <ProjectHeader title={title} header={header}></ProjectHeader>

                {/* Project Thumbnail */}
                <FadeIn delay={1000}>
                    <AspectRatio {...styles.pThumbnail} mt={{base: 14, md: 16}}>
                        <StaticImage
                            src="../../images/projects/utmb/1.jpg"
                            alt="project-thumbnail-image"
                        ></StaticImage>
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
                <AspectRatio {...styles.pThumbnail}>
                    <StaticImage
                        src="../../images/projects/utmb/2.jpg"
                        alt="project-thumbnail-image"
                    ></StaticImage>
                </AspectRatio>

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
                <AspectRatio {...styles.pThumbnail}>
                    <StaticImage
                        src="../../images/projects/utmb/3.jpg"
                        alt="project-thumbnail-image"
                    ></StaticImage>
                </AspectRatio>

                {achievement && (
                    <Text
                        {...styles.pContent}
                        dangerouslySetInnerHTML={{
                            __html: achievement,
                        }}
                    ></Text>
                )}

                <Center {...styles.pButton}>
                    <Link
                        href={location.href.replace(location.pathname, '') + '/portfolio'}
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
