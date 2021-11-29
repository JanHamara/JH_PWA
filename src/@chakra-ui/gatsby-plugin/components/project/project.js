export default {
    baseStyle: {
        pHeading: {
            textStyle: 'projectHeading',
            mt: {base: 14, md: 24},
            fontSize: {base: '17px', md: 'xl'},
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
            color: 'content',
            mt: {base: 10, md: 20},
            textStyle: 'projectParagraph',
            fontSize: {
                base: '9.5px',
                mini: '11px',
                xs: '2xs',
                md: '17px',
            },
        },
        pVideo: {
            mt: {base: 10, md: 20},
            w: 'full',
        },
        phContent: {
            color: 'content',
            mt: {base: 6, md: 8},
            textStyle: 'projectParagraph',
            fontSize: {
                base: '10px',
                mini: '11px',
                xs: '2xs',
                md: '17px',
            },
        },
        pButton: {
            mt: {base: 10, md: 20},
        },
    },
    parts: ['pHeading', 'pContent', 'phContent', 'pThumbnail', 'pButton', 'pVideo'],
};
