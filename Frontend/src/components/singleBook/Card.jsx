import { StarSVG } from '../../assets/svg/StarSVG'
import { Button } from './Button.jsx'

export function Card({ singleBook }) {
	const rating = Array.from({ length: 5 }, () => 1)
	return (
		<div className="w-[30%] ">
			<div className="max-h-min bg-white shadow-low-elevation rounded-lg">
				<div>
					<img src="https://placehold.co/500" alt="" className="rounded-t-lg" />
				</div>
				<div className="flex flex-col gap-3 p-6">
					<Button
						width="w-full"
						text={'Add to cart'}
						bgColor="bg-primary-500"
						textColor="text-white"
					/>
					<Button
						border="border-2 border-primary-500"
						width="w-full"
						text={'Buy now'}
						bgColor="bg-white"
						textColor="text-primary-500"
					/>

					<div className="flex gap-4 justify-center ">
						{rating.map((_, index) => (
							<StarSVG width="24" height="24" color="#FFFFFF" key={index} />
						))}
					</div>
					<div className="flex flex-col items-center gap-4">
						<p className="font-inter text-body-1">Rate this book</p>
						<Button
							paddingX="px-7"
							paddingY="py-2"
							text="Write a review"
							bgColor="bg-primary-500"
							textColor="text-white"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
