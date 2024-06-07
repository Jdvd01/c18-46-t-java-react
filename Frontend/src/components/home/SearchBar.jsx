import { useState } from 'react'

// Assets
import { SearchSVG } from '../../assets/svg/SearchSVG'

export const SearchBar = () => {
	const [search, setSearch] = useState('')

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	return (
		<div className="flex flex-col gap-2 w-full justify-center relative my-6 desktop:w-4/6">
			<input
				type="search"
				className="border-[1px] border-text-100 rounded-lg h-[52px] pl-10 pr-[10px] font-inter text-body-2"
				placeholder="Search by title, author, keyword or ISBN"
				onChange={handleChange}
			/>
			<span
				className="absolute left-[10px]"
				onClick={() => setShowPassword(!showPassword)}
			>
				<SearchSVG />
			</span>
		</div>
	)
}
