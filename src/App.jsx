import 'bootstrap/dist/css/bootstrap.min.css';
import CurRates from './components/curRates';
import './App.css';
import Conversion from './components/conversions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //using this for routing
import NavBar from './NavBar/navBar';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Router>
				{' '}
				{/* parent element */}
				<Routes>
					<Route exact path="/" element={<CurRates />} /> {/* Home directory */}
					<Route exact path="/conversions" element={<Conversion />} />{' '}
					{/* Conversion page */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
