//set html class to 'js'
document.querySelector('.no-js').classList.add('js');
document.querySelector('.no-js').classList.remove('no-js');

function generateSnowflake(){
	const snowflake = document.querySelector(".snowflake");
    snowflake.innerHTML = "";
	let line1length = 50;
	let linewidth = Math.floor(Math.random() * 2 + 2 );
	let line1num = Math.floor(Math.random() * 7 + 5);
	let line1anglebetween = 360 / line1num;
	let line1angle = 0;
	let line2num = Math.floor(Math.random() * 4 + 1);
	let line2angle = Math.floor(Math.random() * 60 + 15);
	let line2startlength = Math.floor(Math.random() * 60 + 10);
	let line2lengthvary = Math.floor(Math.random() * 2 + 1 );
	let line2start = Math.floor(Math.random() * 15 + 35);
	let line2diff = (100 - line2start) / line2num ;
	let center = Math.floor(Math.random() * 3 + 1 );
	let line1bottom = 0;
	let inbetweenlength = Math.floor(Math.random() * 25 + 10);
	if(center == 1){
		line1bottom = Math.floor(Math.random() * 10 + 10);
		line1length -= line1bottom/2;
		line2diff = (100 - line2start) / line2num ;
		center = document.createElement("div");
		center.className = "line center";
		center.setAttribute("style",`height: calc(${line1length / 50 * line1bottom}% + ${linewidth}px); border-width: ${linewidth}px; transform: translate(calc(50% - ${linewidth / 2}px), 50%)`);
		snowflake.appendChild(center);
	}
	for(let i = 0; i < line1num; i++){
		let line1 = document.createElement("div");
		line1.className = "line line1";	
		line1angle += line1anglebetween;
		line1.setAttribute("style",`transform: rotate(${line1angle}deg) translateY(-${line1bottom}%); width: ${linewidth}px; height: ${line1length}%`);
		for(let j = 0; j < line2num; j++){
			let line2 = document.createElement("div");
			let line2opp = document.createElement("div");
			line2.className = "line line2";
			line2opp.className = "line line2";
			let line2length = line2startlength;
			if(line2lengthvary == 1){
				line2length = line2startlength - (line2startlength / line2num * j);
			}
			let line2bottom = line2start + line2diff * j;
			line2.setAttribute("style",`transform: rotate(${line2angle}deg); height: ${line2length}%; bottom: ${line2bottom}%; width: ${linewidth}px`);
			line2opp.setAttribute("style",`transform: rotate(-${line2angle}deg); height: ${line2length}%; bottom: ${line2bottom}%; width: ${linewidth}px`);
			line1.appendChild(line2);
			line1.appendChild(line2opp);
		}
		snowflake.appendChild(line1);
		if(center == 2){
			let inbetweenline = document.createElement("div");
			let inbetweenangle = line1anglebetween/2 + line1anglebetween * i;
			inbetweenline.className = "line line-between";
			inbetweenline.setAttribute("style",`transform: rotate(${inbetweenangle}deg) translateY(-${line1bottom}%); width: ${linewidth}px; height: ${inbetweenlength}%`);
			snowflake.appendChild(inbetweenline);
		}
	
	}
};
 
window.onload = function() {
    generateSnowflake();
  };
setInterval(function(){ 
    generateSnowflake();   
}, 5000);
