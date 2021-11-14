export default {
    baseStyle: {
        textTransform: 'uppercase',
        letterSpacing: 'paragraph',
        fontSize: 'md',
        lineHeight: '2',
        opacity: 0.7,
        color: 'paragraph',
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
            fontSize: {base: '2xs', md: 'xs', lg: 'sm', xxl: 'md'},
            _before: {
                display: 'inline-block',
                content: '"/"',
                color: 'red',
                transform: 'translate(-20px, 0)',
                transition: 'transform 1s',
            },
            _after: {
                display: 'inline-block',
                content: '"/"',
                color: 'red',
                transform: 'translate(20px, 0)',
                transition: 'transform 1s',
            },
            _hover: {
                opacity: 1,
                color: 'strong',
                textDecoration: 'none',
                _before: {
                    content: '"/"',
                    color: 'red',
                    transform: 'translate(-40px, 0)',
                    opacity: 1,
                },
                _after: {
                    content: '"/"',
                    color: 'red',
                    transform: 'translate(40px, 0)',
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
