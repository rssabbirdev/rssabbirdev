import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RefContext } from '../context/ScrollRefContext';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { projectRef, aboutRef, contactRef, homeRef } =
		useContext(RefContext);
	const handleHomeScroll = () => {
		homeRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleProjectScroll = () => {
		projectRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleAboutScroll = () => {
		aboutRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleContactScroll = () => {
		contactRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const menuItems = (
		<>
			<li
				onClick={handleHomeScroll}
				className='h-full w-full hover:bg-blue-600 cursor-pointer p-5'
			>
				Home
			</li>
			<li
				onClick={handleAboutScroll}
				className='h-full w-full hover:bg-blue-600 cursor-pointer p-5'
			>
				About
			</li>
			<li
				onClick={handleProjectScroll}
				className='h-full w-full hover:bg-blue-600 cursor-pointer p-5'
			>
				Projects
			</li>
			<li
				onClick={handleContactScroll}
				className='h-full w-full hover:bg-blue-600 cursor-pointer p-5'
			>
				Contact
			</li>
			<Link
				to='/blogs'
				className='h-full w-full hover:bg-blue-600 cursor-pointer p-5'
			>
				Blogs
			</Link>
		</>
	);
	return (
		<nav className=''>
			<div className='fixed z-30 text-white bg-slate-900 w-full h-16 flex items-center uppercase'>
				<div className='w-full hidden md:flex justify-center items-center'>
					<ul className='flex justify-center items-center'>
						{menuItems}
					</ul>
				</div>
				<div
					className='md:hidden'
					onClick={() => setShowMenu(!showMenu)}
				>
					{showMenu ? (
						<MdClose className='text-white text-3xl ml-5 cursor-pointer' />
					) : (
						<HiMenu className='text-white text-3xl ml-5 cursor-pointer' />
					)}
				</div>
			</div>
			<ul
				onClick={() => setShowMenu(false)}
				className={`fixed md:hidden ${
					showMenu
						? 'top-16 opacity-100'
						: '-top-[600px] opacity-100'
				} flex flex-col justify-center items-center bg-slate-900 w-full transition-all  z-20`}
			>
				{menuItems}
				<div className='absolute top-0 h-screen -z-30 w-full'></div>
			</ul>
		</nav>
	);
};

export default Navbar;
