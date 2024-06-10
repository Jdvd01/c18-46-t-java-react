// Components
import { CategoriesButton } from './CategoriesButton.jsx'

//Assets
import { CategorySVG } from '../../assets/svg/CategorySVG'

// Hardcode info
import { categories } from './HomeInfo'

export const Categories = () => {
	return (
		<div className="hidden desktop:flex desktop:w-[25%]">
			<div className="shadow-zero-elevation border border-text-50 rounded-2xl bg-white flex flex-col gap-6 p-6 w-full">
				<CategoriesButton
					bgColor="bg-primary-500"
					textColor="text-white"
					text="All books"
					icon={<CategorySVG color="#FFFFFF" />}
				/>
				{categories.map((category, index) => (
					<CategoriesButton
						key={index}
						bgColor="bg-tertiary-50"
						textColor="text-black"
						text={category.name}
						icon={<category.icon />}
					/>
				))}
			</div>
		</div>
	)
}
