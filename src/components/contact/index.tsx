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
            <VStack justifyContent="center" alignItems="center" spacing={{base: 8, md: 4}}>
                <Text
                    maxW={{base: '85vw', md: 'full'}}
                    textStyle="heading"
                    color="strong"
                    textAlign="center"
                    fontSize={{base: 'sm', md: 'md'}}
                >
                    {info.heading}
                </Text>
                <Text
                    display={{base: 'none', md: 'block'}}
                    textStyle="paragraph"
                    maxW={{base: '70vw', md: 'full'}}
                    fontSize={{base: 'xs', md: 'sm', lg: 'md'}}
                    textAlign="center"
                >
                    {info.subheading}
                </Text>
            </VStack>

            <Stack
                w="full"
                maxW="container.md"
                flexWrap="wrap"
                mt={{base: 16, md: 24}}
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
                            fontSize={{base: 'xs', md: 'sm', lg: 'md'}}
                        >
                            <Text mr={2} color="red">
                                /
                            </Text>
                            {infoItem.label}
                        </Flex>
                        <Text mt={4} textStyle="paragraph" fontSize={{base: 'sm', lg: 'md'}}>
                            {infoItem.value}
                        </Text>
                    </Flex>
                ))}
            </Stack>

            {social && (
                <Box mt={32} display={{base: 'block', md: 'block'}}>
                    <SocialMedia></SocialMedia>
                </Box>
            )}
        </Flex>
    );
};

export default Contact;
