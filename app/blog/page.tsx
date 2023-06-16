import PostPreview from '@/components/PostPreview';
import { getAllPosts } from '@/lib/posts';
import Head from 'next/head';
import '../globals.css';

export default function Blog() {
  const allPosts = getAllPosts();
  if (Object.keys(allPosts).length==0){
    throw new Error("No data in allPosts")
  }
  const recentPosts = allPosts.map((p) => {
    const date = new Date(p.date);
    return {...p, dateString: date}
  }).sort((a, b) => b.dateString?.getTime() - a.dateString?.getTime());

  return (
    <div className='container mx-auto px-5'>
      <Head>
        <title>tflora-blog</title>
      </Head>
      <main className="justify-center p-4">
        <div className='mb-4'>
          <h1 className='header_gradient text-3xl'>Blog</h1><br />
          <p>
            Here&apos;s some stuff I&apos;ve written or am writing. <br/>
          </p>
        </div>
        <div>
          <p className='text-2xl'>Recent posts</p>
          <div className='gap-8'>
            {recentPosts.map((post) => {
              return ( !!post && !post.hidden &&
              <div key={post.title}>
                <PostPreview post={post} />
              </div>
            )})}
{/* const posts = (await Astro.glob('./blog/*.{md,mdx}')).sort(
	(a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
); */}
          </div>
        </div>
      </main>
    </div>
  );
}