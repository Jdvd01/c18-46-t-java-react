import { CopyrightSVG } from '../assets/svg/CopyrightSVG.jsx'

export const Footer = () => {
	return (
		<div className="w-full bg-primary-500 text-white flex flex-col tablet:flex-row items-center gap-4 justify-between px-8 py-6">
			<p className="font-inter text-body-1 flex justify-center items-center gap-2">
				<CopyrightSVG width="24" height="24" color="#FFFFFF" />
				<span>2024 All rights reserved to BookLyn</span>
			</p>
			<p className="font-inter text-body-1 cursor-pointer">Terms of Service</p>
		</div>
	)
}
