import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const {id, name, picture } = project;
    return (
		<Link to={`/project/${id}`} class='group relative block'>
			<img
				alt='Developer'
				src={picture}
				class='sticky inset-0 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
			/>

			<div class='p-2 relative'>
				{/* <p class='text-sm font-medium uppercase tracking-widest text-pink-500'>
					Developer
				</p> */}

				{/* <p class='text-2xl font-bold text-white opacity-50 bg-black w-fit px-4 py-2 rounded-md'>
					{name}
				</p> */}

				<div class=''>
					<div class='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
						<p class='absolute bottom-5 text-2xl font-bold text-white opacity-50 bg-black w-fit px-4 py-2 rounded-md'>
							{name}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Project;