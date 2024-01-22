export default {
    baseStyle: {
        container: {
            direction: 'column',
            px: {base: 2, md: 0},
        },
        heading: {
            mt: {base: 4, xs: 8, md: 0},
            fontSize: {base: '17px', mini: '20px', xs: '22px', md: '34px', lg: '38px'},
            fontWeight: 'medium',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            _before: {
                content: '"/"',
                color: 'red',
                fontFamily: 'heading',
                mr: {base: 2, md: 4},
            },
        },
        header: {mt: {base: 4, md: 4}},
        headerItem: {mt: {base: 4, md: 6}, maxW: {base: '95%', md: '75%'}},
        headerItemLabel: {
            fontSize: {base: '9px', md: '12px'},
            fontWeight: 'semibold',
            textTransform: 'uppercase',
            letterSpacing: 'widest',
            _before: {
                content: '"/"',
                color: 'red',
                fontFamily: 'heading',
                mr: 2,
            },
        },
        headerItemValue: {
            mt: 2,
            opacity: 1,
            fontFamily: 'heading',
            fontWeight: '200',
            color: 'white80',
            lineHeight: {base: 5, md: 7},
            letterSpacing: 'wider',
            ml: {base: 3.5, md: 4},
            fontSize: {
                base: '10px',
                mini: '11px',
                xs: '3xs',
                md: '14px',
            },
        },
    },
    parts: ['container', 'header', 'heading', 'headerItem', 'headerItemLabel', 'headerItemValue'],
};
