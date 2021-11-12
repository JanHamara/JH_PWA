export default {
    baseStyle: {
        container: {
            w: 'full',
            h: {base: '47px', md: '55px'},
            position: 'absolute',
            top: {base: '32px', xs: '40px', md: '64px'},
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            px: {base: 8, xs: 10, md: 16},
        },
        menuWrapper: {
            h: {base: '47px', md: '55px'},
        },
        menuIcon: {
            w: {base: '32px', md: '40px'},
            h: {base: '24px', md: '30px'},
        },
        menuLabel: {
            opacity: 0,
            textStyle: 'base',
            fontSize: {base: '10px', md: '2xs'},
        },
    },
    parts: ['container', 'menuWrapper', 'menuIcon', 'menuLabel'],
};
