import React from 'react';
import {Box} from '@chakra-ui/react';

/**
 * Render the children in the DOM but visually hide them on desktop
 * @param children - isomorphic components used within a responsive design
 */
interface ResponsiveProps {
    children: any;
}
export const HideOnDesktop = ({children}: ResponsiveProps) => (
    <Box display={{base: 'block', md: 'none'}}>{children}</Box>
);

export const HideOnMobile = ({children}: ResponsiveProps) => (
    <Box display={{base: 'none', md: 'block'}}>{children}</Box>
);

export const BelowXL = ({children}: ResponsiveProps) => (
    <Box display={{base: 'block', xl: 'none'}}>{children}</Box>
);

export const AboveXL = ({children}: ResponsiveProps) => (
    <Box display={{base: 'none', xl: 'block'}}>{children}</Box>
);

export const BelowLG = ({children}: ResponsiveProps) => (
    <Box display={{base: 'block', lg: 'none'}}>{children}</Box>
);

export const AboveLG = ({children}: ResponsiveProps) => (
    <Box display={{base: 'none', lg: 'block'}}>{children}</Box>
);

export default {HideOnMobile, HideOnDesktop, BelowXL, AboveXL, BelowLG, AboveLG};
