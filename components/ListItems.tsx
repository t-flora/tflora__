import { Icon } from '@iconify/react';
import Image from 'next/image';

type IconItem = {
    iconId: string | string[],
    text: string,
    color?: string,
    fontSize?: number,
}

export const ListItemIconify: React.FC<IconItem> = ( { iconId, text, color, fontSize = 64 }) => {

    const ListIcons = () => {
        if (typeof iconId === "string") {
            return <Icon icon={iconId} fontSize={64} color={color ?? ""} />
        } else {
            return (
                <div className='flex space-x-4'>
                {iconId.map((icon, idx) => {
                    return (
                            <Icon key={idx} icon={icon} fontSize={fontSize} color={color ?? ""} />
                    );
                })}
                </div>
            )
            }
        }

    return ( 
    <li className="flex items-center">
        <div className="w-1/2">
            <ListIcons />
        </div>
        <div className="w-1/2">
            <span>{text}</span>
        </div>
    </li>
)};

export const ListItemImage = ({width = 64, height = 64, src, alt, text}: any) => {
    return (
        <li className="flex items-center">
            <div className="w-1/2">
                <Image width={width} height={height} src={src} alt={alt}/>
            </div>
            <div className="w-1/2">
                <span>{text}</span>
            </div>
        </li>
    )
}
