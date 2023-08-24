import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { allProjects } from '../assets/projects';
import Navbar from '../components/Navbar';

const ProjectView = () => {
	const [project, setProject] = useState([]);
	const param = useParams();
	useEffect(() => {
		const singleProject = allProjects.find((p) => p.id === param.id);
		setProject(singleProject);
		console.log(singleProject);
	}, [param.id]);
	return (
		<>
			<div className='p-5'>
				<Link className='hover:text-blue-600 bg-blue-600 px-4 py-1 uppercase hover:bg-white ' to='/'>Back</Link>
			</div>
			<section >
				<div class='relative mx-auto max-w-screen-xl px-4 pb-8'>
					<div class='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
						<div class='grid grid-cols-1 gap-4 place-content-center place-items-center h-full'>
							<img
								alt='Les Paul'
								src={project?.picture}
								class=' w-full rounded-xl object-cover'
							/>
						</div>

						<div class='sticky top-0'>
							<div class='mt-8 flex justify-between'>
								<div>
									<h1 class='text-2xl font-bold'>
										{project?.name} - {project?.title}
									</h1>

									<p class='mt-0.5 text-sm'>
										Build with React
									</p>
								</div>
							</div>

							<div>
								<legend class='mb-1 mt-8 text-sm font-medium'>
									Feature
								</legend>
								<ul className='ml-6'>
									{project?.feature &&
										project?.feature.map((f) => (
											<li className='list-disc'>{f}</li>
										))}
								</ul>
							</div>

							<div class='mt-8'>
								<fieldset>
									<legend class='mb-1 text-sm font-medium'>
										Technology
									</legend>

									<div class='flow-root'>
										<div class='-m-0.5 flex flex-wrap'>
											{project?.technology &&
												project?.technology.map(
													(t, index) => (
														<label
															key={index}
															for='color_tt'
															class='cursor-pointer p-0.5'
														>
															<span class='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
																{t}
															</span>
														</label>
													)
												)}
										</div>
									</div>
								</fieldset>
							</div>

							<div className='mt-8 flex gap-5'>
								<span class='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
									<a href={project?.liveLink}>Live</a>
								</span>
								<span class='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
									<a href={project?.frontendCodeLink}>
										Frontend Code
									</a>
								</span>
								<span class='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
									<a href={project?.backendCodeLink}>
										Backend Code
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='text-center'>
					<h1 className='text-4xl border-b-2 inline mx-10 pb-2 border-blue-600'>
						Showcase
					</h1>
				</div>
				<div class='relative mx-auto max-w-screen-xl px-4 py-8'>
					<div>
						<div className='w-full md:w-[70%] mx-auto'>
							<img
								className='rounded-lg '
								src={project?.showcaseOne?.picture}
								alt=''
							/>
							<h3 className='text-xl mt-2'>
								{project?.showcaseOne?.title}
							</h3>
						</div>
					</div>
				</div>
				<div class='relative mx-auto max-w-screen-xl px-4 py-8'>
					<div>
						<div className='w-full md:w-[70%] mx-auto'>
							<img
								className='rounded-lg '
								src={project?.showcaseTwo?.picture}
								alt=''
							/>
							<h3 className='text-xl mt-2'>
								{project?.showcaseTwo?.title}
							</h3>
						</div>
					</div>
				</div>
				<div class='relative mx-auto max-w-screen-xl px-4 py-8'>
					<div>
						<div className='w-full md:w-[70%] mx-auto'>
							<img
								className='rounded-lg '
								src={project?.showcaseThree?.picture}
								alt=''
							/>
							<h3 className='text-xl mt-2'>
								{project?.showcaseThree?.title}
							</h3>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProjectView;
