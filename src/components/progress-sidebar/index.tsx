import {Box, Flex} from '@chakra-ui/react';
import * as React from 'react';

interface ProgressSidebarProps {
    items: number;
    current: number;
}

const ProgressSidebar = (props: ProgressSidebarProps) => {
    const {items, current} = props;
    const [offset, setOffset] = React.useState('0vh');

    const step = 45 / items;

    React.useEffect(() => {
        setOffset(current * step + 'vh');
    }, [current]);

    return (
        <Flex w="2px" h="45vh" direction="column">
            <Box height={offset} backgroundColor="none" transition="height 2s ease-out"></Box>
            <Box w="full" h={step + 'vh'} backgroundColor="white"></Box>
        </Flex>
    );
};

export default ProgressSidebar;
