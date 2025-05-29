import React, {useEffect, useRef, useState} from "react";
import Terminal from "./Components/Terminal";


function App(){
	const [animate, setAnimate] = useState(false);
	const terminalRef = useRef(null);

	useEffect(() => {
		document.title = document.location.host;
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if(entry.isIntersecting)
					entry.target.classList.add("visible");
				else
					entry.target.classList.remove("visible");
			});
		}, { threshold: 0.1 });

		document.querySelectorAll(".reveal, .ghost-icon").forEach(el => {
			observer.observe(el);
		});

		return () => {
			document.querySelectorAll(".reveal, .ghost-icon").forEach(el => {
				observer.unobserve(el);
			});
		};
	}, []);

	useEffect(() => {
		const termObserver = new IntersectionObserver((entries)=>{
			entries.forEach(entry=> {
				if(entry.isIntersecting){
					setAnimate(true);
					termObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.6 });

		if(terminalRef.current)
			termObserver.observe(terminalRef.current);

		return () => {
			if(terminalRef.current)
				termObserver.unobserve(terminalRef.current);
		};
	}, [terminalRef]);


	return (
		<>
			<section>
				<div className="reveal">
					<h1>Example</h1>
					<p>dev version</p>
				</div>
				<div className="ghost-icon"><img src={ "static/imgs/mail_ico.svg" } style={{width: "1.5em"}} alt={ "" } /></div>
			</section>
			<div ref={ terminalRef }>
			{ animate ? <Terminal animate={ true } /> : <section></section> }
			</div>
		</>
	);
}

export default App;
