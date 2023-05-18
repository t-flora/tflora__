// import Date from '../../components/date';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Date from '@/components/Date';
import { PostFields, getAllPosts, getPost } from '@/lib/posts';
import markdown2Html from '@/lib/posts';

export async function getPosts( params: PostFields) {
    const postData = await getPost(params.id);
    return postData; 
}

export default async function Post({ params }: { params: { slug: string}}) {
    const post = getPost(params.slug);
    const { title, date, content } = post
    const processedContent = await markdown2Html(content);

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <article className='mb-4'>
                <h1 className="mb-4 text-4xl">{title}</h1>
                <div className="mb-4 text-sm">
                    <Date dateString={date} />
                </div>
                {processedContent}
            </article>
        </div>
    );
}
