import {Stack, StackDirection, Img, Link} from '@chakra-ui/react';
import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

interface SocialMediaProps {
    dir?: StackDirection;
    size?: number;
}

const SocialMedia = ({dir = 'row', size = 20}: SocialMediaProps) => {
    return (
        <Stack
            direction={dir}
            justifyContent="center"
            alignItems="center"
            spacing={{base: 6, mini: 8}}
        >
            <Link
                href="https://www.facebook.com/jancihamaramain/"
                target="_blank"
                opacity={0.6}
                _hover={{opacity: 1}}
                transition="opacity 1s"
                variant="ghost"
            >
                <StaticImage
                    width={18}
                    src={'../../images/social-media/facebook.png'}
                    alt="social-media-link"
                    placeholder="none"
                    loading="eager"
                ></StaticImage>
            </Link>

            <Link
                href="https://www.instagram.com/watch_us_see/"
                target="_blank"
                opacity={0.6}
                _hover={{opacity: 1}}
                transition="opacity 1s"
                variant="ghost"
            >
                <StaticImage
                    width={18}
                    src={'../../images/social-media/instagram.png'}
                    alt="social-media-link"
                    placeholder="none"
                    loading="eager"
                ></StaticImage>
            </Link>

            <Link
                href="https://www.linkedin.com/in/janhamarauofg/"
                target="_blank"
                opacity={0.6}
                _hover={{opacity: 1}}
                transition="opacity 1s"
                variant="ghost"
            >
                <StaticImage
                    width={18}
                    src={'../../images/social-media/linkedin.png'}
                    alt="social-media-link"
                    placeholder="none"
                    loading="lazy"
                ></StaticImage>
            </Link>

            <Link
                href="https://github.com/JanHamara"
                target="_blank"
                opacity={0.6}
                _hover={{opacity: 1}}
                transition="opacity 1s"
                variant="ghost"
            >
                <StaticImage
                    width={18}
                    src={'../../images/social-media/github.png'}
                    alt="social-media-link"
                    placeholder="none"
                    loading="lazy"
                ></StaticImage>
            </Link>
        </Stack>
    );
};

export default SocialMedia;
