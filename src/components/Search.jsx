import React from "react";
export function SearchProjects({ projects, query }) {
    return projects.filter(project =>
        project.name.toLowerCase().startsWith(query.toLowerCase())
    );
}