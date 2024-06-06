import { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

// Assets
import { LoginSVG } from '../assets/svg/LoginSVG.jsx'
import { MenuSVG } from '../assets/svg/MenuSVG.jsx'
import { CartSVG } from '../assets/svg/CartSVG.jsx'
import { HomeSVG } from '../assets/svg/HomeSVG.jsx'

export const Navbar = () => {
	const [show, setShow] = useState(false)
	const currentLocation = useLocation()

	const token = false

	return (
		<div
			className={`bg-${
				currentLocation.pathname == '/' && !show ? 'none' : 'primary-500'
			}  text-white flex justify-between items-center flex-wrap tablet:flex-nowrap p-4 tablet:py-5 tablet:px-8 fixed top-0 min-w-full z-50`}
		>
			<Link to={'/'}>
				<img src="" alt="Logo" />
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
					<li>
						<Link to={'/'} className="flex gap-2 items-center">
							<HomeSVG height={'24'} width={'24'} color={'#FFFFFF'} />
							<span className="font-inter text-body-1 tablet:hidden desktop:block">
								Home
							</span>
						</Link>
					</li>
					<li>
						<Link to={'/placeholder'} className="flex gap-2 items-center">
							<CartSVG height={'24'} width={'24'} color={'#FFFFFF'} />
							<span className="font-inter text-body-1 tablet:hidden desktop:block">
								Cart
							</span>
						</Link>
					</li>
					<li>
						{token ? (
							<Link to={'/'} className="flex gap-2 items-center">
								<LoginSVG height={'24'} width={'24'} color={'#FFFFFF'} />
								<span className="font-inter text-body-1 tablet:hidden desktop:block">
									Log out
								</span>
							</Link>
						) : (
							<Link to={'/auth'} className="flex gap-2 items-center">
								<LoginSVG height={'24'} width={'24'} color={'#FFFFFF'} />
								<span className="font-inter text-body-1 tablet:hidden desktop:block">
									Log in
								</span>
							</Link>
						)}
					</li>
				</ul>
			</div>
		</div>
	)
}
