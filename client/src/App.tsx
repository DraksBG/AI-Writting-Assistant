/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";

import Home from "./components/home";
import Editor from "./components/editor";
import Navbar from "./components/navbar";

export function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/write" element={<Editor />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
