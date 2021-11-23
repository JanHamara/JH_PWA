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
            mt: {base: 10, md: 16},
            w: 'full',
            ratio: 11 / 7,
        },
        pContent: {
            mt: {base: 10, md: 24},
            textStyle: 'projectParagraph',
            letterSpacing: '0.18em',
            fontSize: {
                base: '9.5px',
                mini: '11px',
                xs: '2xs',
                md: '17px',
            },
        },
        phContent: {
            mt: {base: 6, md: 24},
            textStyle: 'projectParagraph',
            letterSpacing: '0.18em',
            fontSize: {
                base: '9.5px',
                mini: '11px',
                xs: '2xs',
                md: '17px',
            },
        },
    },
    parts: ['pHeading', 'pContent', 'phContent', 'pThumbnail'],
};
