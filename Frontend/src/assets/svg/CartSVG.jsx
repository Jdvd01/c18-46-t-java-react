export const CartSVG = ({ width, height, color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill={color}
		>
			<g clipPath="url(#clip0_62_225)">
				<path
					d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 3C1 3.55 1.45 4 2 4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H18C18.55 17 19 16.55 19 16C19 15.45 18.55 15 18 15H7L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.54 2.57C4.38 2.22 4.02 2 3.64 2H2C1.45 2 1 2.45 1 3ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_62_225">
					<rect width={width} height={height} fill={color} />
				</clipPath>
			</defs>
		</svg>
	)
}
