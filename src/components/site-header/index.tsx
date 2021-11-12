import {Center, AspectRatio, Img, Link} from '@chakra-ui/react';
import {ImageFormat} from 'gatsby-plugin-image';
import * as React from 'react';
import logo from '../../images/logo_500px.png';

const SiteHeader = () => {
    return (
        <Center
            layerStyle="constraintMax"
            minH={{base: '200px', mini: '220px', xs: '260px', md: '30vh'}}
            h={{base: '200px', mini: '220px', xs: '260px', md: '30vh'}}
        >
            <Link href="/">
                <AspectRatio boxSize={{base: 16, mini: 20, md: 28}} ratio={1 / 1}>
                    <Img src={logo} aria-label="site-logo" alt="site-logo"></Img>
                </AspectRatio>
            </Link>
        </Center>
    );
};

export default SiteHeader;
