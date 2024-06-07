import { LeftArrowSVG } from '../../assets/svg/LeftArrowSVG'
import { RightArrowSVG } from '../../assets/svg/RightArrowSVG'

export const Pagination = () => {
	return (
		<>
			<button className="flex items-center justify-center px-4 bg-primary-500 text-white rounded-lg py-2 font-inter text-body-2">
				<LeftArrowSVG color="#FFFFFF" />
				<span>Previous</span>
			</button>
			<button className="flex items-center justify-center px-4 bg-primary-500 text-white rounded-lg py-2 font-inter text-body-2">
				<span>Next</span>
				<RightArrowSVG color="#FFFFFF" />
			</button>
		</>
	)
}
