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

const paragraphBase = {
    textTransform: 'uppercase',
    letterSpacing: 'paragraph',
    fontSize: 'md',
    lineHeight: '2',
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

const heading = {
    ...primary,
    ...paragraphBase,
    fontSize: {base: '17px', md: '22px', lg: '22px', xxl: '26px'},
    fontStyle: 'normal',
    fontWeight: 100,
    color: 'paragraph',
};

const roles = {
    ...primary,
    ...paragraphBase,
    fontStyle: 'normal',
    fontWeight: 100,
    color: 'paragraph',
};

const paragraph = {
    ...primary,
    ...paragraphBase,
    fontStyle: 'normal',
    fontWeight: 100,
    color: 'paragraph',
};

export default {
    base,
    primary,
    secondary,
    heading,
    paragraph,
    roles,
    heroSubheading,
};
