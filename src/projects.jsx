import React, { useState } from "react";
import { ProjectsList } from "./components/ProjectsList";
import { SearchProjects } from "./components/Search";

const initial_projects = [
    {
        name: "Pixel FX Editor",
        description:
            "A Raylib-based pixel effects and graphics editor built around my custom UI framework."
    },
    {
        name: "Curse and Crown",
        description:
            "A two-player hex-grid strategy game featuring merging mechanics and an MCTS-based AI."
    },
    {
        name: "Physarum Simulation",
        description:
            "A high-performance Raylib simulation of Physarum behavior using large numbers of agents and multithreading."
    }
];

export function ShowProjects() {
    const [query, setQuery] = useState("");
    const [project_name, setName] = useState("");
    const [project_description, setDescription] = useState("");
    const [projects, setProjects] = useState(initial_projects);

    function handleSubmit(event) {
        event.preventDefault();

        const new_project = {
            name: project_name,
            description: project_description
        };

        setProjects(previous_projects => [
            ...previous_projects,
            new_project
        ]);

        setName("");
        setDescription("");
    }

    return (
        <>
            <form className="AddProject" onSubmit={handleSubmit}>
                <input
                    id="NewProject"
                    type="text"
                    value={project_name}
                    onChange={event => setName(event.target.value)}
                    placeholder="New Project"
                />

                <input
                    id="NewDescription"
                    type="text"
                    value={project_description}
                    onChange={event => setDescription(event.target.value)}
                    placeholder="Project description"
                />

                <button id="AddNewProject" type="submit">
                    Add
                </button>
            </form>

            <div className="projects">
                <input
                    id="SearchProject"
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search projects..."
                />

                <ProjectsList
                projects={SearchProjects({
                        projects: projects,
                        query: query
                    })}
                />
            </div>
        </>
    );
}