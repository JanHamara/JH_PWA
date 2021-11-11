import * as React from 'react';
import {Center, Text, VStack, AspectRatio, Img} from '@chakra-ui/react';
import landingHeading from '../../images/landing-heading.png';

interface LandingScreenProps {
    subtitle: string;
}

const LandingScreen = ({subtitle, ...otherProps}: LandingScreenProps) => {
    return (
        <Center w="full" h="70vh" alignItems="flex-start" {...otherProps}>
            <VStack spacing={{base: 2, md: 4}}>
                <AspectRatio
                    w={{base: '240px', mini: '270px', sm: '350px', md: '550px'}}
                    h={{base: '24px', mini: '27px', sm: '35px', md: '55px'}}
                    ratio={10 / 1}
                >
                    <Img
                        src={landingHeading}
                        aria-label="jan-hamara"
                        alt="landing-hero-heading"
                    ></Img>
                </AspectRatio>

                <Text textStyle="heroSubheading">{subtitle}</Text>
            </VStack>
        </Center>
    );
};
export default LandingScreen;
