export default {
    global: (props) => ({
        'html, body, h1, h2, h3, h4, h5, h6, main, div, span, a, input, label, section, nav, img, svg, i, button':
            {
                // outline: '.5px #c46c00 solid',
            },
        'html, body': {
            fontFamily: 'Ingra',
            backgroundColor: 'bg',
            color: 'white',
            minH: '100vh',
            h: 'auto',
        },
        body: {
            zIndex: -2,
        },
        strong: {
            color: 'white',
            fontWeight: 'black',
        },
        '.visible': {
            opacity: 1,
        },
        '.hidden': {
            opacity: 0,
        },
        '.inlineLink': {
            opacity: 0.8,
            whiteSpace: 'nowrap',
            _hover: {
                opacity: 1,
            },
            _before: {
                content: '"/ "',
                color: 'red',
            },
            _after: {
                content: '" /"',
                color: 'red',
            },
        },
        '.sep': {
            color: 'red',
        },
        '.video-vim': {
            minHeight: {base: '250px', md: '500px'},
        },
    }),
};
