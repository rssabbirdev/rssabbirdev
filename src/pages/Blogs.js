import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
	return (
		<>
			<div className='p-5'>
				<Link
					className='hover:text-blue-600 bg-blue-600 px-4 py-1 uppercase hover:bg-white '
					to='/'
				>
					Back
				</Link>
			</div>
			<div className='h-screen flex justify-center items-center'>
				<h2 className='text-4xl uppercase'>Coming Soon</h2>
			</div>
		</>
	);
};

export default Blogs;
