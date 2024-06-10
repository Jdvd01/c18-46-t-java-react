import { useEffect, useState } from 'react'
import { LeftArrowSVG } from '../../assets/svg/LeftArrowSVG'
import { RightArrowSVG } from '../../assets/svg/RightArrowSVG'
import { useDispatch } from 'react-redux'
import { getBooksByPage } from '../../redux/reducers/book/bookSlice'

export const Pagination = ({ page, setPage, scrollTo, booksTop }) => {
	return (
		<>
			<button
				className="flex items-center justify-center px-4 bg-primary-500 text-white rounded-lg py-2 font-inter text-body-2"
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
				className="flex items-center justify-center px-4 bg-primary-500 text-white rounded-lg py-2 font-inter text-body-2"
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
