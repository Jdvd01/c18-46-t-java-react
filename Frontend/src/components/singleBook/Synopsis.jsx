export function Synopsis({ singleBook }) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-h2 font-dm-sans">Synopsis</h2>
			<hr className="bg-text-100" />
			<p className="text-body-2 font-inter">{singleBook.synopsis}</p>
		</div>
	)
}
