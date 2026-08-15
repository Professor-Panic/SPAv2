 import React from "react";
 import { ProjectCard } from "./ProjectsCard";
export function ProjectsList({ projects }) {
    return (
        <div className="ProjectsList">
            {projects.map((project) => {
                return <ProjectCard project={project} />;
            })}
        </div>
    );
}