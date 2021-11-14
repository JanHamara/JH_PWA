export default {
    baseStyle: {
        w: 'fit-content',
        borderRadius: 'none',
    },
    variants: {
        unstyled: {
            minW: 'fit',
            h: 'fit',
            m: 0,
            p: 0,
            _focus: {
                boxShadow: 'none',
            },
        },
    },
};
