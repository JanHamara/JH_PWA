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
                    <VStack maxW="container.xl" w="full" mt={28} spacing={32}>
                        {pages.map((page) => (
                            <Flex
                                w="full"
                                justifyContent="space-between"
                                alignItems="center"
                                flexWrap="nowrap"
                                role="group"
                            >
                                <Link to={'/portfolio/' + page.slug}>
                                    <AspectRatio
                                        minW={{base: 'full', md: '476px'}}
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
                                    w="half"
                                    flexDirection="column"
                                    justifyContent="flex-start"
                                    ml={12}
                                >
                                    <Text
                                        textStyle="heading"
                                        color="strong"
                                        fontSize={{
                                            base: '14px',
                                            mini: '17px',
                                            xs: '20px',
                                            sm: '18px',
                                            md: '22px',
                                            lg: '22px',
                                            xxl: '36px',
                                        }}
                                        lineHeight={{
                                            base: '14px',
                                            mini: '17px',
                                            xs: '20px',
                                            sm: '18px',
                                            md: '22px',
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

                                    {/* <HStack mt={4} spacing={4}>
                                    {page.header.role?.map((roleItem) => (
                                        <Box layerStyle="role" opacity={0.9}>
                                            {roleItem}
                                        </Box>
                                    ))}
                                </HStack> */}

                                    {page.shortDesc && (
                                        <Text
                                            mt={8}
                                            mb={8}
                                            maxW="90%"
                                            textStyle="paragraph"
                                            letterSpacing="wider"
                                            fontSize={{
                                                base: '14px',
                                                mini: '17px',
                                                xs: '20px',
                                                md: '17px',
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: page.shortDesc,
                                            }}
                                        ></Text>
                                    )}

                                    <Link to={'/portfolio/' + page.slug}>
                                        <ChakraLink
                                            ml={6}
                                            variant="secondary"
                                            fontSize={{
                                                base: '14px',
                                                mini: '17px',
                                                xs: '20px',
                                                md: '17px',
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
