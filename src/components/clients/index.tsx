import * as React from 'react';
import {
    StylesProvider,
    HStack,
    useMultiStyleConfig,
    Link,
    AspectRatio,
    Img,
} from '@chakra-ui/react';

import BAT_SVG from '../../images/svg/british-american-tobacco.svg';
import EASYGYM_SVG from '../../images/svg/easygym.svg';
import FIRMENICH_SVG from '../../images/svg/firmenich.svg';
import PIGUETGALLAND_SVG from '../../images/svg/piguetgalland.svg';
import UTMB_SVG from '../../images/svg/utmb.svg';
import ROGERDUBUIS_SVG from '../../images/svg/rogerdubuis.svg';

const Clients = ({...otherProps}) => {
    const styles = useMultiStyleConfig('Clients', {});

    return (
        <HStack
            w="full"
            h="80px"
            overflow="hidden"
            alignItems="center"
            justifyContent="space-between"
            px={{base: 4, xl: 8, xxl: 0}}
            {...otherProps}
        >
            <StylesProvider value={styles}>
                <HStack spacing={{base: '4vw', xl: 16, xxl: 20}} justifySelf="flex-start">
                    <AspectRatio {...styles.ratioSquare} ratio={1 / 1}>
                        {/* <Link href="https://batsupplier.com/" target="_blank" w="fit" h="fit"> */}
                        <Img
                            transform="scale(1.1)"
                            src={BAT_SVG}
                            alt="British-American-Tobacco"
                            {...styles.client}
                        ></Img>
                        {/* </Link> */}
                    </AspectRatio>

                    <AspectRatio {...styles.ratioBase} ratio={5 / 4}>
                        <Img src={EASYGYM_SVG} alt="Easygym" {...styles.client}></Img>
                    </AspectRatio>

                    <AspectRatio {...styles.ratioBase} ratio={5 / 4}>
                        <Img
                            transform="scale(.8)"
                            src={UTMB_SVG}
                            alt="UTMB"
                            {...styles.client}
                        ></Img>
                    </AspectRatio>
                </HStack>

                <HStack spacing={{base: '4vw', xl: 16, xxl: 20}} justifySelf="flex-end">
                    <AspectRatio {...styles.ratioBase} ratio={5 / 4}>
                        <Img src={FIRMENICH_SVG} alt="Firmenich" {...styles.client}></Img>
                    </AspectRatio>

                    <AspectRatio {...styles.ratioBase} ratio={5 / 4}>
                        <Img src={ROGERDUBUIS_SVG} alt="Roger Dubuis" {...styles.client}></Img>
                    </AspectRatio>

                    <AspectRatio {...styles.ratioBase} ratio={5 / 4}>
                        <Img
                            transform="scale(1.3) translateX(-6px)"
                            src={PIGUETGALLAND_SVG}
                            alt="Piguet Galland"
                            {...styles.client}
                        ></Img>
                    </AspectRatio>
                </HStack>
            </StylesProvider>
        </HStack>
    );
};
export default Clients;
