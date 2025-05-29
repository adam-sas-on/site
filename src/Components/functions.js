
export function typeLine(lineEl, text, delay=30){
	let i = 0;
	const interval = setInterval(() => {
		lineEl.textContent = text.slice(0, ++i);
		if(i === text.length){
			clearInterval(interval);
			if(text.length > 2)
				lineEl.style.display = "block";
		}
	}, delay);

	lineEl.style.opacity = 1;
	lineEl.style.width = '100%';
}

export function runTerminalAnimation(node){
	if(!node)
		return;

}
