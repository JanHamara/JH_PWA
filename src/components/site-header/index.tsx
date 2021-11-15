import {Center, AspectRatio, Img, Link} from '@chakra-ui/react';
import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

interface SiteHeaderProps {
    variant?: 'default' | 'menu' | 'subpage';
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
            <Link href="/" variant="ghost">
                <AspectRatio
                    boxSize={
                        variant == 'default'
                            ? {base: 16, mini: 20, md: 28}
                            : {base: 16, mini: 20, md: 20}
                    }
                    ratio={1 / 1}
                >
                    {variant == 'default' ? (
                        <StaticImage
                            src="../../images/logo_500px.png"
                            aria-label="site-logo"
                            alt="site-logo"
                        ></StaticImage>
                    ) : (
                        <StaticImage
                            src="../../images/logo_ghost_200px.png"
                            aria-label="site-logo"
                            alt="site-logo"
                        ></StaticImage>
                    )}
                </AspectRatio>
            </Link>
        </Center>
    );
};

export default SiteHeader;
