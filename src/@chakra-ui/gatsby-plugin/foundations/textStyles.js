const primary = {
    fontFamily: 'heading',
    fontSize: 'base',
    fontWeight: 'normal',
    color: 'white',
};

const secondary = {
    fontFamily: 'body',
    fontSize: 'base',
    fontWeight: 'normal',
    color: 'white',
};

const base = {
    ...secondary,
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    letterSpacing: 'wide',
    opacity: 0.8,
    transition: '1s opacity',
};

const heroSubheading = {
    ...secondary,
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    letterSpacing: {base: '0.14em', mini: 'wider', md: 'widest'},
    maxW: {base: '250px', mini: '356px', md: '570px'},
    transform: {base: 'translate(1px, 0)', mini: 'translate(0)', md: 'translate(4px, 0)'},
    fontSize: {base: '11px', mini: 'xs', md: 'md'},
    opacity: 0.7,
};

export default {
    base,
    primary,
    secondary,
    heroSubheading,
};
