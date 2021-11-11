import {
    StylesProvider,
    Button,
    VStack,
    Box,
    Img,
    AspectRatio,
    Text,
    useMultiStyleConfig,
} from '@chakra-ui/react';
import * as React from 'react';
import menuIcon from '../../images/menu.png';

interface NavigationProps {
    items: NavigationItemProp[];
}
interface NavigationItemProp {
    href: string;
    label: string;
}
const Navigation = ({items, ...otherProps}: NavigationProps) => {
    const styles = useMultiStyleConfig('Navigation', {});

    return (
        <Box as="nav" {...styles.container} {...otherProps}>
            <StylesProvider value={styles}>
                {/* <VStack>
                {items.map((item, index) => {
                    return (
                        <Link to={item.href} key={index}>
                            <Text color="red">{item.label}</Text>
                        </Link>
                    );
                })}
            </VStack> */}

                {/* Left Side */}
                <Box></Box>

                {/* Right Side */}
                <Button role="group" variant="unstyled">
                    <VStack h="55px">
                        <AspectRatio
                            w={{base: '32px', mini: '40px'}}
                            h={{base: '24px', mini: '30px'}}
                            ratio={4 / 3}
                        >
                            <Img src={menuIcon} aria-label="burger-menu-icon" alt="menu-icon"></Img>
                        </AspectRatio>

                        <Text
                            opacity={0}
                            _groupHover={{opacity: 0.8}}
                            textStyle="base"
                            fontSize="2xs"
                        >
                            Menu
                        </Text>
                    </VStack>
                </Button>
            </StylesProvider>
        </Box>
    );
};
export default Navigation;
