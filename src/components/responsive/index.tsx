import React from 'react';
import {Box} from '@chakra-ui/react';

/**
 * Render the children in the DOM but visually hide them on desktop
 * @param children - isomorphic components used within a responsive design
 */
interface ResponsiveProps {
    children: any;
}
export const HideOnDesktop = ({children, ...otherProps}: ResponsiveProps) => (
    <Box display={{base: 'block', md: 'none'}} {...otherProps}>
        {children}
    </Box>
);

export const HideOnMobile = ({children, ...otherProps}: ResponsiveProps) => (
    <Box display={{base: 'none', md: 'block'}} {...otherProps}>
        {children}
    </Box>
);

export const BelowXL = ({children, ...otherProps}: ResponsiveProps) => (
    <Box display={{base: 'block', xl: 'none'}} {...otherProps}>
        {children}
    </Box>
);

export const AboveXL = ({children, ...otherProps}: ResponsiveProps) => (
    <Box display={{base: 'none', xl: 'block'}} {...otherProps}>
        {children}
    </Box>
);

export const BelowLG = ({children, ...otherProps}: ResponsiveProps) => (
    <Box display={{base: 'block', lg: 'none'}} {...otherProps}>
        {children}
    </Box>
);

export const AboveLG = ({children, ...otherProps}: ResponsiveProps) => (
    <Box display={{base: 'none', lg: 'block'}} {...otherProps}>
        {children}
    </Box>
);

export default {HideOnMobile, HideOnDesktop, BelowXL, AboveXL, BelowLG, AboveLG};
