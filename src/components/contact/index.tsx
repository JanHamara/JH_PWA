import {Flex, Text, Stack, VStack, Box, Center} from '@chakra-ui/react';
import * as React from 'react';
import SocialMedia from '../social-media';

interface ContactProps {
    info: {
        heading: string;
        subheading: string;
        info: {
            label: string;
            value: string;
        }[];
    };
    social: boolean;
}

const Contact = (props: ContactProps) => {
    const {info, social = false} = props;

    return (
        <Flex w="full" flexDirection="column" alignItems="center">
            <VStack justifyContent="center" alignItems="center" spacing={8}>
                <Text
                    maxW={{base: '85vw', md: '800px'}}
                    textStyle="heading"
                    color="strong"
                    textAlign="center"
                    fontSize={{base: '2xs', xs: 'xs', md: 'base'}}
                >
                    {info.heading}
                </Text>
                <Text
                    display={{base: 'none', md: 'block'}}
                    textStyle="paragraph"
                    maxW={{base: '70vw', md: 'full'}}
                    fontSize={{base: '2xs', md: 'base'}}
                    textAlign="center"
                >
                    {info.subheading}
                </Text>
            </VStack>

            <Stack
                w="full"
                maxW={{md: '600px', lg: 'container.column'}}
                flexWrap="wrap"
                mt={{base: 8, xs: 14, md: 24}}
                direction={{base: 'column', md: 'row'}}
                spacing={{base: 8, md: 24}}
            >
                {info.info.map((infoItem, idx) => (
                    <Flex
                        key={idx}
                        flex={1}
                        direction="column"
                        alignItems={{base: 'center', md: 'flex-start'}}
                    >
                        <Flex
                            textStyle="roles"
                            color="strong"
                            fontSize={{base: '12px', xs: 'xs', md: 'base'}}
                        >
                            <Text mr={2} color="red">
                                /
                            </Text>
                            {infoItem.label}
                        </Flex>
                        <Text
                            mt={{base: 2, md: 4}}
                            textStyle="paragraph"
                            fontSize={{
                                base: '11px',
                                mini: '12px',
                                xs: '15px',
                                md: 'base',
                            }}
                        >
                            {infoItem.value}
                        </Text>
                    </Flex>
                ))}
            </Stack>

            {social && (
                <Box mt={{base: 16, xs: 20, md: 32}} display={{base: 'block', md: 'block'}}>
                    <SocialMedia></SocialMedia>
                </Box>
            )}
        </Flex>
    );
};

export default Contact;
