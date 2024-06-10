import { StarSVG } from '../../assets/svg/StarSVG'

export function Header({ singleBook }) {
	const rating = Array.from({ length: 5 }, () => 1)

	return (
		<div className="flex flex-col gap-1">
			<h1 className="font-dm-sans text-h1">{singleBook.title}</h1>
			<p className="font-inter text-body-1">{singleBook.author}</p>
			<div className="flex gap-6 items-center">
				<span className="flex gap-2 items-center">
					{rating.map((_, index) => (
						<StarSVG width="24" height="24" color="#FFFFFF" key={index} />
					))}
				</span>
				<p className="font-inter flex gap-2 items-center">
					<span className="text-body-1">4.5</span>
					<span className="text-body-3 text-text-300">
						2.500 ratings. 64.000 reviews
					</span>
				</p>
			</div>
			<div className="flex gap-6 items-center">
				<p className="text-primary-500 text-h2 font-dm-sans">
					$ {singleBook.price.toFixed(2)}
				</p>
				<p className="font-inter text-body-1">Stock: {singleBook.stock}</p>
			</div>
		</div>
	)
}
