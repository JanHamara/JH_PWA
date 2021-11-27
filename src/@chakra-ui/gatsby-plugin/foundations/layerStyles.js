const pageBase = {
    width: 'full',
    maxWidth: 'container.xxl',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: {base: 4, xxl: 0},
    paddingRight: {base: 4, xxl: 0},
};

const paragraph = {
    maxW: {
        base: '80vw',
        sm: '90vw',
        md: '71vw',
        lg: '700px',
        xl: '900px',
        xxl: '990px',
    },
    textStyle: 'paragraph',
    textAlign: 'center',
    fontSize: {
        base: '9.5px',
        mini: '11px',
        xs: '2xs',
        md: '15px',
        lg: '17px',
        xl: '18px',
        xxl: 'md',
    },
};

export default {
    page: {
        ...pageBase,
    },

    paragraph,

    role: {
        background: 'white',
        color: 'black',
        px: {base: '7px', md: '10px'},
        py: {base: '3px', md: '8px'},
        textTransform: 'uppercase',
        fontFamily: 'heading',
        fontWeight: 'regular',
        letterSpacing: 'wider',
        fontSize: {
            base: '6.5px',
            mini: '8.5px',
            xs: '9px',
            md: '16px',
            lg: '17px',
            xl: '18px',
            xxl: '14px',
        },
        lineHeight: {
            base: '11px',
            mini: '17px',
            xs: '18px',
            md: '16px',
            lg: '17px',
            xl: '18px',
            xxl: '14px',
        },
    },

    constraintMax: {
        ...pageBase,
    },

    constraintProjectMax: {
        ...pageBase,
        maxWidth: 'container.xl',
        paddingLeft: {base: 8, xs: 10, md: 16},
        paddingRight: {base: 8, xs: 10, md: 16},
        pt: {base: 4, md: 0},
        pb: {base: 10, xs: 16, md: 24},
    },

    constraintMaxMobile: {
        ...pageBase,
        paddingLeft: {base: 8, xs: 10, md: 16},
        paddingRight: {base: 8, xs: 10, md: 16},
    },
};
