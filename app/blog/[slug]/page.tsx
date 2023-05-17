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
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <article>
                <h1 className="text-4xl">{title}</h1>
                <div className="text-sm">
                    <Date dateString={date} />
                </div>
                {processedContent}
            </article>
        </>
    );
}
