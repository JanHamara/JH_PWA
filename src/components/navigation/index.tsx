import {StylesProvider, Button, Box, useMultiStyleConfig} from '@chakra-ui/react';
import {Link} from 'gatsby';
import * as React from 'react';

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
                <Button variant="unstyled">Hello</Button>
            </StylesProvider>
        </Box>
    );
};

export default Navigation;
