import { StarSVG } from '../../assets/svg/StarSVG'

export function Review() {
	const rating = Array.from({ length: 5 }, () => 1)

	return (
		<div className="px-2 py-4 flex flex-col gap-4">
			<div className="flex justify-between font-inter text-body-1">
				<div className="flex gap-4">
					<img
						src="https://placehold.co/500"
						alt=""
						height={54}
						width={54}
						className="rounded-full"
					/>
					<div>
						<p>Rafael Mendoza</p>
						<span className="flex gap-1">
							{rating.map((_, index) => (
								<StarSVG width="24" height="24" color="#FFFFFF" key={index} />
							))}
						</span>
					</div>
				</div>
				<p>June 10, 2024</p>
			</div>
			<p className="font-inter text-body-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt
				quibusdam expedita soluta, unde adipisci quaerat non esse. Minus nemo
				ipsa incidunt iusto eum sed molestias provident quisquam sit laudantium!
			</p>
			<hr className="bg-text-100" />
		</div>
	)
}
