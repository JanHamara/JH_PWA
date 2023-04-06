import {
    Img,
    VStack,
    HStack,
    Text,
    Link as ChakraLink,
    Center,
    AspectRatio,
    Button,
    Flex,
    Box,
} from '@chakra-ui/react';
import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {useLocation} from '@reach/router';
import {Link} from 'gatsby';

import TechStack from '../tech-stack';

interface SpaSlideshowProps {
    items: SlideshowItem[];
    about?: boolean;
    techstack?: boolean;
    onchange: any;
}

interface SlideshowItem {
    id: number;
    roles?: string[];
    title?: string;
    content: string;
    stack?: string;
    href?: string;
    label?: string;
}

const SpaSlideshow = (props: SpaSlideshowProps) => {
    const {items, about = false, techstack = false} = props;
    const [current, setCurrent] = React.useState(0);
    const [visibility, setVisibility] = React.useState('hidden');

    // Location
    const loc = useLocation();

    React.useEffect(() => {
        setTimeout(() => {
            setVisibility('visible');
        }, 500);
    }, []);

    const goNextSection = () => {
        setVisibility('hidden');
        if (about || techstack) {
            props.onchange(current + 1);
        }
        setTimeout(() => {
            current !== items.length - 1 ? setCurrent(current + 1) : setCurrent(0);
        }, 1000);
        setTimeout(() => {
            setVisibility('visibility');
        }, 1100);
    };

    const goPrevSection = () => {
        setVisibility('hidden');
        setTimeout(() => {
            current !== 0 ? setCurrent(current - 1) : setCurrent(items.length - 1);
        }, 1000);
        setTimeout(() => {
            setVisibility('visibility');
        }, 1100);
    };

    return (
        <HStack
            w="full"
            h={
                !about && !techstack
                    ? {base: 'auto', md: '50vh'}
                    : {base: '75vh', xs: '80vh', md: '50vh'}
            }
            overflow="visible"
            spacing={0}
        >
            {/* Left Switch */}
            {!about && !techstack && (
                <Center w={4} h="50vh">
                    <Button
                        w="fit"
                        role="button"
                        onClick={goPrevSection}
                        variant="unstyled"
                        aria-label="button-previous"
                    >
                        <AspectRatio boxSize={{base: 3, lg: 4}} ratio={1 / 1}>
                            <StaticImage
                                src="../../images/icons/chevron-left-white.png"
                                alt="chevron-left"
                                aria-label="button-left"
                                placeholder="none"
                            ></StaticImage>
                        </AspectRatio>
                    </Button>
                </Center>
            )}

            <VStack
                w="full"
                h={{base: 'auto', md: '50vh'}}
                justifyContent={{base: 'center', md: 'flex-start'}}
                className={visibility}
                transition="opacity 1s"
                spacing={
                    // This is basically just spacing for button
                    about
                        ? {base: 10, mini: 12, xs: 16, md: 24}
                        : techstack
                        ? // If you add text section to tech stack, you need to decrease this offset
                          {base: 12, mini: 16, md: 16}
                        : {base: 8, mini: 10, xs: 12, sm: 16, md: 24}
                }
            >
                <VStack
                    w="full"
                    h={{base: 'auto', md: 'full'}}
                    mx="auto"
                    textAlign="center"
                    // You need to align this spacing with button spacing just above
                    spacing={
                        about
                            ? 0
                            : techstack
                            ? {base: 6, mini: 8, xs: 10, sm: 10, md: 10, lg: 10, xl: 12, xxl: 12}
                            : {base: 6, md: 12, lg: 16}
                    }
                    mt={about ? 0 : {base: 0, md: 0}}
                    zIndex={9}
                >
                    <VStack w="full" spacing={{base: 6, md: 8}}>
                        {/* ------------- */}
                        {/* --- TITLE --- */}
                        {/* ------------- */}
                        {items[current] && (
                            <Text
                                dangerouslySetInnerHTML={{
                                    __html: items[current].title,
                                }}
                                textStyle="heading"
                            ></Text>
                        )}

                        {/* ------------- */}
                        {/* --- ROLES --- */}
                        {/* ------------- */}
                        {items[current].roles && (
                            <HStack
                                display={{base: 'none', md: 'flex'}}
                                spacing={{base: 1, mini: 2, md: 4}}
                            >
                                {items[current].roles.map((role, idx) => (
                                    <>
                                        <Text
                                            textStyle="roles"
                                            fontSize={{
                                                base: '10px',
                                                mini: '11px',
                                                md: '16px',
                                                lg: '17px',
                                                xl: '18px',
                                                xxl: 'md',
                                            }}
                                        >
                                            {role}
                                        </Text>
                                        <Text
                                            fontSize={{
                                                base: '10px',
                                                mini: '14px',
                                                lg: '19px',
                                                xl: '20px',
                                                xxl: 'lg',
                                            }}
                                            color="red"
                                            display={
                                                idx == items[current].roles.length - 1
                                                    ? 'none'
                                                    : 'block'
                                            }
                                        >
                                            /
                                        </Text>
                                    </>
                                ))}
                            </HStack>
                        )}
                    </VStack>

                    {/* ------------- */}
                    {/* -- CONTENT -- */}
                    {/* ------------- */}
                    <Text
                        maxW={
                            !about
                                ? {
                                      base: '70vw',
                                      md: '71vw',
                                      lg: '700px',
                                      xl: '800px',
                                      xxl: '800px',
                                  }
                                : {
                                      base: '80vw',
                                      sm: '90vw',
                                      md: '71vw',
                                      lg: '700px',
                                      xl: '800px',
                                      xxl: '800px',
                                  }
                        }
                        dangerouslySetInnerHTML={{
                            __html: items[current].content,
                        }}
                        textStyle="paragraph"
                        fontSize={{
                            base: '9.5px',
                            mini: '11px',
                            xs: '14px',
                            md: '14px',
                            lg: '15px',
                            xl: '16px',
                            xxl: '16px',
                        }}
                    ></Text>

                    {/* ------------- */}
                    {/* --- STACK --- */}
                    {/* ------------- */}
                    {items[current].stack && <TechStack stack={items[current].stack}></TechStack>}
                </VStack>

                {items[current].href && (
                    <Center
                        w="full"
                        position={{base: 'static', md: 'absolute'}}
                        bottom="calc(15vh)"
                    >
                        <ChakraLink href={items[current].href} target="_blank" variant="secondary">
                            Read More
                        </ChakraLink>
                    </Center>
                )}

                {items[current].label && (
                    <Center
                        w="full"
                        position={{base: 'static', md: 'absolute'}}
                        pt={{base: 0, md: 0}}
                        bottom={{base: '15vh', md: '13vh'}}
                    >
                        {items[items.length - 1].label == items[current].label ? (
                            <Link to={about ? '/techstack' : techstack ? '/portfolio' : '/'}>
                                <ChakraLink variant="secondary">{items[current].label}</ChakraLink>
                            </Link>
                        ) : (
                            <ChakraLink
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    goNextSection();
                                }}
                                variant="secondary"
                            >
                                {items[current].label}
                            </ChakraLink>
                        )}
                    </Center>
                )}
            </VStack>

            {/* Right Switch */}
            {!about && !techstack && (
                <Center w={4} h="50vh">
                    <Button
                        w="fit"
                        role="button"
                        onClick={goNextSection}
                        variant="unstyled"
                        aria-label="button-previous"
                    >
                        <AspectRatio boxSize={{base: 3, lg: 4}} ratio={1 / 1}>
                            <StaticImage
                                src="../../images/icons/chevron-right-white.png"
                                alt="chevron-left"
                                aria-label="button-left"
                                placeholder="none"
                            ></StaticImage>
                        </AspectRatio>
                    </Button>
                </Center>
            )}
        </HStack>
    );
};

export default SpaSlideshow;
