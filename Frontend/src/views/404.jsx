import { Link } from 'react-router-dom'

export const ErrorPage = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen gap-3">
			<h1 className="font-dm-sans text-h1">404 Page not found!</h1>
			<Link
				to={'/'}
				className=" bg-primary-500 text-white py-4 w-80 font-inter text-body-1 rounded-md text-center"
			>
				Back home
			</Link>
		</div>
	)
}
