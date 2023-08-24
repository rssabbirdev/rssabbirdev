import React from 'react';
import img from '../assets/sabbir.jpg';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const About = () => {
	

	return (
		<div className='md:grid md:grid-cols-5 w-11/12 mx-auto flex flex-col justify-center items-center gap-20'>
			<div className='rounded-md md:col-span-2 flex flex-col justify-center items-center'>
				<div className='h-16 -mb-14 mr-2 w-10/12 bg-slate-600 rounded-tl-md'></div>
				<img
					className='ml-2 h-full w-10/12 object-cover rounded-md z-10'
					src={img}
					alt=''
				/>
				<div className='h-16 -z-0 -mt-14 ml-6 w-10/12 bg-slate-600 rounded-br-md shadow-2xl'></div>
			</div>
			<div className='md:col-span-3 flex flex-col gap-10 text-center md:text-left'>
				<div>
					<h1 className='text-3xl'>MD Sabbir Hosen</h1>
					<p className='text-lg'>
						Frontend Web Developer || Expert on React
					</p>
					<p>Email: sabbir.hosen.rahat@gmail.com</p>
					<p>Phone: +971501934037</p>
					<p>Current Location: Fujairah, UAE</p>
				</div>
				<div className='flex gap-5 justify-center md:justify-start'>
					<a
						href='https://www.facebook.com/rs.sabbir.2'
						className='text-2xl hover:text-blue-700 cursor-pointer'
					>
						<BsFacebook />
					</a>
					<a
						href='https://twitter.com/rssabbir_dev'
						className='text-2xl hover:text-blue-400 cursor-pointer'
					>
						<BsTwitter />
					</a>
					<a
						href='https://www.linkedin.com/in/rssabbir-dev/'
						className='text-2xl hover:text-blue-800 cursor-pointer'
					>
						<BsLinkedin />
					</a>
					<a
						href='https://github.com/rssabbir-dev'
						className='text-2xl cursor-pointer'
					>
						<BsGithub />
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
