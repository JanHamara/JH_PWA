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
    textAlign: 'center',
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    letterSpacing: {base: '0.14em', mini: 'wide', sm: 'wider', md: 'widest'},
    width: {base: '245px', mini: '275px', sm: '356px', md: '570px'},
    maxW: {base: '245px', mini: '275px', sm: '356px', md: '570px'},
    transform: {
        base: 'translate(2px, 0)',
        mini: 'translate(0)',
        md: 'translate(8px, 0)',
        lg: 'translate(4px, 0)',
    },
    opacity: 0.7,
};

export default {
    base,
    primary,
    secondary,
    heroSubheading,
};
