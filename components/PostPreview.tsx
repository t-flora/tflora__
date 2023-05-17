import { PostFields } from '../lib/posts';
import Link from 'next/link';
import Date from './Date';

export default function PostPreview({ post }: {post: PostFields}) {
    return (
        <div className='w-full mx-auto group'>
            <Link href={`/blog/${post.slug}`}>
                <div className='mt-4 space-y-2'>
                    <p className='font-semibold text-xl group-hover:underline'>
                        {post.title}
                    </p>
                    <Date dateString={post.date}/>
                </div>
            </Link>
        </div>
    );
}