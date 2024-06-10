import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Functions
import { getBooksByPage } from '../redux/reducers/book/bookSlice.js'

// Components
import { Hero } from '../components/home/Hero.jsx'
import { CategoriesDropdown } from '../components/home/CategoriesDropdown.jsx'
import { OrderButton } from '../components/home/OrderButton.jsx'
import { SearchBar } from '../components/home/SearchBar.jsx'
import { Card } from '../components/home/Card.jsx'
import { Categories } from '../components/home/Categories.jsx'
import { Pagination } from '../components/home/Pagination.jsx'

// Assets
import { RightArrowSVG } from '../assets/svg/RightArrowSVG.jsx'

export const Home = () => {
	const { books, isLoading } = useSelector((state) => state.book)
	const dispatch = useDispatch()

	const [page, setPage] = useState(0)
	const booksTop = useRef(null)

	const scrollTo = (reference) => {
		reference.current.scrollIntoView()
	}

	const handleBooks = () => {
		const token = localStorage.token
		const data = {
			page,
			token,
		}
		dispatch(getBooksByPage(data))
	}

	useEffect(() => {
		handleBooks()
	}, [page])

	return (
		<div className="min-h-screen flex flex-col relative">
			<Hero />
			<main className="px-4 tablet:px-8 desktop:px-40 ">
				<div className="flex gap-4 desktop:hidden py-6">
					<CategoriesDropdown />
					<OrderButton />
				</div>
				<div className="hidden gap-4 desktop:flex" ref={booksTop}>
					<SearchBar />
					<OrderButton />
				</div>
				<div className="flex items-start pb-20 desktop:pt-[60px] gap-8">
					<Categories />
					<div className="w-full desktop:w-[75%] relative flex flex-col gap-10">
						{/* Books */}
						<h1 className="font-dm-sans text-h1">All books</h1>
						<div className="w-full flex flex-row overflow-x-scroll flex-nowrap desktop:overflow-x-visible desktop:flex-wrap desktop:justify-between gap-4 pr-1 pb-2">
							{books.length > 0 ? (
								books.map((book) => <Card book={book} key={book.id} />)
							) : (
								<p className="font-inter text-body-1">No books found!</p>
							)}
						</div>

						{/* Icon for scroll in mobile devices */}
						<span className="absolute right-1 top-1/2 rounded-full bg-white animate-pulse tablet:hidden">
							<RightArrowSVG color="#352CE2" />
						</span>

						{/* Pagination */}
						<div className="flex justify-center gap-4">
							<Pagination
								page={page}
								setPage={setPage}
								scrollTo={scrollTo}
								booksTop={booksTop}
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
