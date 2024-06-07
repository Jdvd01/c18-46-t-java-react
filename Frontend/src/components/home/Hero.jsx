// Assets
import { LeftArrowSVG } from '../../assets/svg/LeftArrowSVG.jsx'
import { RightArrowSVG } from '../../assets/svg/RightArrowSVG.jsx'

export const Hero = () => {
	return (
		<header className="px-4 tablet:px-8 desktop:px-10 flex flex-col justify-center items-center gap-4 pt-24 pb-7 w-full h-[600px] slider_1">
			<div className="flex justify-between w-full h-1/2 items-end">
				<div className="text-white cursor-pointer">
					<LeftArrowSVG height={'50'} width={'50'} color={'#FFFFFF'} />
				</div>

				<div className="text-white cursor-pointer">
					<RightArrowSVG height={'50'} width={'50'} color={'#FFFFFF'} />
				</div>
			</div>
			<div className="h-1/2 flex flex-col justify-end">
				<button className="text-black bg-secondary-500 w-24 h-8 rounded-[4px] cursor-pointer text-body-1 font-inter">
					Get them
				</button>
				<div className="flex justify-center mt-4 gap-4">
					<div className="h-2 w-2 rounded-xl cursor-pointer bg-white"></div>
					<div className="h-2 w-2 rounded-xl cursor-pointer bg-white opacity-[50%]"></div>
					<div className="h-2 w-2 rounded-xl cursor-pointer bg-white opacity-[50%]"></div>
				</div>
			</div>
		</header>
	)
}
