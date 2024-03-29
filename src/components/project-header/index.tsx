import {Text, SimpleGrid, Box, Flex, useMultiStyleConfig, StylesProvider} from '@chakra-ui/react';
import * as React from 'react';
import FadeIn from '../fade-in';

interface ProjectHeaderProps {
    title: string;
    header: {
        techstack: string;
        client?: string;
        role: string[];
        agency?: string;
    };
}

const ProjectHeader = (props: ProjectHeaderProps) => {
    const {title, header} = props;
    const styles = useMultiStyleConfig('ProjectHeader', {});

    return (
        <Box>
            <StylesProvider value={styles}>
                <Flex {...styles.container}>
                    <FadeIn delay={500}>
                        <Text
                            textStyle="projectHeading"
                            {...styles.heading}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        ></Text>
                    </FadeIn>

                    <FadeIn delay={750}>
                        <SimpleGrid {...styles.header} columns={{base: 1, md: 2}}>
                            {header.techstack && (
                                <Box {...styles.headerItem}>
                                    <Text
                                        {...styles.headerItemLabel}
                                    >
                                        Tech Stack
                                    </Text>
                                    <Text textStyle="paragraph" {...styles.headerItemValue}>
                                        {header.techstack}
                                    </Text>
                                </Box>
                            )}
                            {header.client && (
                                <Box {...styles.headerItem}>
                                    <Text
                                        {...styles.headerItemLabel}
                                    >
                                        Client
                                    </Text>
                                    <Text textStyle="paragraph" {...styles.headerItemValue}>
                                        {header.client}
                                    </Text>
                                </Box>
                            )}
                            {header.role && (
                                <Box {...styles.headerItem}>
                                    <Text
                                        {...styles.headerItemLabel}
                                    >
                                        Role
                                    </Text>
                                    <Text textStyle="paragraph" {...styles.headerItemValue}>
                                        {header.role.map((it) => (
                                            <Box>{it}</Box>
                                        ))}
                                    </Text>
                                </Box>
                            )}
                            {header.agency && (
                                <Box {...styles.headerItem} display={{base: 'none', md: 'block'}}>
                                    <Text
                                        {...styles.headerItemLabel}
                                    >
                                        Agency
                                    </Text>
                                    <Text textStyle="paragraph" {...styles.headerItemValue}>
                                        {header.agency}
                                    </Text>
                                </Box>
                            )}
                        </SimpleGrid>
                    </FadeIn>
                </Flex>
            </StylesProvider>
        </Box>
    );
};

export default ProjectHeader;
