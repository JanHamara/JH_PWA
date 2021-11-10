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

// Components
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
        wider: '0.1em',
        widest: '0.2em',
    },
    layerStyles,
    textStyles,
    components: {
        Navigation,
    },
};

export default extendTheme(overrides);
