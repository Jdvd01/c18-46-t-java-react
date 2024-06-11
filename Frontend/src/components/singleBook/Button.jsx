export function Button({
	text,
	bgColor,
	textColor,
	width,
	paddingX = '',
	paddingY = '',
	border,
}) {
	return (
		<button
			className={`${bgColor} ${textColor} ${width} ${paddingX} ${paddingY} ${border} rounded-[4px] py-3`}
		>
			{text}
		</button>
	)
}
