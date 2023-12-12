//React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";

// Elements
import App from "./App";
import ErrorPage from "./routes/ErrorPage";

// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DataContextProvider from "./contexts/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DataContextProvider>
			<AnimatePresence mode="wait">
				<Router>
					<Routes>
						<Route path="/error/*" element={<ErrorPage />} />
						<Route path="*" element={<App />} />
					</Routes>
				</Router>
			</AnimatePresence>
		</DataContextProvider>
	</React.StrictMode>
);
