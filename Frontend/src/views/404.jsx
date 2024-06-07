import { Link } from 'react-router-dom';

// Assets
import image from '../assets/404.gif';

export const ErrorPage = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-gray-100 p-6">
			<div className="flex justify-center items-center w-full">
				<img
					src={image}
					alt="404 Error"
					className="w-full max-w-md h-auto mb-6"
				/>
			</div>
			<h1 className="font-dm-sans text-3xl md:text-5xl text-gray-900 text-center">
				Page Not Found <span role="img" aria-label="frustrated face">😖</span>
			</h1>
			<Link
				to={'/'}
				className="bg-primary-500 text-white py-4 px-8 font-inter text-body-1 rounded-md text-center hover:bg-primary-700 transition-colors mt-4"
			>
				¡Get me out of here!
			</Link>
		</div>
	);
};
