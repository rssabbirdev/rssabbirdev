import React, { createContext, useRef } from 'react';
export const RefContext = createContext();
const ScrollRefContext = ({ children }) => {
	const projectRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();
	const homeRef = useRef();
	return (
		<RefContext.Provider
			value={{ homeRef, projectRef, aboutRef, contactRef }}
		>
			{children}
		</RefContext.Provider>
	);
};

export default ScrollRefContext;
