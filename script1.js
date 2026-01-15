import p5 from 'p5';

const sketch = (p) => {
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.background(220);
	};
	
	p.draw = () => {
		p.background(220);
		myTriangle(.05, p.mouseX, p.mouseY);
	};
	
	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	};
	
	function myTriangle(amountOfWindow, x, y) {
		p.push();
		const size = p.width * amountOfWindow;
		p.translate(x,y - size);
		p.triangle(0,0,size, size*2, -size, size*2)
		p.pop();
	}
};

new p5(sketch, document.getElementById('sketch-container'));
