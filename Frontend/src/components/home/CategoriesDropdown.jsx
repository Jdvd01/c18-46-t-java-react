import { useState } from 'react'

// Assets
import { CategorySVG } from '../../assets/svg/CategorySVG.jsx'
import { ExpandMoreSVG } from '../../assets/svg/ExpandMoreSVG.jsx'

// Hardcode info
import { categories } from './HomeInfo.js'

export const CategoriesDropdown = () => {
	const [open, setOpen] = useState(false)

	return (
		<div
			className="relative inline-block text-left w-1/2"
			x-data={{ open: open }}
		>
			<button
				onClick={() => setOpen(!open)}
				className="w-full h-full bg-primary-500 border border-text-100 text-white py-2 px-4 rounded-lg flex items-center justify-between"
			>
				<span className="flex gap-2">
					<CategorySVG height={'24'} width={'24'} color={'#FFFFFF'} />

					<span className="font-inter text-body-2">All books</span>
				</span>

				<ExpandMoreSVG height={'24'} width={'24'} color={'#FFFFFF'} />
			</button>

			<div
				x-show="open"
				x-transition:enter="transition ease-out duration-300"
				x-transition:enter-start="opacity-0 scale-95"
				x-transition:enter-end="opacity-100 scale-100"
				x-transition:leave="transition ease-in duration-150"
				x-transition:leave-start="opacity-100 scale-100"
				x-transition:leave-end="opacity-0 scale-95"
				className={`absolute z-50 mt-2 w-full rounded-md shadow-lg bg-white ${
					!open ? 'hidden' : ''
				}`}
			>
				<div
					className=" text-black font-inter text-body-3 rounded-lg"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu"
				>
					{categories.map((category, index) => {
						return (
							<span
								key={index}
								className={`flex items-center gap-2 px-4 py-2  hover:bg-text-100 ${
									category.first ? 'rounded-t-lg' : ''
								} ${category.last ? 'rounded-b-lg' : ''}`}
							>
								<span>{<category.icon />}</span>
								<span>{category.name}</span>
							</span>
						)
					})}
				</div>
			</div>
		</div>

		// <div className="flex flex-col justify-center relative w-1/2">
		// 	<select
		// 		id="select"
		// 		defaultValue={'DEFAULT'}
		// 		className="border-[1px] border-text-100 rounded-lg h-14 px-[10px] appearance-none"
		// 	>
		// 		<option className="w-full" value="DEFAULT">
		// 			Order by
		// 		</option>
		// 		<option className="w-full">More relevant</option>
		// 		<option className="w-full">Price: Low to high</option>
		// 		<option className="w-full">Price: High to low</option>
		// 	</select>
		// 	<span className="absolute right-[10px]">
		// 		<ExpandMoreSVG height={'24'} width={'24'} color={'#000000'} />
		// 	</span>
		// </div>
	)
}
