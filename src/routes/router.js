import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../pages/Blogs';
import Home from '../pages/Home';
import ProjectView from '../pages/ProjectView';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/project/:id',
		element: <ProjectView />,
	},
	{
		path: '/blogs',
		element: <Blogs />,
	},
]);
