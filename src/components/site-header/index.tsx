import {Center, AspectRatio, Img, Link} from '@chakra-ui/react';
import * as React from 'react';
import logo from '../../images/logo_500px.png';
import ghostLogo from '../../images/logo_ghost_200px.png';

interface SiteHeaderProps {
    variant: 'default' | 'menu';
}

const SiteHeader = ({variant = 'default'}: SiteHeaderProps) => {
    return (
        <Center
            position={variant == 'menu' ? 'absolute' : 'static'}
            top={0}
            zIndex={variant == 'menu' ? '-2' : '1'}
            layerStyle="constraintMax"
            minH={{base: '200px', mini: '220px', xs: '260px', md: '30vh'}}
            h={{base: '200px', mini: '220px', xs: '260px', md: '30vh'}}
        >
            <Link href="/">
                <AspectRatio boxSize={{base: 16, mini: 20, md: 28}} ratio={1 / 1}>
                    <Img
                        src={variant == 'default' ? logo : ghostLogo}
                        aria-label="site-logo"
                        alt="site-logo"
                    ></Img>
                </AspectRatio>
            </Link>
        </Center>
    );
};

export default SiteHeader;
