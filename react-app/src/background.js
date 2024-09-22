import React, { useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min'; // Import the NET effect from the correct path

export default function Bg() {
    useEffect(() => {
        const { destroy } = NET({
            el: 'body',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1200d1,
            backgroundColor: 0x130031
        });

        // Clean up the effect when the component unmounts
        return () => {
            destroy();
        };
    }, []);

    return null; // Since we're applying the effect to the body, we don't need to render anything
}
