import fs, { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export interface PostDataModel {
    id: string,
    date: string,
    title: string,
    contentHtml: string,
}

export function getPostFiles() {
    return readdirSync(postsDir);
}
    
type PostField = {
    [key: string]: any,
}

export function getPost(fileName: string, fields: []): PostField {
    // load markdown files, extract name equal to slug, return data requested in fields
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, `${fileName}`);

    const fileContents = readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);

    const postData: PostField = {}; // An empty object has type never ?
    
    fields.forEach((field) => {
        switch(field) {
            case "slug":
                postData[field] = slug;
                break;
            case "content":
                postData[field] = content;
                break;
            default:
                if (typeof data[field] !== "undefined") {
                    postData[field] = data[field];
                }
        }
    });

    return postData;
}

export function getAllPosts(fields: []) {
    const allSlugs = getPostFiles();
    const allPosts = allSlugs.map((slug) => {
        getPost(slug, fields);
    })
    .sort((postA, postB) => (  postA < postB ? 1 : -1 ));

    return allPosts;
}

export default async function markdown2Html(postMarkdown: string) {
    const res = (await remark().use(html).process(postMarkdown)).toString();
    return res;
}