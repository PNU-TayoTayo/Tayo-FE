import { useEffect, useRef, useState } from 'react';

export interface useCarouselSizeProps {
    initWidth?: number;
    initHeight?: number;
    aspectRadio?: number;
}

export default function useCarouselSize(
    { aspectRadio = 1, initWidth = 0, initHeight = 0 }: useCarouselSizeProps = {
        aspectRadio: 1,
        initWidth: 0,
        initHeight: 0,
    },
) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [{ width, height }, setCarouselSize] = useState({ width: initWidth, height: initHeight });

    useEffect(() => {
        if (!carouselRef.current) return;

        const carouselRect = carouselRef.current.getBoundingClientRect();
        setCarouselSize({
            width: 300,
            height: 400,
        });
    }, [carouselRef]);

    return {
        ref: carouselRef,
        width,
        height,
    };
}