export const ExpandMoreSVG = ({ width, height, color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill={color}
		>
			<g clipPath="url(#clip0_400_329)">
				<path
					d="M16.1518 8.38156L11.5791 13.4429L7.00644 8.38156C6.54681 7.87281 5.80434 7.87281 5.34472 8.38156C4.88509 8.89031 4.88509 9.71213 5.34472 10.2209L10.7541 16.2084C11.2138 16.7172 11.9562 16.7172 12.4159 16.2084L17.8253 10.2209C18.2849 9.71213 18.2849 8.89031 17.8253 8.38156C17.3657 7.88586 16.6114 7.87281 16.1518 8.38156Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_400_329">
					<rect width={width} height={height} fill={color} />
				</clipPath>
			</defs>
		</svg>
	)
}
