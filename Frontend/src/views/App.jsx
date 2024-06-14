import { Routes, Route } from 'react-router-dom'

// Views
import { ErrorPage } from './404.jsx'
import { AuthView } from './AuthView.jsx'
import { Home } from './Home.jsx'
import { ExampleAuth } from '../components/ExampleAuth.jsx'
import { BookRegister } from './BookRegister.jsx'
import { Cart } from './Cart.jsx'
import { SingleBook } from './SingleBook.jsx'

function App() {
	return (
		<div className="bg-background">
			<Routes>
				{/* Static routes */}
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<AuthView />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/useAuth" element={<ExampleAuth />} />
				<Route path="/dashboard" element={<BookRegister />} />

				{/* Dinamic sections */}
				<Route path="/book/:id" element={<SingleBook />} />

				{/* Error page */}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	)
}

export default App
