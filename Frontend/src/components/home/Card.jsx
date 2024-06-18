// Assets
import { Link } from 'react-router-dom'
import { CartSVG } from '../../assets/svg/CartSVG'
import { StarSVG } from '../../assets/svg/StarSVG'

export const Card = ({ book }) => {
	const rating = Array.from({ length: Math.floor(book.averageRating) }, () => 1)
	const ratingDifference = Array.from({ length: 5 - rating.length }, () => 1)

	return (
		<div className="font-inter text-body-3 w-60 rounded-lg shadow-low-elevation desktop:w-[32%] flex flex-col">
			<Link to={`/book/${book.bookid}`} onClick={() => window.scrollTo(0, 0)}>
				<img
					className="w-full object-cover rounded-t flex-1"
					src="https://placehold.co/400"
					alt={`${book.title} cover`}
				/>
			</Link>
			<div className="p-3 flex flex-col gap-2 justify-between flex-1">
				<p className="text-body-3 font-inter">{book.title}</p>
				<div className="flex flex-col gap-4">
					<div className="flex gap-4 justify-center">
						{rating.map((_, index) => (
							<StarSVG width="24" height="24" color="#FFAD0D" key={index} />
						))}
						{ratingDifference.map((_, index) => (
							<StarSVG width="24" height="24" color="#FFFFFF" key={index} />
						))}
					</div>
					<div className="flex justify-between items-center">
						<p className="bg-primary-500 rounded-lg text-white text-center text-body-3 font-inter px-2 py-1">
							{book.price.toFixed(2)} $
						</p>
						<span className="cursor-pointer">
							<CartSVG color={'#352CE2'} />
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
