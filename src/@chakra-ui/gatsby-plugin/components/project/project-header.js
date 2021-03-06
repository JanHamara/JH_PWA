export default {
    baseStyle: {
        container: {
            direction: 'column',
            px: {base: 2, md: 0},
        },
        heading: {
            mt: {base: 4, xs: 8, md: 0},
            fontSize: {base: '17px', mini: '20px', xs: '22px', md: '34px', lg: '48px'},
            fontFamily: 'body',
            fontWeight: 'black',
            letterSpacing: 'wider',
            _before: {
                content: '"/"',
                color: 'red',
                fontFamily: 'heading',
                mr: {base: 2, md: 4},
            },
        },
        header: {mt: {base: 4, md: 6}},
        headerItem: {mt: {base: 4, md: 8}, maxW: {base: '95%', md: '75%'}},
        headerItemLabel: {
            fontSize: {base: '9px', md: '14px'},
        },
        headerItemValue: {
            mt: 2,
            opacity: 1,
            fontFamily: 'heading',
            fontWeight: 'hairline',
            color: 'paragraph',
            lineHeight: {base: 5, md: 7},
            letterSpacing: 'wider',
            ml: {base: 3.5, md: 4},
            fontSize: {
                base: '10px',
                mini: '11px',
                xs: '2xs',
                md: '15px',
                lg: '17px',
                xl: '17px',
                xxl: '17px',
            },
        },
    },
    parts: ['container', 'header', 'heading', 'headerItem', 'headerItemLabel', 'headerItemValue'],
};
