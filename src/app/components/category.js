import Image from "next/image";
import Link from "next/link";

export default function Category({title , link , image }) {
    return (
        <>
            <li title={title}>
                <Link href={link}>
                    <Image src={image} alt={title} />
                    <p>{title}</p>
                </Link>
            </li>
        </>
    )
}