import fs, { readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

const projectsDir = path.join(process.cwd(), 'projects');

export function getSortedProjectsData() {
    // TBD
}

export function getAllProjectIds() {
    const fileNames = readdirSync(projectsDir);

    return fileNames.map((file) => {
        return {
            params: {
                id: file.replace(/\.md$/, ''),
            }
        }
    })
}

export async function getProjectData(id: string) {
    const fullPath = path.join(projectsDir, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContent);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHTML = processedContent.toString();

    return {
        id,
        contentHTML,
        ...matterResult.data,
    };
}