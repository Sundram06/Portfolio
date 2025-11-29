import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ColorModeProvider from "./theme/ColorModeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ColorModeProvider>
			<App />
		</ColorModeProvider>
	</React.StrictMode>
);
