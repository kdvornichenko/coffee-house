import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Header from '../components/Header/Header'
import OurCoffee from '../pages/Our Coffee/OurCoffee'
import ForYourPleasure from '../pages/For Your Pleasure/ForYourPleasure'
import Footer from '../components/Footer/Footer'

function App() {
	return (
		<Router basename="/">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/our-coffee" element={<OurCoffee />} />
				<Route path="/for-your-pleasure" element={<ForYourPleasure />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
