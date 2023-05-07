import fs, { readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export interface PostDataModel {
    id: string,
    date: string,
    title: string,
}

export function getSortedPostsData(): PostDataModel[] {
    const filenames = fs.readdirSync(postsDir);
    const allPostsData = filenames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDir, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContent);
        const {date, title, ...remainder} = matterResult.data

        return {
            id,
            date,
            title,
            ...remainder,
        }
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date){
            return 1
        } else {
            return -1
        }
    });
}

export function getAllPostIds() {
    const fileNames = readdirSync(postsDir);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            }
        };
    });
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDir, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContent);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}