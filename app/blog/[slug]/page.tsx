import Head from 'next/head';
import DateComponent from '@/components/DateComponent';
import { getPost } from '@/lib/posts';
import markdown2Html from '@/lib/posts';
import styles from './Post.module.css';
import { MDXProvider } from '@mdx-js/react';
// import CodeBlock from '@/components/CodeBlock';

// export async function getPosts( params: PostFields) {
//     const postData = await getPost(params.id);
//     return postData; 
// }
// const components = {
//     pre: CodeBlock,
// }

export default async function Post({ params }: { params: { slug: string}}) {
    const post = getPost(params.slug);
    const { title, date, content } = post
    const processedContent = await markdown2Html(content);

    return (
        // <MDXProvider components={components}>
            <div className={styles.a}>
                <Head>
                    <title>{title}</title>
                </Head>
                <article className='mb-4'>
                    <h1 className="mb-4 text-4xl">{title}</h1>
                    <div className="mb-4 text-sm">
                        <DateComponent dateString={date} />
                    </div>
                    <div className={styles.markdown}>
                        {processedContent}
                    </div>
                </article>
            </div>
        // </MDXProvider>
    );
}
