export const CategoriesButton = ({ icon, text, bgColor, textColor }) => {
	return (
		<>
			<button
				className={`${bgColor} ${textColor} w-full flex px-[10px] py-3 gap-4 rounded-lg`}
			>
				<span>{icon}</span>
				<span className="font-inter text-body-1">{text}</span>
			</button>
		</>
	)
}
