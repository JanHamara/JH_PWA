import {Box} from '@chakra-ui/react';
import * as React from 'react';

interface FadeInProps {
    delay?: number;
    duration?: number;
    children: React.ReactElement;
}

const FadeIn = (props: FadeInProps) => {
    const {delay = 300, duration = 1, children} = props;
    const [visibility, setVisibility] = React.useState('hidden');

    React.useEffect(() => {
        setTimeout(() => {
            setVisibility('visible');
        }, delay);
    }, []);

    return (
        <Box transition={`opacity ${duration}s`} className={visibility}>
            {children}
        </Box>
    );
};

export default FadeIn;
