import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Card } from '../components/singleBook/Card'
import { BookDetails } from '../components/singleBook/BookDetails'
import { useEffect } from 'react'
import { getBookById } from '../redux/reducers/book/bookSlice'

export function SingleBook() {
	const { singleBook } = useSelector((state) => state.book)
	const dispatch = useDispatch()
	const params = useParams()

	useEffect(() => {
		const data = { id: params.id }
		dispatch(getBookById(data))
	}, [params.id])

	return (
		<div className="min-h-screen">
			<div className="flex px-4 tablet:px-8 desktop:px-40 pt-24 gap-10 ">
				<Card singleBook={singleBook} />
				<BookDetails singleBook={singleBook} />
			</div>
		</div>
	)
}
