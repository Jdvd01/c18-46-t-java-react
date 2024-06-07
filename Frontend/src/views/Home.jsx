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

// Hardcode info
import { books } from '../components/home/HomeInfo.js'

export const Home = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<Hero />
			<main className="px-4 tablet:px-8 desktop:px-40">
				<div className="flex gap-4 desktop:hidden py-6">
					<CategoriesDropdown />
					<OrderButton />
				</div>
				<div className="hidden gap-4 desktop:flex">
					<SearchBar />
					<OrderButton />
				</div>
				<div className="flex items-start pb-20 desktop:pt-[60px] gap-8">
					<Categories />
					<div className="w-full desktop:w-[75%] relative flex flex-col gap-10">
						{/* Books */}
						<h1 className="font-dm-sans text-h1">All books</h1>
						<div className="w-full flex flex-row overflow-x-scroll flex-nowrap desktop:overflow-x-visible desktop:flex-wrap desktop:justify-between gap-4 pr-1 pb-2">
							{books.map((book) => (
								<Card book={book} key={book.id} />
							))}
						</div>

						{/* Icon for scroll in mobile devices */}
						<span className="absolute right-1 top-1/2 rounded-full bg-white animate-pulse tablet:hidden">
							<RightArrowSVG color="#352CE2" />
						</span>

						{/* Pagination */}
						<div className="flex justify-center gap-4">
							<Pagination />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
