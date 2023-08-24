import React, { useContext } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import HomeBanner from '../components/HomeBanner';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import { RefContext } from '../context/ScrollRefContext';

const Home = () => {
	const { projectRef,aboutRef } = useContext(RefContext);
	return (
		<div className=''>
			<Navbar />
			<div className='space-y-10'>
				<HomeBanner />
				<div ref={aboutRef} className='text-center'>
					<h1 className='text-4xl border-b-2 inline mx-10 pb-2 border-blue-600'>
						About Me
					</h1>
				</div>
				<About />
				<div ref={projectRef} className='text-center'>
					<h1 className='text-4xl border-b-2 inline mx-10 pb-2 border-blue-600'>
						Projects
					</h1>
				</div>
				<div className=''>
					<Projects />
				</div>
				<div className='text-center'>
					<h1 className='text-4xl border-b-2 inline mx-10 pb-2 border-blue-600'>
						Contact Me
					</h1>
				</div>
				<div className='mt-40'>
					<Contact />
				</div>
			</div>
		</div>
	);
};

export default Home;
