import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";

function App() {
	return ( 
		<BrowserRouter forceRefresh={true}>
			<Routes>
				<Route path="/" element={<Index />}></Route>
			</Routes>
		</BrowserRouter>
  	);
}
export default App;
