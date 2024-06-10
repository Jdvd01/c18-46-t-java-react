export const ExpandLessSVG = ({
	width = '24',
	height = '24',
	color = '#000000',
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill={color}
		>
			<g clipPath="url(#clip0_441_11229)">
				<path
					d="M10.7585 8.38156L5.34498 14.3691C4.88501 14.8779 4.88501 15.6997 5.34498 16.2084C5.80495 16.7172 6.54799 16.7172 7.00796 16.2084L11.5959 11.1471L16.172 16.2084C16.632 16.7172 17.375 16.7172 17.835 16.2084C18.295 15.6997 18.295 14.8779 17.835 14.3691L12.4215 8.38156C11.9733 7.87281 11.2185 7.87281 10.7585 8.38156Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_441_11229">
					<rect width={width} height={height} fill={color} />
				</clipPath>
			</defs>
		</svg>
	)
}
