import {Center, AspectRatio} from '@chakra-ui/react';
import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import FadeIn from '../fade-in';
import {Link} from 'gatsby';

interface SiteHeaderProps {
    variant?: 'default' | 'menu' | 'subpage';
}

const SiteHeader = ({variant = 'default'}: SiteHeaderProps) => {
    return (
        <Center
            position={variant == 'menu' ? 'absolute' : 'static'}
            top={0}
            // zIndex={variant == 'menu' ? '1' : '1'}
            zIndex={1}
            justifyContent={variant == 'subpage' ? {base: 'flex-start', md: 'center'} : 'center'}
            layerStyle={
                variant == 'subpage'
                    ? {base: 'constraintMaxMobile', md: 'constraintMax'}
                    : 'constraintMax'
            }
            minH={
                variant == 'subpage'
                    ? {base: '100px', mini: '100px', xs: '100px', md: '30vh'}
                    : {base: '180px', mini: '220px', xs: '260px', md: '30vh'}
            }
            h={
                variant == 'subpage'
                    ? {base: '100px', mini: '100px', xs: '100px', md: '30vh'}
                    : {base: '180px', mini: '220px', xs: '260px', md: '30vh'}
            }
            mb={variant == 'subpage' ? 0 : 0}
        >
            <FadeIn duration={variant == 'default' ? 2 : 1} delay={variant == 'default' ? 500 : 0}>
                <Link to="/">
                    <AspectRatio
                        boxSize={
                            variant == 'subpage'
                                ? {base: '45px', mini: 16, md: 16}
                                : variant == 'menu' 
                                ? {base: '45px', mini: 16, md: 20}
                                : {base: 16, mini: 16, md: 24}
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
            </FadeIn>
        </Center>
    );
};

export default SiteHeader;
