export default {
    baseStyle: {
        pHeading: {
            mt: {base: 14, md: 24},
            px: {base: 2, md: 0},
            fontSize: {base: '14px', md: 'md'},
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            _before: {
                content: '"/"',
                color: 'red',
                fontFamily: 'heading',
                mr: {base: 2, md: 4},
            },
        },
        pThumbnail: {
            mt: {base: 10, md: 20},
            w: 'full',
            ratio: 11 / 7,
        },
        pHalfThumbnail: {
            w: 'full',
            ratio: 11 / 5,
        },
        pContent: {
            mt: {base: 10, md: 20},
            px: {base: 2, md: 0},
            textStyle: 'projectParagraph',
        },
        phContent: {
            mt: {base: 6, md: 8},
            px: {base: 2, md: 0},
            textStyle: 'projectParagraph',
        },
        pVideo: {
            mt: {base: 10, md: 20},
            w: 'full',
        },
        pButton: {
            mt: {base: 12, xs: 16, md: 20},
        },
    },
    parts: ['pHeading', 'pContent', 'phContent', 'pThumbnail', 'pButton', 'pVideo'],
};
