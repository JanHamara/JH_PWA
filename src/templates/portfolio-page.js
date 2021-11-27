import {Flex, Text, VStack, HStack, AspectRatio, Box, Link as ChakraLink} from '@chakra-ui/layout';
import * as React from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby';
import FadeIn from '../components/fade-in';

const PortfolioPage = ({pageContext: {pages}}) => {
    return (
        <Layout pageTitle="Portfolio" portfolio={true}>
            <Flex flexDirection="column" alignItems="center">
                <FadeIn delay={500}>
                    <Text textStyle="heading" color="strong" textTransform="uppercase">
                        <span class="sep">/</span> Portfolio
                    </Text>
                </FadeIn>

                <FadeIn delay={600}>
                    <Text mt={8} layerStyle="paragraph">
                        Explore a collection of latest design and development work, I did for
                        various clients and projects.
                    </Text>
                </FadeIn>

                <FadeIn delay={800} duration={1.5}>
                    <VStack
                        maxW={{base: '85vw', lg: 'container.xl'}}
                        w="full"
                        mt={{base: 12, xs: 16, md: 24, lg: 28}}
                        spacing={{base: 16, md: 28, lg: 32}}
                    >
                        {pages.map((page) => (
                            <Flex
                                w="full"
                                flexDirection={{base: 'column', lg: 'row'}}
                                justifyContent="space-between"
                                alignItems="center"
                                flexWrap="nowrap"
                                role="group"
                            >
                                <Link to={'/portfolio/' + page.slug}>
                                    <AspectRatio
                                        minW={{base: '80vw', md: '85vw', lg: '476px'}}
                                        w="50%"
                                        ratio={11 / 7}
                                        opacity={0.95}
                                        _groupHover={{opacity: 1}}
                                        transition="opacity 1s"
                                    >
                                        <img
                                            src={page.images[0]}
                                            alt="portfolio-thumbnail-image"
                                            sx={{position: 'static'}}
                                        ></img>
                                    </AspectRatio>
                                </Link>

                                <Flex
                                    w={{base: 'full', lg: 'half'}}
                                    flexDirection="column"
                                    justifyContent="flex-start"
                                    mt={{base: 6, mini: 8, sm: 12, lg: 0}}
                                    ml={{base: 0, lg: 12}}
                                >
                                    <Text
                                        textStyle="heading"
                                        color="strong"
                                        fontSize={{
                                            base: '15x',
                                            mini: '19px',
                                            xs: '20px',
                                            sm: '18px',
                                            md: '30px',
                                            lg: '22px',
                                            xxl: '36px',
                                        }}
                                        lineHeight={{
                                            base: '15px',
                                            mini: '19px',
                                            xs: '20px',
                                            sm: '18px',
                                            md: '30px',
                                            lg: '22px',
                                            xxl: '36px',
                                        }}
                                        letterSpacing="wider"
                                        fontFamily="body"
                                        fontWeight="black"
                                    >
                                        <span class="sep">/</span>
                                        &nbsp;{page.title}
                                    </Text>

                                    <HStack mt={{base: 4, md: 8, lg: 6}} spacing={4}>
                                        {page.header.role?.map((roleItem) => (
                                            <Box layerStyle="role" opacity={0.9}>
                                                {roleItem}
                                            </Box>
                                        ))}
                                    </HStack>

                                    {page.shortDesc && (
                                        <Text
                                            mt={{base: 4, md: 8, lg: 6}}
                                            mb={{base: 3, xs: 4, md: 6, lg: 8}}
                                            maxW={{base: 'full', lg: '90%'}}
                                            textStyle="paragraph"
                                            letterSpacing="wider"
                                            fontSize={{
                                                base: '9.5px',
                                                mini: '11px',
                                                xs: '2xs',
                                                md: '17px',
                                                lg: '17px',
                                                xl: '18px',
                                                xxl: 'md',
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: page.shortDesc,
                                            }}
                                        ></Text>
                                    )}

                                    <Link to={'/portfolio/' + page.slug}>
                                        <ChakraLink
                                            ml={{base: 3, md: 6}}
                                            variant="secondary"
                                            fontSize={{
                                                base: '10px',
                                                mini: '13px',
                                                xs: '15px',
                                                md: '17px',
                                                lg: '17px',
                                                xl: '18px',
                                                xxl: 'md',
                                            }}
                                        >
                                            Explore
                                        </ChakraLink>
                                    </Link>
                                </Flex>
                            </Flex>
                        ))}
                    </VStack>
                </FadeIn>
            </Flex>
        </Layout>
    );
};

export default PortfolioPage;
