import React from 'react'
export function ProjectCard({project}){
	return(
		<div className='ProjectCard'>
			<h2>{project.name}</h2>
			<p>{project.description}</p>
		</div>
	)
}