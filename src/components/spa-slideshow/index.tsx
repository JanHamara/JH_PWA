import {
    Img,
    VStack,
    HStack,
    Text,
    Link,
    Center,
    AspectRatio,
    Button,
    Flex,
    Box,
} from '@chakra-ui/react';
import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {useLocation} from '@reach/router';

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
        <HStack w="full" h={{base: '60vh', xs: '65vh', md: '50vh'}} spacing={0}>
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
                h={{base: '100%', md: '50vh'}}
                justifyContent={{base: 'center', md: 'flex-start'}}
                className={visibility}
                transition="opacity 1s"
                spacing={about ? 0 : 24}
            >
                <VStack
                    w="full"
                    mx="auto"
                    textAlign="center"
                    spacing={about ? 0 : {base: 12, md: 12, lg: 16}}
                    mt={about ? 0 : {base: 6, md: 0}}
                    zIndex={9}
                >
                    <VStack w="full" spacing={{base: 12, md: 8}}>
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
                            <HStack spacing={{base: 3, md: 4}}>
                                {items[current].roles.map((role, idx) => (
                                    <>
                                        <Text
                                            textStyle="roles"
                                            fontSize={{
                                                base: '13px',
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
                                                base: '12px',
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
                                      xl: '900px',
                                      xxl: '1000px',
                                  }
                                : {
                                      base: '80vw',
                                      sm: '90vw',
                                      md: '71vw',
                                      lg: '700px',
                                      xl: '900px',
                                      xxl: '1024px',
                                  }
                        }
                        dangerouslySetInnerHTML={{
                            __html: items[current].content,
                        }}
                        textStyle="paragraph"
                        fontSize={{
                            base: '9.5px',
                            mini: '11px',
                            xs: '2xs',
                            md: '15px',
                            lg: '17px',
                            xl: '18px',
                            xxl: 'md',
                        }}
                    ></Text>

                    {/* ------------- */}
                    {/* --- STACK --- */}
                    {/* ------------- */}
                    {items[current].stack && <TechStack stack={items[current].stack}></TechStack>}
                </VStack>

                {items[current].href && (
                    <Center w="full" position="absolute" bottom="calc(15vh)">
                        <Link href={items[current].href} target="_blank" variant="secondary">
                            Read More
                        </Link>
                    </Center>
                )}

                {items[current].label && (
                    <Center
                        w="full"
                        position={{base: 'absolute', md: 'absolute'}}
                        pt={{base: 8, md: 0}}
                        bottom={{base: '9vh', md: 'calc(15vh)'}}
                    >
                        {items[items.length - 1].label == items[current].label ? (
                            <Link
                                href={loc.href.replace(
                                    loc.pathname,
                                    about ? '/techstack' : techstack ? '/portfolio' : '/'
                                )}
                                variant="secondary"
                            >
                                {items[current].label}
                            </Link>
                        ) : (
                            <Link
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    goNextSection();
                                }}
                                variant="secondary"
                            >
                                {items[current].label}
                            </Link>
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
