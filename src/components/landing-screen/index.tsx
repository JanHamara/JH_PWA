import * as React from 'react';
import {Center, Text, VStack, AspectRatio, Img, Box} from '@chakra-ui/react';
import {AboveLG} from '../responsive';
import landingHeading from '../../images/landing-heading.png';
import Clients from '../clients';

interface LandingScreenProps {
    subtitle: string;
}

const LandingScreen = ({subtitle, ...otherProps}: LandingScreenProps) => {
    return (
        <Center w="full" h="70vh" position="relative" alignItems="flex-start" {...otherProps}>
            <VStack spacing={{base: 2, md: 4}}>
                <AspectRatio
                    w={{base: '240px', mini: '275px', sm: '350px', md: '550px'}}
                    h={{base: '25px', mini: '28px', sm: '35px', md: '55px'}}
                    ratio={10 / 1}
                >
                    <Img
                        src={landingHeading}
                        aria-label="jan-hamara"
                        alt="landing-hero-heading"
                    ></Img>
                </AspectRatio>

                <Text
                    textStyle="heroSubheading"
                    fontSize={{base: '11px', mini: '0.875rem', sm: 'xs', md: 'md'}}
                >
                    {subtitle}
                </Text>
            </VStack>

            <AboveLG position="absolute" w="full" h="fit-content" bottom={12}>
                <Clients></Clients>
            </AboveLG>
        </Center>
    );
};
export default LandingScreen;
