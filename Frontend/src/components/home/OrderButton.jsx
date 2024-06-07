// Assets
import { ExpandMoreSVG } from '../../assets/svg/ExpandMoreSVG'

export const OrderButton = () => {
	return (
		<div className="flex flex-col justify-center relative w-1/2 desktop:w-1/3">
			<select
				id="select"
				defaultValue={'DEFAULT'}
				className="border-[1px] border-text-100 rounded-lg h-[52px] px-[10px] appearance-none"
			>
				<option className="w-full" value="DEFAULT">
					Order by
				</option>
				<option className="w-full">Relevance</option>
				<option className="w-full">Price: Low to high</option>
				<option className="w-full">Price: High to low</option>
			</select>
			<span className="absolute right-[10px]">
				<ExpandMoreSVG height={'24'} width={'24'} color={'#000000'} />
			</span>
		</div>
	)
}
