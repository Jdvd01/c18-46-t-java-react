export const StarSVG = ({ width = '24', height = '24', color = '#000000' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill={color}
			stroke="#FFAD0D"
		>
			<path
				d="M11.9998 17.27L16.1498 19.78C16.9098 20.24 17.8398 19.56 17.6398 18.7L16.5398 13.98L20.2098 10.8C20.8798 10.22 20.5198 9.12001 19.6398 9.05001L14.8098 8.64001L12.9198 4.18001C12.5798 3.37001 11.4198 3.37001 11.0798 4.18001L9.18983 8.63001L4.35983 9.04001C3.47983 9.11001 3.11983 10.21 3.78983 10.79L7.45983 13.97L6.35983 18.69C6.15983 19.55 7.08983 20.23 7.84983 19.77L11.9998 17.27Z"
				fill={color}
			/>
		</svg>
	)
}
