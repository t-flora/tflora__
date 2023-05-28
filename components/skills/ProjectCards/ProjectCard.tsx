import Image from "next/image"
import Link from "next/link"

export type ProjectCardProps = {
    id: number,
    title: string,
    description: string,
    img?: string,
    url: string,
}

export default function ProjectCard({ title, description, img, url }: ProjectCardProps ) {
    return (
        <div className="rounded shadow-lg overflow-hidden m-4">
            {img && <Image src={img} className="w-full" alt={title} />}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
                <div className="text-gray-300 text-base">
                    {description}
                </div>
            </div>
            <div className="font-light text-sm mt-2"><Link href={url}>link to project</Link></div>
        </div>
    )
}