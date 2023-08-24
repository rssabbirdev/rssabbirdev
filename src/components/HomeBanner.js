import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import laptop from '../assets/laptop.png';
import { RefContext } from '../context/ScrollRefContext';
const HomeBanner = () => {
	const { homeRef } = useContext(RefContext);
	return (
		<div
			ref={homeRef}
			className='bg-slate-800 text-white h-screen w-full relative text-left p-10 md:grid grid-cols-2'
		>
			<div className='flex justify-center flex-col h-full space-y-5'>
				<div className='flex justify-center items-center gap-5 uppercase'>
					<div className='hidden md:block'>
						<h1 className='text-vertical text-2xl text-slate-600 text-stroke-title select-none'>
							Frontend Developer
						</h1>
					</div>
					<div className='space-y-5'>
						<div>
							<h1 className='text-4xl uppercase text-stroke select-none'>
								Hi, I am{' '}
							</h1>
							<h1 className='text-4xl uppercase name-title select-none'>
								<Typewriter
									options={{
										strings: [
											'Sabbir Hosen',
											'A Frontend Developer',
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</h1>
						</div>
						<div className='space-y-5'>
							<p className='text-gray-300'>
								I'm a passionate programmer and a self-motivated
								person. looking for an opportunity to work in a
								challenging organization to utilize my skills
								and knowledge to work for the growth of the
								organization.
							</p>
							<button>
								<a
									className='px-10 py-3 bg-blue-600 uppercase rounded shadow hover:shadow-md hover:bg-blue-700 transition-all'
									href='https://drive.google.com/file/d/1gTogQrWDCYdKhQEpMcsbEeyPEjg_4jR1/view'
									target='_blank'
									rel='noreferrer'
								>
									View Resume
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='h-full w-full md:flex justify-center items-center hidden'>
				<h1 className='text-lg name-title select-none absolute z-20  rotate-[29deg] mb-40 ml-24 skew-x-[30deg]'>
					<Typewriter
						options={{
							strings: ['Code', 'Eat', 'Sleep'],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<img className='h-96 z-10' src={laptop} alt='' />
				<div className='bg-[#2563eb80] h-80 w-80 rounded-full blur-3xl absolute ani'></div>
			</div>
		</div>
	);
};

export default HomeBanner;
