import registerDragEvent from '@utils/registerDragEvent';
import { useState } from 'react';
import useCarouselSize from '@hooks/useCarouselSize';
import {carMap} from "../../mock/carmap";
import CarCard from "@components/car-search/CarCard";

const imageList = [
    'https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg',
    'https://blog.kakaocdn.net/dn/BGT7X/btqUzvTqi5h/flp39GdJH0GU6mo7cTbbhk/img.jpg',
    'https://blog.kakaocdn.net/dn/bWnmfv/btqUBwqZvwA/3CiXGt3SR0TXoOveRJxV91/img.jpg',
    'https://blog.kakaocdn.net/dn/XsLCO/btqUL8PQLwp/NZWCU2jAYKkKSXwcohBKTK/img.jpg',
    'https://blog.kakaocdn.net/dn/bG3iVL/btqUvCZPaRL/ofIjkNWJP1mj2bOG9fie51/img.jpg',
];

export default function Carousel({carList, setSelectedCarId}) {
    const [hide, setHide] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transX, setTransX] = useState(0);

    const { ref, width, height } = useCarouselSize();

    const inrange = (v: number, min: number, max: number) => {
        if (v < min) return min;
        if (v > max) return max;
        return v;
    };

    return (
        <div className={`absolute bottom-0 w-full`}>
            {/*<div className="p-4">*/}
            {/*    <div className="mb-2 whitespace-nowrap">*/}
            {/*        <h1 className="text-3xl font-bold">Carousel</h1>*/}
            {/*        <span>slide width darg</span>*/}
            {/*        <span className="ml-4">current index {currentIndex}</span>*/}
            {/*        <span className="ml-4">transX {transX}</span>*/}

            {/*        <div className="flex items-center gap-1">*/}
            {/*            <label htmlFor="hide">hide overflow</label>*/}
            {/*            <input id="hide" type="checkbox" checked={hide} onChange={() => setHide(!hide)} />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div    //viewport
                ref={ref}
                className="w-full h-320 overflow-hidden"
            >
                <div    //slider
                    className="flex gap-16"
                    style={{
                        transform: `translateX(${-currentIndex * width + transX}px)`,
                        transition: `transform ${transX ? 0 : 300}ms ease-in-out 0s`,
                    }}
                    {...registerDragEvent({
                        onDragChange: (deltaX) => {
                            setTransX(inrange(deltaX, -width, width));
                        },
                        onDragEnd: (deltaX) => {
                            const maxIndex = imageList.length - 1;

                            if (deltaX < -100) setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex));
                            if (deltaX > 100) setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex));

                            setTransX(0);
                        },
                    })}
                >
                    {/*{imageList.map((url, i) => (*/}
                    {/*    <div key={i} className="flex-shrink-0">*/}
                    {/*        <img draggable={false} src={url} alt="img" width={width} />*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    {carList.map((car, i) => (
                        <CarCard key={i} CarData={car} setSelectedCarId={setSelectedCarId}/>
                    ))}

                </div>
            </div>
        </div>
    );
}