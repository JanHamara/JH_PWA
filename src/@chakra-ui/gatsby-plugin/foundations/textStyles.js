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
    fontSize: {
        base: '14px',
        mini: '17px',
        xs: '18px',
        sm: '18px',
        md: '20px',
    },
    maxW: {base: '85vw', lg: 'unset'},
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

const stack = {
    ...primary,
    ...paragraphBase,
    fontSize: {base: '2xs', xl: '2xs'},
    textTransform: 'none',
    letterSpacing: 'wider',
    color: 'paragraph',
};

const projectHeading = {
    ...secondary,
    ...base,
    opacity: 1,
    color: 'white',
    fontFamily: 'heading',
    letterSpacing: 'widest',
    fontWeight: 'medium',
};

const projectHeaderLabel = {
    ...projectHeading,
    letterSpacing: 'widest',
    _before: {
        content: '"/"',
        color: 'white',
        fontFamily: 'heading',
        mr: 2,
    },
};

const projectParagraph = {
    ...paragraph,
    letterSpacing: '0.16em',
    lineHeight: {base: 2, md: 1.8},
};

export default {
    base,
    primary,
    secondary,
    heading,
    paragraph,
    roles,
    heroSubheading,
    stack,
    projectHeading,
    projectHeaderLabel,
    projectParagraph,
};
