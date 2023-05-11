// import Date from '../../components/date';
import Head from 'next/head';
import Date from '@/components/Date';
import { PostDataModel, getAllPostIds, getPostData } from '@/lib/posts';

export async function getPosts( params: PostDataModel) {
    const postData = await getPostData(params.id);
    return postData; 
}

export default function Post({ title, date, contentHtml }: PostDataModel) {
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
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
        </>
    );
}
