import {Stack, StackDirection, Img, Link} from '@chakra-ui/react';
import * as React from 'react';
import {useLocation} from '@reach/router';

// Static Assets
import ABOUT from '../../../images/menu/about.png';
import STACK from '../../../images/menu/stack.png';
import PORTFOLIO from '../../../images/menu/portfolio.png';
import AWARDS from '../../../images/menu/awards.png';
import CONTACT from '../../../images/menu/contact.png';

const items = [ABOUT, STACK, PORTFOLIO, AWARDS, CONTACT];
const links = ['/about', '/techstack', '/portfolio', '/awards', '/contact'];

interface MenuProps {
    dir: StackDirection;
}

const Menu = (props: MenuProps) => {
    const {dir} = props;
    const loc = useLocation();

    return (
        <Stack
            direction={dir}
            justifyContent="center"
            alignItems="center"
            spacing={{base: 6, mini: 8, md: 8}}
        >
            {items.map((item, idx) => (
                <Link
                    href={
                        loc.pathname !== '/'
                            ? loc.href.replace(loc.pathname, '') + links[idx]
                            : links[idx]
                    }
                    key={idx}
                    variant="ghost"
                >
                    <Img
                        h={{base: 4, md: 5}}
                        src={item}
                        alt="menu-link"
                        opacity={{base: 1, md: 0.7}}
                        _hover={{opacity: 1, transform: 'scale(1)'}}
                        transition="1s opacity, 1s transform"
                    ></Img>
                </Link>
            ))}
        </Stack>
    );
};

export default Menu;
