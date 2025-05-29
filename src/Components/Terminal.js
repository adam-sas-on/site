import React, { useEffect, useRef } from "react";
import { typeLine } from "./functions";


function Terminal({ animate }){
	const terminalBox = useRef(null);

	useEffect(() => {
		if(animate)
			runTerminalAnimation();
	}, [animate, terminalBox]);

	const runTerminalAnimation = function(){
		if(!terminalBox || !terminalBox.current)
			return;
		let terminalLines = terminalBox.current.querySelectorAll(".terminal-line");
		terminalLines.forEach((line, idx)=>{
			const text = line.getAttribute("data-text");
			setTimeout(()=>{
				typeLine(line, text);
			}, idx*1000);
		});
	};


	return (
		<section className="terminal-section">
			<div ref={ terminalBox } className="terminal-box">
				<div className="terminal-line" data-text="> System ready."></div>
				<div className="terminal-line" data-text="> "></div>
				<div className="cursor">█</div>
			</div>
		</section>
	);
}

export default Terminal;
