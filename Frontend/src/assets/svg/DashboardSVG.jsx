export const DashboardSVG = ({
	width = '24',
	height = '24',
	color = '#000000',
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 25"
			fill={color}
		>
			<g clip-path="url(#clip0_613_1309)">
				<path
					d="M4 13.5H10C10.55 13.5 11 13.05 11 12.5V4.5C11 3.95 10.55 3.5 10 3.5H4C3.45 3.5 3 3.95 3 4.5V12.5C3 13.05 3.45 13.5 4 13.5ZM4 21.5H10C10.55 21.5 11 21.05 11 20.5V16.5C11 15.95 10.55 15.5 10 15.5H4C3.45 15.5 3 15.95 3 16.5V20.5C3 21.05 3.45 21.5 4 21.5ZM14 21.5H20C20.55 21.5 21 21.05 21 20.5V12.5C21 11.95 20.55 11.5 20 11.5H14C13.45 11.5 13 11.95 13 12.5V20.5C13 21.05 13.45 21.5 14 21.5ZM13 4.5V8.5C13 9.05 13.45 9.5 14 9.5H20C20.55 9.5 21 9.05 21 8.5V4.5C21 3.95 20.55 3.5 20 3.5H14C13.45 3.5 13 3.95 13 4.5Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_613_1309">
					<rect
						width={width}
						height={height}
						fill={color}
						transform="translate(0 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}
