'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";

export const RandomPhoto = () => {

    const [randomImage, setRandomImage] = useState([]);

    const randomImageRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=construction&client_id=pLnP0xBygHlFQDZ3xqG5xCaEJspl91tbHsKj4kPl2XE`
        );

        const dataRequest = await data.json();
        const result = dataRequest.results;
        setRandomImage(result)
        console.log(result)
    };

    useEffect(() => {
        randomImageRequest();
    }, []);

    return (
        <div className="col-12 d-flex justify-content-evenly flex-wrap">
            {randomImage.map((val) => {
                return (
                    <div  key={val.id}>
                        <Image
                            className="col-3 img-fluid img-thumbnail"
                            src={val.urls.small}
                            width={50}
                            height={50}
                        />
                    </div>
                );
            })}
        </div>
    )
}
