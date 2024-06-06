export const MenuSVG = ({ width = '24', height = '24', color = '#000000' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill={color}
		>
			<g clipPath="url(#clip0_212_985)">
				<path
					d="M3.11111 19H20.8889C21.5 19 22 18.475 22 17.8333C22 17.1917 21.5 16.6667 20.8889 16.6667H3.11111C2.5 16.6667 2 17.1917 2 17.8333C2 18.475 2.5 19 3.11111 19ZM3.11111 13.1667H20.8889C21.5 13.1667 22 12.6417 22 12C22 11.3583 21.5 10.8333 20.8889 10.8333H3.11111C2.5 10.8333 2 11.3583 2 12C2 12.6417 2.5 13.1667 3.11111 13.1667ZM2 6.16667C2 6.80833 2.5 7.33333 3.11111 7.33333H20.8889C21.5 7.33333 22 6.80833 22 6.16667C22 5.525 21.5 5 20.8889 5H3.11111C2.5 5 2 5.525 2 6.16667Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_212_985">
					<rect width={width} height={height} fill={color} />
				</clipPath>
			</defs>
		</svg>
	)
}
