import React, { useState, useEffect, useImperativeHandle, useRef } from "react";
import { runTerminalAnimation } from "./functions";


/**
 * 	Component to display box looking like a terminal;
 *
 * @param {MutableRefObject} ref - ref to this component;
 * @param {Array} skills - list of strings to simulate writing line by line;
 * @returns {JSX.Element}
 * @constructor
 */
function Terminal({ ref, skills=[] }){
	const [animate, setAnimate] = useState(false);
	const terminalBox = useRef(null);

	useEffect(() => {
		if(animate)
			runTerminalAnimation(terminalBox.current);
	}, [animate, terminalBox]);

	useImperativeHandle(ref, ()=>({
		startTyping: () =>{
			setAnimate(true);
		},
		locRef: terminalBox
	}), [terminalBox]);


	return (
		<section ref={ terminalBox } className="terminal-section">
			<div className="terminal-box">
				<div className="terminal-line" data-text="> Initializing portfolio..."></div>
				<div className="terminal-line" data-text="> Loading skills..."></div>

				{ skills.map((skill, idx) =>
					<div key={ idx } className="terminal-line" data-text={ skill }></div>
				) }

				<div className="terminal-line" data-text="> System ready."></div>
				<div className="terminal-line" data-text="> "></div>
				<div className="cursor">█</div>
			</div>
		</section>
	);
}

export default Terminal;
