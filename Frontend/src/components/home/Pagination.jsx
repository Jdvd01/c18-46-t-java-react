import { useSelector } from 'react-redux'
import { LeftArrowSVG } from '../../assets/svg/LeftArrowSVG'
import { RightArrowSVG } from '../../assets/svg/RightArrowSVG'

export const Pagination = ({ page, setPage, scrollTo, booksTop }) => {
	const { pagesInfo } = useSelector((state) => state.book)

	return (
		<>
			<button
				disabled={pagesInfo.first}
				className="flex items-center justify-center px-4 bg-primary-500 text-white rounded-lg py-2 font-inter text-body-2 disabled:bg-text-300"
				onClick={() => {
					setPage((prev) => {
						if (prev <= 0) return 0
						return prev - 1
					})
					scrollTo(booksTop)
				}}
			>
				<LeftArrowSVG color="#FFFFFF" />
				<span>Previous</span>
			</button>
			<button
				disabled={pagesInfo.last}
				className="flex items-center justify-center px-4 bg-primary-500 text-white rounded-lg py-2 font-inter text-body-2 disabled:bg-text-300"
				onClick={() => {
					setPage((prev) => prev + 1)
					scrollTo(booksTop)
				}}
			>
				<span>Next</span>
				<RightArrowSVG color="#FFFFFF" />
			</button>
		</>
	)
}
