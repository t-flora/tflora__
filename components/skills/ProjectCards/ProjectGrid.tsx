import ProjectCard, { ProjectCardProps } from "./ProjectCard";

type ProjectGridProps = {
    projects: ProjectCardProps[],
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
            ))}
        </div>
    )
}