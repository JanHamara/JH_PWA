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
        xl: '780px',
    },
    textStyle: 'paragraph',
    textAlign: 'center',
    fontSize: {
        base: '9.5px',
        mini: '11px',
        xs: '14px',
        md: '14px',
        lg: 'base',
        max: '20px'
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
        px: {base: '7px', md: '8px'},
        py: {base: '3px', md: '6px'},
        textTransform: 'uppercase',
        fontWeight: 'medium',
        letterSpacing: 'wider',
        fontSize: {
            base: '6.5px',
            mini: '8.5px',
            xs: '9px',
            md: '12px',
            lg: '12px',
        },
        lineHeight: {
            base: '11px',
            mini: '17px',
            xs: '18px',
            md: '12px',
            lg: '12px',
        },
    },

    constraintMax: {
        ...pageBase,
    },

    constraintProjectMax: {
        ...pageBase,
        maxWidth: 'container.lg',
        paddingLeft: {base: 8, xs: 10, md: 16},
        paddingRight: {base: 8, xs: 10, md: 16},
        pt: {base: 4, md: 0},
        pb: {base: 20, xs: 24, md: 24},
    },

    constraintMaxMobile: {
        ...pageBase,
        paddingLeft: {base: 8, xs: 10, md: 16},
        paddingRight: {base: 8, xs: 10, md: 16},
    },
};
