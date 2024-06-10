import { useState } from 'react'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

// Assets
import image from '../assets/authGIF.gif'

export const AuthView = () => {
	const [isLoginSelected, setIsLoginSelected] = useState(true)

	return (
		<div className="min-h-screen pt-24 tablet:pt-28 pb-6 tablet:pb-20 mx-[-16px] tablet:mx-12 desktop:mx-0 flex flex-col justify-center items-center px-4 tablet:px-8 desktop:px-40">
			<div className="shadow-low-elevation bg-white w-full rounded-2xl px-4 flex flex-col justify-center items-center">
				{/* Header text */}
				<div className="flex flex-col w-full desktop:flex-row desktop:justify-center tablet:pb-[54px] desktop:py-20">
					<div>
						<div className="flex flex-col items-center py-6 desktop:py-0">
							<h1 className="font-dm-sans text-h2 tablet:text-h1">
								Welcome to <span className="text-primary-500">BookLyn</span>
							</h1>
							<p className="text-body-3 text-center font-inter">
								A great place where you can find your{' '}
								<span className="text-primary-500">favorite books</span>.
							</p>
							<p className="text-body-3 text-center font-inter">
								Let's discover together the
								<span className="text-primary-500"> fantastic world</span> of
								reading.
							</p>
						</div>
						<div className="hidden desktop:flex items-center justify-center h-[422px] w-[422px] ">
							<img src={image} alt="Reading" />
						</div>
					</div>
					<div>
						{/* Tabs */}
						<div className="flex w-full tablet:px-14">
							<span
								className={`w-2/4 text-center flex flex-col gap-1 cursor-pointer`}
								onClick={() => setIsLoginSelected(true)}
							>
								<span
									className={`text-body-1 ${
										isLoginSelected ? 'text-primary-500' : 'text-text-200'
									}`}
								>
									Log in
								</span>
								<div
									className={`w-full h-1 rounded ${
										isLoginSelected ? 'bg-primary-500' : 'border-b-4'
									}`}
								></div>
							</span>
							<span
								className={`w-2/4 text-center flex flex-col gap-1 cursor-pointer`}
								onClick={() => setIsLoginSelected(false)}
							>
								<span
									className={`text-body-1 ${
										!isLoginSelected ? 'text-primary-500' : 'text-text-200'
									}`}
								>
									Create account
								</span>
								<div
									className={`w-full h-1 rounded ${
										!isLoginSelected ? 'bg-primary-500' : 'border-b-4'
									}`}
								></div>
							</span>
						</div>

						{/* Inputs */}
						<div className="w-full tablet:px-14 pb-6 tablet:pb-[54px]">
							{isLoginSelected ? <Login /> : <Register />}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
