import Image from "next/image";
import React from "react";

const starRate = (rate: number) => {
    return(
        <Image src={`/image/car-search/star-rates-${rate}.svg`} alt={'star-rate'} width={92} height={16}/>
    )
}

export default starRate;