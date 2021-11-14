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
    ModalBody,
} from '@chakra-ui/react';

import {StaticImage} from 'gatsby-plugin-image';

// Static Assets
import profilePhoto from '../../images/illustrations/about.jpg';

import SiteHeader from '../site-header';
import Menu from './menu';
import SocialMedia from '../social-media';

interface NavigationProps {
    items: NavigationItemProp[];
}
interface NavigationItemProp {
    href: string;
    label: string;
}
const Navigation = ({items, ...otherProps}: NavigationProps) => {
    const styles = useMultiStyleConfig('Navigation', {});
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <StylesProvider value={styles}>
                <Box as="nav" {...styles.container} {...otherProps}>
                    {/* Left Side */}
                    <Box></Box>

                    {/* Right Side */}
                    <Button onClick={onOpen} role="group" variant="unstyled">
                        <VStack {...styles.menuWrapper}>
                            <AspectRatio ratio={4 / 3} {...styles.menuIcon}>
                                <StaticImage
                                    src="../../images/menu.png"
                                    aria-label="burger-menu-icon"
                                    alt="menu-icon"
                                    placeholder="none"
                                ></StaticImage>
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
                                            <StaticImage
                                                src="../../images/close.png"
                                                aria-label="close-menu-icon"
                                                alt="close-icon"
                                                placeholder="none"
                                            ></StaticImage>
                                        </AspectRatio>
                                    </VStack>
                                </Button>
                            </Box>
                            <ModalBody>
                                <Center w="full" h="100vh">
                                    <SiteHeader variant="menu"></SiteHeader>

                                    <Menu dir="column"></Menu>

                                    <Box
                                        position="absolute"
                                        left="50%"
                                        bottom="calc(15vh - 56px)"
                                        transform="translate(-50%, -50%)"
                                    >
                                        <SocialMedia></SocialMedia>
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
                                        src={profilePhoto}
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
