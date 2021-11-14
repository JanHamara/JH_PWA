export default {
    baseStyle: {
        client: {
            opacity: 0.4,
            transition: 'opacity 1s',
            _hover: {
                opacity: 0.7,
            },
        },
        ratioSquare: {
            w: {lg: '60px', xl: '80px', xxl: '80px'},
            h: {lg: '60px', xl: '80px', xxl: '80px'},
        },
        ratioBase: {
            w: {lg: '75px', xl: '100px', xxl: '100px'},
            h: {lg: '60px', xl: '80px', xxl: '80px'},
        },
    },
    parts: ['client', 'ratioSquare', 'ratioBase'],
};
