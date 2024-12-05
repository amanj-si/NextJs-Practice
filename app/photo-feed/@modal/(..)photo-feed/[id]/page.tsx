import Link from "next/link";
import { wonderImages ,WonderImage } from "../../../wonders";
import Image from 'next/image';

export default function PhotoModalPage({params:{id}}:{
    params: {id:string}
}) {
    const photo: WonderImage | undefined = wonderImages.find((photo) => photo.id === id);

    return (
        <>
            {photo ? (
                <>
                    <Image alt={photo.name} src={photo.src} width={400} height={400} />
                    <p>Photographer: {photo.photographer}</p>
                    <p>Location: {photo.location}</p>
                    <p>photo: {photo.name}</p>
                </>
            ) : (
                <p>Photo not found</p>
            )}
        </>
    );
}