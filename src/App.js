import React, {useEffect, useMemo, useRef} from "react";
import Terminal from "./Components/Terminal";


function App(){
	const terminalHandleRef = useRef(null), sectionRef = useRef(null);

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

		if(sectionRef.current)
			sectionRef.current.querySelectorAll(".reveal, .ghost-icon").forEach(el => {
				observer.observe(el);
			});

		return () => {
			//if(sectionRef.current)
			//	sectionRef.current.querySelectorAll(".reveal, .ghost-icon").forEach(el => {
			//		observer.unobserve(el);
			//	});
			observer.disconnect();
		};
	}, [sectionRef]);

	useEffect(() => {
		const termObserver = new IntersectionObserver((entries)=>{
			entries.forEach(entry=> {
				if(entry.isIntersecting && terminalHandleRef.current){
					terminalHandleRef.current.startTyping();
					termObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.5 });

		document.querySelectorAll(".terminal-section").forEach(el => {
			termObserver.observe(el);
		});

		return () => {
			termObserver.disconnect();
		};
	}, [terminalHandleRef]);

	const skillList = useMemo(() => {
		return {
			skills: ["> Node.js ✔", "> React ✔", "> JavaScript ✔"/*, "> PHP ✔"*/]
		};
	}, []);


	return (
		<>
			<section ref={ sectionRef }>
				<div className="reveal">
					<h2>This domain is reserved for e-mail correspondence.<br />It is not hosting a live website at the moment.</h2>
					{/* <p>If you received an e-mail from this domain, it came from someone you already know.</p> */}
					<p>Scroll down to explore the technologies and experience for this site</p>
					<span>and to see my other skills.</span>
				</div>
				<div className="ghost-icon"><img src={ "static/imgs/mail_ico.svg" } style={{width: "1.5em"}} alt={ "Mail ico" } /></div>
			</section>
			<Terminal ref={ terminalHandleRef } skills={ skillList.skills } />
		</>
	);
}

export default App;
