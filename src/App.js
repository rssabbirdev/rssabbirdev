import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router';

function App() {
  return (
		<div className='bg-slate-800 text-white'>
			<RouterProvider router={router} />
		</div>
  );
}

export default App;
