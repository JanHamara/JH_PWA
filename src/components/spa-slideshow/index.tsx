import {Fade, VStack, HStack, Text, Link, Center, AspectRatio, Button, Box} from '@chakra-ui/react';
import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

interface SpaSlideshowProps {
    items: SlideshowItem[];
}

interface SlideshowItem {
    id: number;
    roles: string[];
    title: string;
    content: string;
    href: string;
}

const SpaSlideshow = (props: SpaSlideshowProps) => {
    const {items} = props;
    const [current, setCurrent] = React.useState(0);
    const [visibility, setVisibility] = React.useState('visible');

    React.useEffect(() => {
        setTimeout(() => {
            setVisibility('visible');
        }, 1000);
    }, []);

    const goNextSection = () => {
        setVisibility('hidden');
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
        <HStack w="full" h="50vh" spacing={0}>
            {/* Left Switch */}
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

            <VStack w="full" h="50vh" className={visibility} transition="opacity 1s" spacing={24}>
                <VStack
                    mx="auto"
                    textAlign="center"
                    spacing={{base: 12, md: 12, lg: 16}}
                    mt={{base: 6, md: 0}}
                >
                    <VStack w="full" spacing={{base: 12, md: 8}}>
                        {/* ------------- */}
                        {/* --- TITLE --- */}
                        {/* ------------- */}
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: items[current].title,
                            }}
                            textStyle="heading"
                        ></Text>

                        {/* ------------- */}
                        {/* --- ROLES --- */}
                        {/* ------------- */}
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
                    </VStack>

                    {/* ------------- */}
                    {/* -- CONTENT -- */}
                    {/* ------------- */}
                    <Text
                        maxW={{
                            base: '70vw',
                            md: '71vw',
                            lg: '700px',
                            xl: '900px',
                            xxl: '1000px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: items[current].content,
                        }}
                        textStyle="paragraph"
                        fontSize={{
                            base: '12.5px',
                            md: '15px',
                            lg: '17px',
                            xl: '18px',
                            xxl: 'md',
                        }}
                    ></Text>
                </VStack>

                <Center w="full" position="absolute" bottom="calc(15vh)">
                    <Link href={items[current].href} target="_blank" variant="secondary">
                        Read More
                    </Link>
                </Center>
            </VStack>

            {/* Right Switch */}
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
        </HStack>
    );
};

export default SpaSlideshow;
