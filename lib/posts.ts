import fs, { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkMdx from 'remark-mdx';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import { createElement } from 'react';

const postsDir = path.join(process.cwd(), 'app/posts');

export function getPostFiles() {
    const files = readdirSync(postsDir);
    if (!files) {
        throw new Error("No post files found.")
    }
    return files;
}
    
export type PostFields = {
    [key: string]: any,
    slug: string,
    content: string,
    title?: string,
    hidden?: boolean,
}

export function getPost(fileName: string): PostFields {
    // load markdown files, extract name equal to slug, return data requested in fields
    const slug = fileName.replace(/\.mdx?$/, "");
    const mdFullPath = path.join(postsDir, `${slug}.md`);
    const mdxFullPath = path.join(postsDir, `${slug}.mdx`);

    let fullPath;
    if (fs.existsSync(mdFullPath)) {
        fullPath = mdFullPath;
    } else if (fs.existsSync(mdxFullPath)) {
        fullPath = mdxFullPath;
    } else {
        throw new Error("No .md or .mdx file found.")
    }

    const fileContents = readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);

    if (Object.keys(data).length == 0) {
        throw new Error("No postData collected from matter")
    }

    return {
        ...data,
        slug,
        content,
    };
}

export function getAllPosts(): PostFields[] {
    const allFiles = getPostFiles();
    // console.log("This is the call to getPostFiles from getAllPosts " + allFiles)
    const allPosts = allFiles.map((filename) => {
        return getPost(filename);
    })

    if (!allPosts) {
        throw new Error("allPosts is empty, null, or undefined");
    }

    return allPosts;
}

export default async function markdown2Html(postMarkdown: string) {
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(remarkMdx)
        .use(rehypeReact, {
            createElement: createElement,
        })

    const processedContent = await processor.processSync(postMarkdown).result;
    // const res = await remark().use(html).process(postMarkdown);
    // return res.toString();
    return processedContent;
}