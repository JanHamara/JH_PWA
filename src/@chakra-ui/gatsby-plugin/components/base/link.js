export default {
    baseStyle: {
        textTransform: 'uppercase',
        letterSpacing: 'paragraph',
        fontSize: 'sm',
        fontFamily: 'body',
        lineHeight: '2',
        fontWeight: 'thin',
        opacity: 0.8,
        color: 'white',
        transition: 'opacity 1s',
        _hover: {
            opacity: 1,
        },
        _focus: {
            boxShadow: 'none',
        },
    },
    variants: {
        secondary: {
            fontSize: {
                base: '10px',
                mini: '12px',
                xs: '13px',
                md: 'base',
            },
            _before: {
                display: 'inline-block',
                content: '"/"',
                color: 'red',
                transform: {base: 'translate(-10px, 0)', md: 'translate(-20px, 0)'},
                transition: 'transform 1s',
            },
            _after: {
                display: 'inline-block',
                content: '"/"',
                color: 'red',
                transform: {base: 'translate(10px, 0)', md: 'translate(20px, 0)'},
                transition: 'transform 1s',
            },
            _hover: {
                opacity: 1,
                color: 'white',
                textDecoration: 'none',
                _before: {
                    content: '"/"',
                    color: 'red',
                    transform: {base: 'translate(-20px, 0)', md: 'translate(-40px, 0)'},
                    opacity: 1,
                },
                _after: {
                    content: '"/"',
                    color: 'red',
                    transform: {base: 'translate(20px, 0)', md: 'translate(40px, 0)'},
                    opacity: 1,
                },
            },
            _focus: {
                boxShadow: 'none',
            },
        },
        ghost: {
            _focus: {
                boxShadow: 'none',
            },
        },
    },
};
