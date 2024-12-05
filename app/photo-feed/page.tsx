import Link from "next/link";
import { wonderImages } from "./wonders";
import Image from 'next/image';

export default function PhotoFeedPage() {
    return (
        <>
            <h1>Photo Feed</h1>
                {wonderImages.map(({ id, src, name }) => (
                    <li key={id}>
                        <Link href={`/photo-feed/${id}`}>
                            <a>
                                <Image src={src} alt={name} width={200} height={200} />
                                <p>{name}</p>
                            </a>
                        </Link>
                    </li>
                ))}
        </>
    );
}