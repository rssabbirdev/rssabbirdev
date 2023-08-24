import React, {  useEffect, useState } from 'react';
import { allProjects } from '../assets/projects';
import Project from './Project';
const Projects = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		setProjects(allProjects);
	}, []);
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10'>
			{projects.map((project, index) => (
				<Project key={index} project={project} />
			))}
		</div>
	);
};

export default Projects;
