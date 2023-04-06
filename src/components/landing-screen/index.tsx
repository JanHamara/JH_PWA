import * as React from 'react';
import {Center, Text, VStack, AspectRatio, Img, Box, Fade} from '@chakra-ui/react';
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
            <VStack spacing={{base: 2, md: 4}}>
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
                        fontSize={{base: '11px', mini: '0.875rem', sm: 'xs', md: '16.5px'}}
                    >
                        {subtitle}
                    </Text>
                </FadeIn>
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
