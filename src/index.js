import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';

const rootNode = document.getElementById("main");
const root = createRoot(rootNode);

setTimeout(() => {
	root.render(<React.StrictMode>
		<App />
	</React.StrictMode>);
}, 300);
