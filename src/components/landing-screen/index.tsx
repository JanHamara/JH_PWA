import * as React from 'react';
import {Center, Text, VStack, AspectRatio, Img, Box, Fade, Heading} from '@chakra-ui/react';
import {AboveLG} from '../responsive';

import {StaticImage} from 'gatsby-plugin-image';
import Clients from '../clients';
import FadeIn from '../fade-in';

interface LandingScreenProps {
    subtitle: string;
}

const LandingScreen = ({subtitle, ...otherProps}: LandingScreenProps) => {
    return (
        <Center w="full" h="70vh" position="relative" alignItems="flex-start" {...otherProps}>
            <VStack spacing={{base: 4, md: 6}}>
                <FadeIn delay={750} duration={1.5}>
                    <AspectRatio
                        w={{base: '240px', mini: '275px', sm: '350px', md: '450px'}}
                        h={{base: '25px', mini: '28px', sm: '35px', md: '45px'}}
                        ratio={10 / 1}
                    >
                        <StaticImage
                            src="../../images/landing-heading.png"
                            aria-label="jan-hamara"
                            alt="landing-hero-heading"
                            placeholder="none"
                            loading="eager"
                        ></StaticImage>
                    </AspectRatio>
                </FadeIn>

                <FadeIn delay={750} duration={1.5}>
                    <Text
                        textStyle="heroSubheading"
                    >
                        {subtitle}
                    </Text>
                </FadeIn>

                <Heading as='h1' fontWeight={100}>Heading 1</Heading>
                <Heading as='h2' fontWeight={200}>Heading 2</Heading>
                <Heading as='h3' fontWeight={300}>Heading 3</Heading>
                <Heading as='h4' fontWeight={400}>Heading 4</Heading>
                <Heading as='h5' fontWeight={500}>Heading 5</Heading>
                <Heading as='h6' fontWeight={600}>Heading 6 | 600</Heading>
                <Heading as='h6' fontWeight={700}>Heading 6 | 700</Heading>
                <Heading as='h6' fontWeight={800}>Heading 6 | 800</Heading>
                <Heading as='h6' fontWeight={900}>Heading 6 | 900</Heading>
            </VStack>

            <AboveLG position="absolute" width={{ lg: '1000px', xl: '1160px', xxl: '1160px' }} h="fit-content" bottom={8}>
                <FadeIn delay={1200} duration={1.5}>
                    <Clients></Clients>
                </FadeIn>
            </AboveLG>
        </Center>
    );
};
export default LandingScreen;
