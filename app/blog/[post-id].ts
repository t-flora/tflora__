// import Date from '../../components/date';
import Head from 'next/head';
import { PostDataModel, getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export async function getPosts( params: PostDataModel) {
    const postData = await getPostData(params.id);
    return postData; 
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ title, date, id }: PostDataModel) {
    return (
        {// TBD}
    );
}
