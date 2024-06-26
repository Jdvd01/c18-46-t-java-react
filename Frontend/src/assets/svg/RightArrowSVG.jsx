export const RightArrowSVG = ({
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
			<path
				d="M8.38156 16.1518L13.4429 11.5791L8.38156 7.00644C7.87281 6.54681 7.87281 5.80434 8.38156 5.34472C8.89031 4.88509 9.71213 4.88509 10.2209 5.34472L16.2084 10.7541C16.7172 11.2138 16.7172 11.9562 16.2084 12.4159L10.2209 17.8253C9.71213 18.2849 8.89031 18.2849 8.38156 17.8253C7.88586 17.3657 7.87281 16.6114 8.38156 16.1518Z"
				fill={color}
			/>
		</svg>
	)
}
