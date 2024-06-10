export const CategorySVG = ({
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
			<g clipPath="url(#clip0_441_12241)">
				<path
					d="M11.1501 3.40004L7.43012 9.48004C7.02012 10.14 7.50012 11 8.28012 11H15.7101C16.4901 11 16.9701 10.14 16.5601 9.48004L12.8501 3.40004C12.4601 2.76004 11.5401 2.76004 11.1501 3.40004Z"
					fill={color}
				/>
				<path
					d="M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22Z"
					fill={color}
				/>
				<path
					d="M4 21.5H10C10.55 21.5 11 21.05 11 20.5V14.5C11 13.95 10.55 13.5 10 13.5H4C3.45 13.5 3 13.95 3 14.5V20.5C3 21.05 3.45 21.5 4 21.5Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_441_12241">
					<rect width={width} height={height} fill={color} />
				</clipPath>
			</defs>
		</svg>
	)
}
