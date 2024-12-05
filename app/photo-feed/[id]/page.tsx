import Image from "next/image";
import { wonderImages , WonderImage } from "../wonders";

export default function WonderPage({ params:{id} ,}: { params: {id:string}}) {

    const photo: WonderImage | undefined = wonderImages.find((photo) => photo.id === id);

    return (
        <>
            {photo ? (
                <>
                    <h1>{photo.name}</h1>
                    <Image alt={photo.name} src={photo.src} width={400} height={400} />
                    <p>Photographer: {photo.photographer}</p>
                    <p>Location: {photo.location}</p>
                </>
            ) : (
                <p>Photo not found</p>
            )}
        </>
    );
}