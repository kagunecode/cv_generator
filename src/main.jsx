import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./routes/ErrorPage";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/*" element={<App />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
