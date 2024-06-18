export function Field({ label, id, type = 'text', placeholder }) {
	return (
		<div className="flex flex-col w-1/2 gap-2">
			<label htmlFor={id} className="text-body-1 font-inter ">
				{label}
			</label>
			<div className="flex">
				<input
					type={type}
					name={id}
					id={id}
					autoComplete={id}
					className="border border-text-100 bg-transparent py-1.5 pl-2 rounded-lg w-full h-[52px] appearance-none"
					placeholder={placeholder}
					min={0}
				/>
			</div>
		</div>
	)
}
