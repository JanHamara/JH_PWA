import {theme as base} from '@chakra-ui/react';

// https://chakra-ui.com/guides/using-fonts

export default {
    heading: `Ingra, ${base.fonts?.heading}, serif`, // converts to --chakra-fonts-fontFamilies-primary
    body: `Ingra, ${base.fonts?.body}, serif`,
    mono: 'monospace',
    serif: 'sans-serif',
};
