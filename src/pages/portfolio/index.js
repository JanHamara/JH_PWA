import {Flex, Text} from '@chakra-ui/layout';
import * as React from 'react';
import Layout from '../../components/layout';

const PortfolioPage = () => {
    return (
        <Layout pageTitle="Portfolio">
            <Flex flexDirection="column" alignItems="center">
                <Text textStyle="heading" color="strong" textTransform>
                    Have a project inquiry, or interested in working together?
                </Text>
            </Flex>
        </Layout>
    );
};

export default PortfolioPage;
