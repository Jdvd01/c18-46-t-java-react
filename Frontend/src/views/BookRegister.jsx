export const BookRegister = () => {
  return (
    <main className="px-4 tablet:px-8 desktop:px-40">
      <div className="min-h-screen pt-24 tablet:pt-28 pb-6 tablet:pb-20 mx-[-16px] tablet:mx-12 desktop:mx-0 flex flex-col justify-center items-center px-4 tablet:px-8 desktop:px-40">
        {/* fondo */}
        <div className="shadow-low-elevation bg-white w-full rounded-2xl px-4 flex flex-col justify-center items-center">
          <div className="flex flex-col w-full desktop:flex-row desktop:justify-center">
            <div className="flex  flex-col w-full desktop:flex-col items-center desktop:py-20 pl-10 pt-10">
              <h1 className="font-dm-sans text-h1">New Book Registration</h1>

              <div className="flex flex-row">
                <div className="flex flex-col">
                  {/*Primera Columna de Registro */}

                  <div className="flex flex-col">
                    <div className="flex flex-row gap-8">
                      <div className="flex flex-col">
                        <label
                          for="bookTitle"
                          className="text-body-1 font-inter pt-6"
                        >
                          Book title
                        </label>

                        <div class="mt-2">
                          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="text"
                              name="bookTitle"
                              id="bookTitle"
                              autocomplete="bookTitle"
                              class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="The Fault in Our Stars"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label
                          for="author"
                          className="text-body-1 font-inter pt-6"
                        >
                          Author
                        </label>

                        <div class="mt-2">
                          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="text"
                              name="author"
                              id="author"
                              autocomplete="author"
                              class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="John Green"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Segunda Columna */}

                  <div className="flex flex-row gap-8">
                    <div className="flex flex-col">
                      <label
                        for="price"
                        className="text-body-1 font-inter pt-6"
                      >
                        Price
                      </label>
                      <div class="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label
                        for="pages"
                        className="text-body-1 font-inter pt-6"
                      >
                        Pages
                      </label>

                      <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            name="pages"
                            id="pages"
                            autocomplete="pages"
                            class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tercera Columna */}

                  <div className="flex flex-row gap-8">
                    <div className="flex flex-col">
                      <label
                        for="stock"
                        className="text-body-1 font-inter pt-6"
                      >
                        Stock
                      </label>
                      <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            name="stock"
                            id="stock"
                            autocomplete="stock"
                            class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="15"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label for="isbn" className="text-body-1 font-inter pt-6">
                        ISBN
                      </label>

                      <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            name="isbn"
                            id="isbn"
                            autocomplete="isbn"
                            class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="978-3-16-148410-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* cuarta columna */}
                  <div className="flex flex-row gap-8">
                    <div className="flex flex-col">
                      <label
                        htmlFor="language"
                        className="text-body-1 font-inter pt-6"
                      >
                        Language
                      </label>

                      <div class="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <select
                            id="language"
                            name="language"
                            autoComplete="language"
                            className="block rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          >
                            <option>Spanish</option>
                            <option>English</option>
                            <option>German</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col pl-6">
                      <label
                        htmlFor="category"
                        className="text-body-1 font-inter pt-6"
                      >
                        Category
                      </label>

                      <div class="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <select
                            id="category"
                            name="category"
                            autoComplete="category"
                            className="block rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          >
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Education</option>
                            <option>Children</option>
                            <option>Comics</option>
                            <option>Mangas</option>
                            <option>Fantasy</option>
                            <option>Sci_Fi</option>
                            <option>History</option>
                            <option>Religion</option>
                            <option>Art</option>
                            <option>Music</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quinta columna - Synopsis*/}

                  <div className="flex flex-col col-span-full">
                    <label
                      htmlFor="sypnosis"
                      className="text-body-1 font-inter pt-6"
                    >
                      Synopsis
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="synopsis"
                        name="synopsis"
                        rows={5}
                        cols={52}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 pr-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={"Bilbo bolson vive una aventura..."}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a little synopsis about your book.
                    </p>
                  </div>
                </div>
                {/*   Portada del libro */}

                <div class="col-span-full mx-7 mt-6 flex justify-center flex-col">
                  <label
                    for="cover-photo"
                    class="text-body-1 font-inter pt-6 flex justify-center"
                  >
                    Cover Book
                  </label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 25 25"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center  justify-center mt-3">
                    <button className="flex items-center justify-center  bg-primary-500 text-white rounded-lg py-2 font-inter text-body-2 px-10">
                      <span>Upload Image</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* fin de cover */}

              <div className="flex items-center  justify-center mt-6">
                <button className="flex items-center justify-start  bg-primary-500 text-white rounded-lg py-2 font-inter text-body-2 px-10">
                  <span>Register Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
