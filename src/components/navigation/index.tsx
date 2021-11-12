import * as React from 'react';
import {
    StylesProvider,
    Button,
    VStack,
    Box,
    Img,
    AspectRatio,
    Text,
    Fade,
    useDisclosure,
    useMultiStyleConfig,
    Modal,
    Center,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react';

import SiteHeader from '../site-header';
import Menu from './menu/index';

// Static Assets
import menuIcon from '../../images/menu.png';
import closeIcon from '../../images/close.png';
import navigationImage from '../../images/illustrations/about.jpg';
import siteLogoGhost from '../../images/logo_ghost_200px.png';

interface NavigationProps {
    items: NavigationItemProp[];
    location: string;
}
interface NavigationItemProp {
    href: string;
    label: string;
}
const Navigation = ({items, location, ...otherProps}: NavigationProps) => {
    const styles = useMultiStyleConfig('Navigation', {});
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <StylesProvider value={styles}>
                <Box as="nav" {...styles.container} {...otherProps}>
                    {/* <VStack>
                {items.map((item, index) => {
                    return (
                        <Link to={item.href} key={index}>
                            <Text color="red">{item.label}</Text>
                        </Link>
                    );
                })}
                </VStack> */}

                    {/* Left Side */}
                    <Box></Box>

                    {/* Right Side */}
                    <Button onClick={onOpen} role="group" variant="unstyled">
                        <VStack {...styles.menuWrapper}>
                            <AspectRatio ratio={4 / 3} {...styles.menuIcon}>
                                <Img
                                    src={menuIcon}
                                    aria-label="burger-menu-icon"
                                    alt="menu-icon"
                                ></Img>
                            </AspectRatio>

                            <Text _groupHover={{opacity: 0.8}} {...styles.menuLabel}>
                                Menu
                            </Text>
                        </VStack>
                    </Button>
                </Box>

                <Modal isOpen={isOpen} onClose={onClose} motionPreset="none" isCentered>
                    <Fade in={isOpen} animateOpacity>
                        <ModalContent>
                            <Box {...styles.container}>
                                <Box></Box>

                                <Button onClick={onClose} variant="unstyled">
                                    <VStack {...styles.menuWrapper}>
                                        <AspectRatio ratio={1 / 1} {...styles.closeIcon}>
                                            <Img
                                                src={closeIcon}
                                                aria-label="close-menu-icon"
                                                alt="close-icon"
                                            ></Img>
                                        </AspectRatio>
                                    </VStack>
                                </Button>
                            </Box>
                            <ModalBody>
                                <Center w="full" h="100vh">
                                    <SiteHeader variant="menu"></SiteHeader>

                                    <Menu location={location} dir="column"></Menu>

                                    <Box
                                        position="absolute"
                                        left="50%"
                                        bottom="calc(15vh - 56px)"
                                        transform="translate(-50%, -50%)"
                                    >
                                        [SocialMedia]
                                    </Box>
                                </Center>

                                <AspectRatio
                                    h="100vh"
                                    w={{base: '180px', md: '350px'}}
                                    position="absolute"
                                    ratio={3 / 8}
                                    top={0}
                                    left={0}
                                    filter="contrast(1.05)"
                                    opacity={{base: 0.2, md: 1}}
                                    zIndex={-2}
                                >
                                    <Img
                                        src={navigationImage}
                                        aria-label="profile-photo"
                                        alt="my-profile-photo"
                                    ></Img>
                                </AspectRatio>
                            </ModalBody>
                        </ModalContent>
                    </Fade>
                </Modal>
            </StylesProvider>
        </>
    );
};
export default Navigation;
