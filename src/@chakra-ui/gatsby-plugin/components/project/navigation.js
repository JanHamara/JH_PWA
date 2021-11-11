export default {
    baseStyle: {
        container: {
            w: 'full',
            h: '55px',
            position: 'absolute',
            top: {base: '30px', md: '60px'},
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            px: {base: 8, xs: 10, sm: 16, md: 20},
        },
        menu: {
            alignSelf: 'flex-end',
        },
    },
    parts: ['container', 'menu'],
};
