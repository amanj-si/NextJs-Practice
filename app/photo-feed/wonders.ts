import { StaticImageData } from "next/image";
import photo1 from "./photos/photo1.jpeg";
import photo2 from "./photos/photo2.jpeg";
import photo3 from "./photos/photo3.webp";
import photo4 from "./photos/photo4.webp";
import photo5 from "./photos/photo5.webp";
import photo6 from "./photos/photo6.jpeg";

 export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
};

export const wonderImages: WonderImage[] = [
    {
        id: "1",
        name: "The Great Wall of China",
        src: photo1,
        photographer: "John Doe",
        location: "China",
    },
    {
        id: "2",
        name: "The Colosseum",
        src: photo2,
        photographer: "Jane Doe",
        location: "Italy",
    },
    {
        id: "3",
        name: "Petra",
        src: photo3,
        photographer: "John Doe",
        location: "Jordan",
    },
    {
        id: "4",
        name: "Machu Picchu",
        src: photo4,
        photographer: "Jane Doe",
        location: "Peru",
    },
    {
        id: "5",
        name: "Chichen Itza",
        src: photo5,
        photographer: "John Doe",
        location: "Mexico",
    },
    {
        id: "6",
        name: "The Roman Forum",
        src: photo6,
        photographer: "Jane Doe",
        location: "Italy",
    },
];