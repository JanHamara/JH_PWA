import {theme as base} from '@chakra-ui/react'

// https://chakra-ui.com/guides/using-fonts

export default {
    heading: `Playfair Display, ${base.fonts?.heading}`, // converts to --chakra-fonts-fontFamilies-primary
    body: `Source Sans Pro, ${base.fonts?.body}`,
    mono: 'monospace',
    serif: 'sans-serif'
}