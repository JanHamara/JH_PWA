import { VStack, Text } from '@chakra-ui/layout';
import {Link} from 'gatsby';
import * as React from 'react';

interface NavigationProps {
    items: NavigationItemProp[];
}
interface NavigationItemProp {
    href: string;
    label: string;
}

const Navigation = ({items}: NavigationProps): React.ReactElement => {
    return (
        <nav>
            <VStack color="red.500">
                Navigation
            {items.map(
                (item, index): Object => (
                    <Link to={item.href} key={index}>
                        <Text color="primary">{item.label}</Text>
                    </Link>
                )
            )}
            </VStack>
        </nav>
    );
};

export default Navigation;
