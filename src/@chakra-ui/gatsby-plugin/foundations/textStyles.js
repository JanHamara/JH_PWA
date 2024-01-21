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
    ...primary,
    color: 'white80',
    fontSize:{base: '11px', mini: '2xs', md: 'base'},
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: {base: 'paragraph', mini: '0.12em', sm: 'paragraph', md: '0.35em'},
    width: {base: '100%', mini: '100%', sm: '100%', md: '570px'},
    maxW: {base: '100%', mini: '100%', sm: '100%', md: '570px'},
    transform: {
        base: 'translate(2px, 0)',
        mini: 'translate(0)',
        md: 'translate(8px, 0)',
        lg: 'translate(4px, 0)',
    },
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
    fontWeight: 'semibold',
    color: 'white80',
};

const roles = {
    ...primary,
    ...paragraphBase,
    fontStyle: 'normal',
    fontWeight: 'semibold',
    color: 'white',
};

const paragraph = {
    ...primary,
    ...paragraphBase,
    fontStyle: 'normal',
    fontWeight: 'semibold',
    color: 'white80',
};

const stack = {
    ...primary,
    ...paragraphBase,
    fontSize: {base: '3xs'},
    textTransform: 'none',
    letterSpacing: 'wider',
    color: 'white',
};

const projectHeading = {
    ...secondary,
    ...base,
    opacity: 1,
    color: 'white',
    fontFamily: 'body',
    letterSpacing: 'widest',
    fontWeight: 'bold',
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
