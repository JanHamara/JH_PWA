const pageBase = {
    width: 'full',
    maxWidth: 'container.xxl',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: {base: 4, xxl: 0},
    paddingRight: {base: 4, xxl: 0},
};

export default {
    page: {
        ...pageBase,
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
        pb: {base: 10, md: 20},
    },

    constraintMaxMobile: {
        ...pageBase,
        paddingLeft: {base: 8, xs: 10, md: 16},
        paddingRight: {base: 8, xs: 10, md: 16},
    },
};
