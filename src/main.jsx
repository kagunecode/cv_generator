//React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Elements
import App from "./App";

// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DataContextProvider from "./contexts/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DataContextProvider>
			<Router>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</Router>
		</DataContextProvider>
	</React.StrictMode>
);
