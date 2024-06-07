// Assets
import { CartSVG } from '../../assets/svg/CartSVG'
import { StarSVG } from '../../assets/svg/StarSVG'

export const Card = ({ book }) => {
	const rating = Array.from({ length: Math.floor(book.rating) }, () => 1)
	const ratingDifference = Array.from({ length: 5 - rating.length }, () => 1)

	return (
		<div className="font-inter text-body-3 w-60 rounded-lg shadow-low-elevation desktop:w-[32%]">
			<img
				className="w-full object-cover rounded-t"
				src={book.imagenURL}
				alt=""
			/>
			<div className="p-3 flex flex-col gap-2">
				<p className="text-body-3 font-inter">{book.titulo}</p>
				<div className="flex gap-4 justify-center py-2">
					{rating.map((_, index) => (
						<StarSVG width="24" height="24" color="#FFAD0D" key={index} />
					))}
					{ratingDifference.map((_, index) => (
						<StarSVG width="24" height="24" color="#FFFFFF" key={index} />
					))}
				</div>
				<div className="flex justify-between items-center">
					<p className="bg-primary-500 rounded-lg text-white text-center text-body-3 font-inter px-2 py-1">
						{book.cantidad.toFixed(2)} $
					</p>
					<span>
						<CartSVG color={'#352CE2'} />
					</span>
				</div>
			</div>
		</div>
	)
}
