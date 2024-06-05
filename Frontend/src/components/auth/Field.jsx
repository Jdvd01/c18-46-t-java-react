export const Field = ({
	htmlFor,
	id,
	labelText,
	placeholder,
	icon,
	setShowPassword,
	showPassword,
	type = 'text',
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={htmlFor} className="text-body-2 font-inter">
				{labelText}
			</label>
			<div className="flex flex-col gap-2 w-full justify-center relative">
				<input
					type={type}
					id={id}
					className="border-[1px] border-text-100 rounded-lg h-[52px] px-[10px]"
					placeholder={placeholder}
				/>
				{icon ? (
					<span
						className="absolute right-[10px]"
						onClick={() => setShowPassword(!showPassword)}
					>
						{icon}
					</span>
				) : null}
			</div>
		</div>
	)
}
