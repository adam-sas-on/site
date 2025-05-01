import React, { useEffect } from "react";


function App(){

	useEffect(() => {
		document.title = document.location.host;
	}, []);

	return (
		<div>
			Example dev version
		</div>
	);
}

export default App;
