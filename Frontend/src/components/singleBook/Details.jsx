export function Details({ singleBook }) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="font-dm-sans text-h2">Details</h2>
			<hr className="bg-text-100" />
			<div className="font-inter text-body-1 flex flex-col gap-1">
				<p>ISBN: {singleBook.isbn}</p>
				<p>Pages: {singleBook.pages}</p>
				<p>Category: {singleBook.category}</p>
				<p>Language: {singleBook.language}</p>
			</div>
		</div>
	)
}
