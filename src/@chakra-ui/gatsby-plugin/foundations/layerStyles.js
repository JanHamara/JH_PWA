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

    constraintMaxMobile: {
        ...pageBase,
        paddingLeft: {base: 8, xs: 10, md: 16},
        paddingRight: {base: 8, xs: 10, md: 16},
    },
};
