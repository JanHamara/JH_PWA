import {Stack, StackDirection, Img, Link} from '@chakra-ui/react';
import * as React from 'react';

// Static Assets
import ABOUT from '../../../images/menu/about.png';
import STACK from '../../../images/menu/stack.png';
import PORTFOLIO from '../../../images/menu/portfolio.png';
import AWARDS from '../../../images/menu/awards.png';
import CONTACT from '../../../images/menu/contact.png';

const items = [ABOUT, STACK, PORTFOLIO, AWARDS, CONTACT];
const links = ['/about', '/techstack', '/portfolio', 'awards', 'contact'];

interface MenuProps {
    dir: StackDirection;
    location: string;
}

const Menu = (props: MenuProps) => {
    const {dir, location} = props;
    return (
        <Stack
            direction={dir}
            justifyContent="center"
            alignItems="center"
            spacing={{base: 6, mini: 8, md: 8}}
        >
            {items.map((item, idx) => (
                <Link href={location + links[idx]} key={idx} variant="ghost">
                    <Img
                        h={{base: 3, md: 5}}
                        src={item}
                        alt="menu-link"
                        opacity={0.7}
                        _hover={{opacity: 1, transform: 'scale(1)'}}
                        transition="1s opacity, 1s transform"
                    ></Img>
                </Link>
            ))}

            {location}
        </Stack>
    );
};

export default Menu;
