import { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

// Assets
import { LoginSVG } from '../assets/svg/LoginSVG.jsx'
import { MenuSVG } from '../assets/svg/MenuSVG.jsx'
import { CartSVG } from '../assets/svg/CartSVG.jsx'
import { HomeSVG } from '../assets/svg/HomeSVG.jsx'
import { BookSVG } from '../assets/svg/BookSVG.jsx'
import { DashboardSVG } from '../assets/svg/DashboardSVG.jsx'

// Logos
import { WhiteLogoSVG } from '../assets/logo/WhiteLogoSVG.jsx'
import { BlueLogoSVG } from '../assets/logo/BlueLogoSVG.jsx'

import useAuth from '../hooks/useAuth.js'

export const Navbar = () => {
	const [show, setShow] = useState(false)
	const [direction, setDirection] = useState('up')
	const currentLocation = useLocation()

	const isCurrentTab = (currentTab) => currentLocation.pathname == currentTab

	const controlDirection = () => {
		if (window.scrollY > 0) {
			setDirection('down')
		} else {
			setDirection('up')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', controlDirection)
		return () => {
			window.removeEventListener('scroll', controlDirection)
		}
	}, [])

	const { token, dispatchLogout } = useAuth()

	return (
		<div
			className={`${
				currentLocation.pathname == '/' && !show && direction == 'up'
					? 'bg-none'
					: 'bg-primary-500'
			} text-white flex justify-between items-center flex-wrap tablet:flex-nowrap p-4 tablet:py-5 tablet:px-8 fixed top-0 min-w-full z-50`}
		>
			<Link to={'/'} className="flex justify-center items-center">
				<WhiteLogoSVG />
			</Link>
			<button className="flex tablet:hidden" onClick={() => setShow(!show)}>
				<MenuSVG height={'24'} width={'24'} color={'#FFFFFF'} />
			</button>
			<div
				className={`${
					show ? 'flex' : 'hidden'
				} tablet:flex w-full justify-start tablet:justify-end gap-2 pt-2`}
			>
				<ul className={`${show ? 'block' : 'hidden'} tablet:flex gap-8`}>
					<li
						className={`${
							isCurrentTab('/') ? 'border-b-2 border-white' : ''
						} w-min`}
					>
						<Link to={'/'} className="flex gap-2 items-center">
							<HomeSVG height={'24'} width={'24'} color={'#FFFFFF'} />
							<span className="font-inter text-body-1 tablet:hidden desktop:block">
								Home
							</span>
						</Link>
					</li>
					<li
						className={`${
							isCurrentTab('/cart') ? 'border-b-2 border-white' : ''
						} w-min`}
					>
						<Link to={'/cart'} className="flex gap-2 items-center">
							<div className="relative">
								<CartSVG height={'24'} width={'24'} color={'#FFFFFF'} />
								{/* number of items in cart */}
								<div className="absolute rounded-full bg-red-500 text-white px-2 top-[-50%] right-[-50%] text-body-3 font-inter">
									3
								</div>
							</div>
							<span className="font-inter text-body-1 tablet:hidden desktop:block">
								Cart
							</span>
						</Link>
					</li>

					{token ? (
						<>
							<li
								className={`${
									isCurrentTab('/dashboard') ? 'border-b-2 border-white' : ''
								} w-min`}
							>
								<Link to={'/dashboard'} className="flex gap-2 items-center">
									<DashboardSVG height={'24'} width={'24'} color={'#FFFFFF'} />
									<span className="font-inter text-body-1 tablet:hidden desktop:block">
										Panel
									</span>
								</Link>
							</li>
							<li
								className={`${
									isCurrentTab('/books') ? 'border-b-2 border-white' : ''
								}`}
							>
								<Link to={'/books'} className="flex gap-2 items-center">
									<BookSVG height={'24'} width={'24'} color={'#FFFFFF'} />
									<span className="font-inter text-body-1 tablet:hidden desktop:block">
										My books
									</span>
								</Link>
							</li>
							<li>
								<Link
									onClick={() => dispatchLogout()}
									to={'/'}
									className="flex gap-2 items-center"
								>
									<LoginSVG height={'24'} width={'24'} color={'#FFFFFF'} />
									<span className="font-inter text-body-1 tablet:hidden desktop:block">
										Log out
									</span>
								</Link>
							</li>
						</>
					) : (
						<li
							className={`${
								isCurrentTab('/auth') ? 'border-b-2 border-white' : ''
							} `}
						>
							<Link to={'/auth'} className="flex gap-2 items-center">
								<LoginSVG height={'24'} width={'24'} color={'#FFFFFF'} />
								<span className="font-inter text-body-1 tablet:hidden desktop:block">
									Log in
								</span>
							</Link>
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}
