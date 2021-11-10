export default {
    baseStyle: {
        container: {
            w: 'full',
            h: 12,
            position: 'absolute',
            top: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            px: {base: 4, md: 20},
        },
        menu: {
            alignSelf: 'flex-end',
        },
    },
    parts: ['container', 'menu'],
};
