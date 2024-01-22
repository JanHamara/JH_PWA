const primary = {
    fontFamily: 'heading',
    fontSize: 'base',
    fontStyle: 'normal',
    color: 'white',
    fontWeight: 300,
};

const secondary = {
    ...primary,
    fontWeight: 'normal',
};

const contentBase = {
    textTransform: 'uppercase',
    letterSpacing: 'paragraph',
    lineHeight: '2',
};

const heading = {
    ...primary,
    ...contentBase,
    fontSize: {
        base: '14px',
        mini: '17px',
        xs: '18px',
        sm: '18px',
        md: '20px',
        max: '24px'
    },
    maxW: {base: '85vw', lg: 'unset'},
    color: 'white80',
};

const paragraph = {
    ...primary,
    ...contentBase,
    fontSize: {
        base: '9.5px',
        mini: '11px',
        xs: '14px',
        md: '14px',
        lg: 'base',
        max: '20px'
    },
    fontWeight: 'light',
    color: 'white80',
};

const mediumBold = {
    ...primary,
    ...contentBase,
    fontWeight: 'medium',
};

const stack = {
    ...primary,
    ...contentBase,
    fontSize: {base: '3xs'},
    fontWeight: 200,
    textTransform: 'none',
    letterSpacing: 'wider',
    color: 'white',
};

const landingSubheading = {
    ...primary,
    color: 'white80',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: {base: '12px', mini: '14px', md: 'sm'},
    letterSpacing: {base: 'paragraph', mini: '0.12em', sm: 'paragraph', md: '0.30em'},
    width: {base: '100%', mini: '100%', sm: '100%', md: '570px'},
    maxW: {base: '100%', mini: '100%', sm: '100%', md: '570px'},
    transform: {
        base: 'translate(2px, 0)',
        mini: 'translate(0)',
        md: 'translate(8px, 0)',
        lg: 'translate(4px, 0)',
    },
};

const portfolioHeading = {
    ...mediumBold,
    maxW: {base: '85vw', lg: 'unset'},
    fontSize: {
        base: '15x',
        mini: '19px',
        xs: '20px',
        sm: '18px',
        md: '30px',
        lg: '26px',
        xxl: '26px',
    },
    letterSpacing: "wider",
    lineHeight: {
        base: '15px',
        mini: '19px',
        xs: '20px',
        sm: '18px',
        md: '30px',
        lg: '26px',
        xxl: '26px',
    }
}

const portfolioDescription = {
    ...paragraph,
    letterSpacing: "wider",
    fontSize: {
        base: '9.5px',
        mini: '11px',
        xs: '3xs',
        md: '14px',
    }
}

const projectParagraph = {
    ...paragraph,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    fontSize: {
        base: '9.5px',
        mini: '11px',
        xs: '3xs',
        md: '15px',
    },
}

export default {
    primary,
    secondary,
    heading,
    paragraph,
    mediumBold,
    stack,
    landingSubheading,
    portfolioHeading,
    portfolioDescription,
    projectParagraph
};
