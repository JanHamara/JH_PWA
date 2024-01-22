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
                    <Text textStyle="heading" fontWeight='thin' color="white" textTransform="uppercase">
                        <span class="sep">/</span> Portfolio
                    </Text>
                </FadeIn>

                <FadeIn delay={600}>
                    <Text mt={8} layerStyle="paragraph">
                        Explore a collection of latest design and development projects, I worked on
                        for various clients and agencies...
                    </Text>
                </FadeIn>

                <FadeIn delay={800} duration={1.5}>
                    <VStack
                        maxW={{base: '85vw', lg: '920px'}}
                        w="full"
                        mt={{base: 12, xs: 16, md: 20}}
                        spacing={{base: 16, md: 28, lg: 32}}
                    >
                        {pages.map((page, idx) => (
                            <Flex
                                w="full"
                                flexDirection={{base: 'column', lg: 'row'}}
                                justifyContent="space-between"
                                alignItems="center"
                                flexWrap="nowrap"
                                role="group"
                                key={idx}
                            >
                                <Link to={'/portfolio/' + page.slug}>
                                    <AspectRatio
                                        minW={{base: '85vw', md: '85vw', lg: '380px'}}
                                        w="50%"
                                        ratio={11 / 7}
                                        opacity={0.95}
                                        _groupHover={{opacity: 1}}
                                        transition="opacity 1s"
                                    >
                                        <img
                                            src={page.previewImage}
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
                                    {/* Portfolio Item - Heading */}
                                    <Text
                                        textStyle="portfolioHeading"
                                    >
                                        <span class="sep">/</span>
                                        &nbsp;{page.title}
                                    </Text>

                                    {/* Portfolio Item - Roles */}
                                    <HStack mt={{base: 4, md: 8, lg: 6}} spacing={4}>
                                        {page.header.role?.map((roleItem) => (
                                            <Box layerStyle="role" opacity={0.9}>
                                                {roleItem}
                                            </Box>
                                        ))}
                                    </HStack>

                                    {/* Portfolio Item - Desc */}
                                    {page.shortDesc && (
                                        <Text
                                            mt={{base: 4, md: 8, lg: 6}}
                                            mb={{base: 3, xs: 4, md: 6, lg: 8}}
                                            maxW={{base: 'full', lg: '90%'}}
                                            textStyle="portfolioDescription"
                                            dangerouslySetInnerHTML={{
                                                __html: page.shortDesc,
                                            }}
                                        ></Text>
                                    )}

                                    <Link
                                        to={
                                            page.slug == 'rd'
                                                ? 'https://www.rogerdubuis.com/ww-en'
                                                : '/portfolio/' + page.slug
                                        }
                                        target={page.slug == 'rd' ? '_blank' : '_self'}
                                    >
                                        <ChakraLink
                                            ml={{base: 3, md: 6}}
                                            variant="secondary"
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
