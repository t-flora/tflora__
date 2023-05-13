import fs, { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export function getPostFiles() {
    const files = readdirSync(postsDir);
    console.log(files); // Files are being found
    if (!files) {
        throw new Error("No post files found.")
    }
    return files;
}
    
export type PostFields = {
    [key: string]: any,
    content: string,
}

export function getPost(fileName: string): PostFields {
    // load markdown files, extract name equal to slug, return data requested in fields
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, `${slug}.md`);

    const fileContents = readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);

    // const postData: PostField = {}; // An empty object has type never ?
    
    // fields.forEach((field) => {
    //     if (field === "slug") {
    //         postData[field] = slug;
    //     }
    //     if (field === "content") {
    //         postData[field] = content;
    //     }
    //     if (typeof field !== undefined) {
    //         postData[field] = data[field]
    //     }
    // });

    // console.log(postData);
    // if (Object.keys(postData).length == 0) {
    //     throw new Error("No postData collected from matter")
    // }
    // console.log("Date fron within postData" + postData.date);
    // console.log("Title fron within postData" + postData.title);
    // console.log("This is matter data: " + data);
    // console.log(content);

    return {
        ...data,
        content,
    };
}

console.log("Testing getPost: " + getPost("nand2tetris.md").date);

export function getAllPosts(): PostFields[] {
    const allFiles = getPostFiles();
    console.log("This is the call to getPostFiles from getAllPosts " + allFiles)
    const allPosts = allFiles.map((filename) => {
        return getPost(filename);
    })
    console.log("This is allPosts after mapping allFiles to getPost " + allPosts)
    // .sort((postA, postB) => ( postA.date < postB.date ? 1 : -1 ));

    if (!allPosts) {
        throw new Error("allPosts is empty, null, or undefined");
    }

    return allPosts;
}

export default async function markdown2Html(postMarkdown: string) {
    const res = (await remark().use(html).process(postMarkdown)).toString();
    return res;
}