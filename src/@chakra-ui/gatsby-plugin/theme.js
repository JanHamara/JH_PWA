import {extendTheme} from '@chakra-ui/react';

// Global Styles
import styles from './styles';

// Foundations
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import sizes from './foundations/sizes';
import fonts from './foundations/fonts';
import fontSizes from './foundations/fontSizes';
import layerStyles from './foundations/layerStyles';
import textStyles from './foundations/textStyles';

// Base Components
import Button from './components/base/button';

// Project Components
import Navigation from './components/project/navigation';

const overrides = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles,
    breakpoints,
    sizes,
    colors,
    fonts,
    fontSizes,
    letterSpacings: {
        tighter: '-0.05em',
        tight: '0em',
        normal: '0.025',
        wide: '0.05em',
        wider: '0.18em',
        widest: '0.33em',
    },
    layerStyles,
    textStyles,
    components: {
        // ChakraUI Base Comps
        Button,
        // Project Comps
        Navigation,
    },
};

export default extendTheme(overrides);
