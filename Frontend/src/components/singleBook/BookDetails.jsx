import { Details } from './Details'
import { Header } from './Header'
import { Review } from './Review'
import { Synopsis } from './Synopsis'

export function BookDetails({ singleBook }) {
	return (
		<div className="flex flex-col gap-8 w-[70%]">
			<Header singleBook={singleBook} />
			<Details singleBook={singleBook} />
			<Synopsis singleBook={singleBook} />
			<div>
				<h2 className="font-dm-sans text-h2 mb-2">Reviews</h2>
				<hr className="bg-text-100" />
				<Review />
				<Review />
				<Review />
				<Review />
			</div>
		</div>
	)
}
