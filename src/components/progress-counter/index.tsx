import * as React from 'react';
import {Text, Flex, Box} from '@chakra-ui/react';
import {StaticImage} from 'gatsby-plugin-image';

interface ProgressCounterProps {
    items: number;
    current: number;
}

const ProgressCounter = (props: ProgressCounterProps) => {
    const {items, current} = props;

    return (
        <Flex justifyContent="space-between" alignItems="center" flexWrap="nowrap">
            <Text textStyle="paragraph" color="strong" fontSize={{base: '14px', md: '30px'}}>
                {current + 1}
            </Text>

            <Box boxSize={4} mx={2} mt={4}>
                <StaticImage
                    width={16}
                    height={16}
                    src="../../images/icons/chevron-right-red.png"
                    alt="chevron-right"
                    placeholder="none"
                ></StaticImage>
            </Box>

            <Text textStyle="paragraph" fontSize={{base: '14px', md: '26px'}} ml={2} mt={8}>
                {items}
            </Text>
        </Flex>
    );
};

export default ProgressCounter;
