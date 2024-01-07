import * as React from 'react';
import {Text, Box, Flex, AspectRatio, Img, SimpleGrid, HStack} from '@chakra-ui/react';

// Front End
import HTML from '../../images/techstack/html.png';
import CSS from '../../images/techstack/css.png';
import JAVASCRIPT from '../../images/techstack/javascript.png';
import TYPESCRIPT from '../../images/techstack/typescript.png';
import REACT from '../../images/techstack/react.png';
import VUEJS from '../../images/techstack/vue.png';
import WEBPACK from '../../images/techstack/webpack.png';
import PWA from '../../images/techstack/pwa.png';

// Server Side
import NODEJS from '../../images/techstack/nodejs.png';
import JAMSTACK from '../../images/techstack/jamstack.png';
import NEXTJS from '../../images/techstack/nextjs.png';
import GATSBY from '../../images/techstack/gatsby.png';
import STRAPI from '../../images/techstack/strapi.png';
import SF from '../../images/techstack/salesforce.png';
import WORDPRESS from '../../images/techstack/wordpress.png';
import GRAPHQL from '../../images/techstack/graphql.png';

// Design
import AI from '../../images/techstack/AI.png';
import XD from '../../images/techstack/XD.png';
import AE from '../../images/techstack/AE.png';
import LR from '../../images/techstack/LR.png';
import PR from '../../images/techstack/PR.png';
import FIGMA from '../../images/techstack/figma.png';
import ZEPLIN from '../../images/techstack/zeplin.png';
import INVISION from '../../images/techstack/invision.png';

const technologies = [
    {src: HTML, label: 'HTML 5', category: 'frontend', key: 'html'},
    {src: CSS, label: 'CSS 3', category: 'frontend', key: 'css'},
    {src: JAVASCRIPT, label: 'JAVASCRIPT', category: 'frontend', key: 'javascript'},
    {src: TYPESCRIPT, label: 'TYPESCRIPT', category: 'frontend', key: 'typescript'},
    {src: REACT, label: 'REACT', category: 'frontend', key: 'react'},
    {src: VUEJS, label: 'VUE.JS', category: 'frontend', key: 'vue'},
    {src: WEBPACK, label: 'WEBPACK', category: 'frontend', key: 'webpack'},
    {src: PWA, label: 'PWAs', category: 'frontend', key: 'pwa'},

    // Server-side
    {src: NODEJS, label: 'NODE.JS', category: 'serverside', key: 'nodejs'},
    {src: NEXTJS, label: 'NEXT.JS', category: 'serverside', key: 'nextjs'},
    {src: GATSBY, label: 'GATSBY', category: 'serverside', key: 'gatsby'},
    {src: STRAPI, label: 'STRAPI', category: 'serverside', key: 'strapi'},
    {src: JAMSTACK, label: 'JAMSTACK', category: 'serverside', key: 'jamstack'},
    {src: SF, label: 'SALESFORCE', category: 'serverside', key: 'salesforce'},
    {src: WORDPRESS, label: 'WORDPRESS', category: 'serverside', key: 'wordpress'},
    {src: GRAPHQL, label: 'GRAPHQL', category: 'serverside', key: 'graphql'},

    // Design
    {src: FIGMA, label: 'FIGMA', category: 'design', key: 'figma'},
    {src: ZEPLIN, label: 'ZEPLIN', category: 'design', key: 'zeplin'},
    {src: INVISION, label: 'INVISION', category: 'design', key: 'invision'},
    {src: XD, label: 'ADOBE XD', category: 'design', key: 'XD'},
    {src: AE, label: 'ADOBE AE', category: 'design', key: 'AE'},
    {src: AI, label: 'ILLUSTRATOR', category: 'design', key: 'AI'},
    {src: LR, label: 'LIGHTROOM', category: 'design', key: 'LR'},
    {src: PR, label: 'PREMIERE', category: 'design', key: 'PR'},
];

interface TechStackProps {
    stack?: string;
    pf?: string[];
}

const TechStack = ({stack = 'frontend', pf = undefined, ...otherProps}: TechStackProps) => {
    let selectedStack = technologies.filter((technology) => technology.category == stack);

    return !pf ? (
        <>
            <Flex
                w="full"
                justifyContent="center"
                maxW="1000px"
                mt={0}
                flexWrap={{base: 'wrap', xl: 'nowrap'}}
                display={{base: 'none', md: 'flex'}}
            >
                {selectedStack?.map((item, idx) => (
                    <Flex
                        w="120px"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        key={idx}
                        mx={5}
                        mb={{base: 12, md: 5, xl: 0}}
                        opacity={0.8}
                        role="group"
                        transition="transform 1s"
                        _hover={{opacity: 0.9, cursor: 'pointer', transform: 'scale(1.1)'}}
                    >
                        <Box boxSize={{base: 10, lg: 12, xl: 12}} mb={4}>
                            <AspectRatio ratio={1 / 1}>
                                <Img
                                    src={item.src}
                                    alt="technology-logo"
                                    placeholder="none"
                                    loading="eager"
                                ></Img>
                            </AspectRatio>
                        </Box>

                        <Text textStyle="stack" _groupHover={{color: 'white'}}>
                            {item.label}
                        </Text>
                    </Flex>
                ))}
            </Flex>

            <Box w="full" maxW="90vw" display={{base: 'block', md: 'none'}}>
                <SimpleGrid w="full" columns={4} columnGap={{base: 0, sm: 4}}>
                    {selectedStack?.map((item, idx) => (
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            key={idx}
                            mb={{base: 8, md: 5, xl: 0}}
                            opacity={0.8}
                            role="group"
                            transition="transform 1s"
                            _hover={{
                                opacity: 0.9,
                                cursor: 'pointer',
                                transform: 'scale(1.1)',
                            }}
                        >
                            <Box boxSize={{base: 6, mini: 8, sm: 9}} mb={4}>
                                <AspectRatio ratio={1 / 1}>
                                    <Img
                                        src={item.src}
                                        alt="technology-logo"
                                        placeholder="none"
                                        loading="eager"
                                    ></Img>
                                </AspectRatio>
                            </Box>

                            <Text
                                textStyle="stack"
                                fontSize={{base: '8px', mini: '9px', xs: '11px', sm: '10px'}}
                                _groupHover={{color: 'white'}}
                            >
                                {item.label}
                            </Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Box>
        </>
    ) : (
        <HStack mt={14} spacing={10}>
            {pf.map((item) => (
                <Box>
                    {technologies.map(
                        (tech, idx) =>
                            item == tech.key && (
                                <Flex
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    key={idx}
                                    mb={{base: 8, md: 5, xl: 0}}
                                    opacity={0.8}
                                    role="group"
                                    transition="transform 1s"
                                    _hover={{
                                        opacity: 0.9,
                                        cursor: 'pointer',
                                        transform: 'scale(1.1)',
                                    }}
                                >
                                    <Box boxSize={{base: 6, mini: 8, sm: 9}} mb={4}>
                                        <AspectRatio ratio={1 / 1}>
                                            <Img
                                                src={tech.src}
                                                alt="technology-logo"
                                                placeholder="none"
                                                loading="eager"
                                            ></Img>
                                        </AspectRatio>
                                    </Box>

                                    <Text
                                        textStyle="stack"
                                        fontWeight="semibold"
                                        fontSize={{
                                            base: '8px',
                                            mini: '9px',
                                            xs: '11px',
                                            sm: '10px',
                                        }}
                                        _groupHover={{color: 'white'}}
                                    >
                                        {tech.label}
                                    </Text>
                                </Flex>
                            )
                    )}
                </Box>
            ))}
        </HStack>
    );
};
export default TechStack;
