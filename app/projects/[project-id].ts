import Layout from '../layout';
import Head from 'next/head';
import { getProjectData, getAllProjectIds } from '../../lib/projects';

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);

    return (
        props: {
            projectData,
        }
    )
}

export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return (
        paths,
        fallback: false, // check fallback:false
    )
}

export default function Project({ projectData }) {
    return (
        // TBD
    )
}