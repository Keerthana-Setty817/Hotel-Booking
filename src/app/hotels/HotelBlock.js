"use client";
import Image from "next/image";

export default function HotelBlock({ id, name , capacity }) {
    const imageLoader = ({src}) => {
        return `./hotels/${src}.jpeg`
    };
    return(
        <div>
            <h2>{name}  {capacity}</h2>
            <Image 
            src={id} 
            width={400} 
            height={400} 
            loader={imageLoader}/>
        </div>
    );
}