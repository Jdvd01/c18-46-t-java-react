import { AddCircleSVG } from '../assets/svg/AddCircleSVG'
import { ExpandMoreSVG } from '../assets/svg/ExpandMoreSVG'
import { ImageSVG } from '../assets/svg/ImageSVG'
import { Field } from '../components/bookRegister/Field'

export const BookRegister = () => {
	const categories = [
		{ name: 'Action', value: 'Action' },
		{ name: 'Adventure', value: 'Adventure' },
		{ name: 'Art', value: 'Art' },
		{ name: "Children's", value: 'Children' },
		{ name: 'Comics', value: 'Comics' },
		{ name: 'Education', value: 'Education' },
		{ name: 'Fantasy', value: 'Fantasy' },
		{ name: 'History', value: 'History' },
		{ name: 'Manga', value: 'Manga' },
		{ name: 'Music', value: 'Music' },
		{ name: 'Religion', value: 'Religion' },
		{ name: 'Science', value: 'Science' },
	]

	return (
		<main className="px-4 tablet:px-8 desktop:px-40">
			<div className="min-h-screen tablet:pt-28 pb-6 tablet:pb-20">
				{/* fondo */}
				<div className="shadow-low-elevation bg-white rounded-2xl p-10 flex flex-col">
					<h1 className="font-dm-sans text-h1">New Book Registration</h1>
					<div className="flex gap-10 mt-8">
						<div className="flex flex-col w-3/5 gap-8">
							{/* Primera fila de Registro */}
							<div className="flex flex-row gap-8">
								<Field
									label={'Book title'}
									id={'bookTitle'}
									placeholder={'The fault in our stars'}
								/>
								<Field
									label={'Author'}
									id={'author'}
									placeholder={'John Green'}
								/>
							</div>

							{/* Segunda fila */}
							<div className="flex flex-row gap-8">
								<Field
									label={'Price'}
									id={'price'}
									placeholder={'50.00'}
									type="number"
								/>
								<Field
									label={'Pages'}
									id={'pages'}
									placeholder={'500'}
									type="number"
								/>
							</div>

							{/* Tercera fila */}
							<div className="flex flex-row gap-8">
								<Field
									label={'Stock'}
									id={'stock'}
									placeholder={'15'}
									type="number"
								/>
								<Field
									label={'ISBN'}
									id={'isbn'}
									placeholder={'978-3-16-148410-0'}
								/>
							</div>

							{/* Cuarta fila */}
							<div className="flex flex-row gap-8 w-full">
								<div className="flex flex-col gap-2 flex-1">
									<label htmlFor="language" className="text-body-1 font-inter">
										Language
									</label>

									<div className="flex flex-col justify-center relative w-full">
										<select
											id="language"
											className={`border-[1px] border-text-100 rounded-lg h-[52px] px-[10px] appearance-none`}
											defaultValue={'DEFAULT'}
										>
											<option value="DEFAULT" disabled>
												Select language
											</option>
											<option>Spanish</option>
											<option>English</option>
											<option>German</option>
										</select>
										<span className="absolute right-[10px]">
											<ExpandMoreSVG
												height={'24'}
												width={'24'}
												color={'#000000'}
											/>
										</span>
									</div>
								</div>

								<div className="flex flex-col gap-2 flex-1">
									<label htmlFor="category" className="text-body-1 font-inter">
										Category
									</label>
									<div className="flex flex-col justify-center relative w-full">
										<select
											id="category"
											className={`border-[1px] border-text-100 rounded-lg h-[52px] px-[10px] appearance-none`}
											defaultValue={'DEFAULT'}
										>
											<option value="DEFAULT" disabled>
												Select category
											</option>
											{categories.map(({ name, value }, index) => (
												<option key={index} value={value}>
													{name}
												</option>
											))}
										</select>
										<span className="absolute right-[10px]">
											<ExpandMoreSVG
												height={'24'}
												width={'24'}
												color={'#000000'}
											/>
										</span>
									</div>
								</div>
							</div>

							{/* Quinta fila - Synopsis */}
							<div className="flex flex-col">
								<label htmlFor="synopsis" className="text-body-1 font-inter">
									Synopsis
								</label>
								<div className="mt-2">
									<textarea
										id="synopsis"
										name="synopsis"
										rows={5}
										cols={52}
										className="w-full rounded-lg border border-text-100 p-3 resize-none"
										placeholder="Enter a synopsis of the book"
									/>
								</div>
							</div>

							<div className="flex items-center justify-center">
								<button className="bg-primary-500 text-white rounded-md py-3 font-inter text-body-2 px-36">
									<span>Register Now</span>
								</button>
							</div>
						</div>

						{/*   Portada del libro */}
						<div className="w-2/5">
							<label
								htmlFor="cover-photo"
								className="text-body-1 font-inter flex justify-center"
							>
								Cover Book
							</label>
							<div className="flex flex-col justify-center items-center rounded-lg border-[3px] border-dashed border-tertiary-500 bg-tertiary-100 px-6 py-20">
								<ImageSVG width="150" height="150" />
								<div className="mt-4 flex text-sm leading-6 text-gray-600">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
									>
										<span>Upload a file</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</label>
									<p className="pl-1">or drag and drop</p>
								</div>
								<p className="text-xs leading-5 text-gray-600">
									PNG, JPG, GIF up to 10MB
								</p>
							</div>
							<div className="flex items-center justify-center mt-3">
								<button className="flex items-center justify-between w-3/5 bg-primary-500 text-white rounded-md font-inter text-body-2 py-3 px-6">
									<span>Upload Image</span>
									<AddCircleSVG />
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* fin de cover */}
			</div>
		</main>
	)
}
