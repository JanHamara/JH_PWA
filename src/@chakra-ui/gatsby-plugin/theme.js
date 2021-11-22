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
import Link from './components/base/link';
import Button from './components/base/button';
import Modal from './components/base/modal';

// Project Components
import Navigation from './components/project/navigation';
import Clients from './components/project/clients';
import ProjectHeader from './components/project/project-header';
import Project from './components/project/project';

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
        paragraph: '0.28em',
        widest: '0.33em',
    },
    layerStyles,
    textStyles,
    components: {
        // ChakraUI Base Comps
        Link,
        Button,
        Modal,
        // Project Comps
        Navigation,
        Clients,
        ProjectHeader,
        Project,
    },
};

export default extendTheme(overrides);
