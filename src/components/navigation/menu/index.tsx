import {Stack, StackDirection, Img, Link as ChakraLink} from '@chakra-ui/react';
import * as React from 'react';
import {useLocation} from '@reach/router';
import {Link} from 'gatsby';

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
            spacing={{base: 6, mini: 8, md: 12, lg: 8}}
        >
            {items.map((item, idx) => (
                <Link to={links[idx]} role="group">
                    <ChakraLink variant="ghost">
                        <Img
                            h={{base: 3, xs: 4, md: 5}}
                            src={item}
                            alt="menu-link"
                            opacity={{base: 1, md: 0.8}}
                            _groupHover={{opacity: 1, transform: 'scale(1)'}}
                            transition="1s transform"
                        ></Img>
                    </ChakraLink>
                </Link>
            ))}
        </Stack>
    );
};

export default Menu;
