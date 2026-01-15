import p5 from 'p5';

const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(220);
    };
	function getDistanceFromMouse(x,y) {
		const d = p.dist(x, y, p.mouseX, p.mouseY);
		const max = p.dist(0, 0, 500, 500); // canvas diagonal
		return p.constrain(d / max, 0, 1);
	}
    p.draw = () => {
		p.background(220);
		p.push();
        p.translate(p.width/2-250, p.height/2-250);
        p.fill(0, 0, 0);
        p.noStroke();

        for (let i = 0; i < 10; i++) {
			const lerpColorResult = p.lerpColor(p.color(255,0,0), p.color(0,0,255), getDistanceFromMouse(-10 + (i*50), 250));
			p.fill(lerpColorResult)
            p.beginShape();
                p.vertex(-10 + (i*50) - (getDistanceFromMouse(-10 + (i*50), 0)*30), 0);
                for (let j = 1; j <= 4; j++) {
                    const vertY = ((500/4)*j) - (i*10);
					console.log(p.dist(-20 + (i*50),vertY, p.mouseX, p.mouseY));
					
					p.vertex(-20 + (i*50) - (getDistanceFromMouse(-20 + (i*50), vertY)*30), vertY);
					p.vertex(0 + (i*50) - (getDistanceFromMouse(0 + (i*50), vertY)*30), vertY);
                }

                // bottom vert 1
                p.vertex(-20 + (i*50) - (getDistanceFromMouse(-20 + (i*50), 500)*30), 500);

                // bottom vert 2
                p.vertex(-0 + (i*50) - (getDistanceFromMouse(-0 + (i*50), 500)*30), 500);

                for (let k = 4; k >= 1; k--) {
                    const vertY = ((500/4)*k - 20) - (i*10);
					
					p.vertex(20 + (i*50) + (getDistanceFromMouse(20 + (i*50), vertY)*30), vertY);
					p.vertex(0 + (i*50) + (getDistanceFromMouse(0 + (i*50), vertY)*30), vertY);
                }

                p.vertex(10 + (i*50) - (getDistanceFromMouse(10 + (i*50), 0)*30), 0);
            p.endShape();
        }
		p.pop();
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

new p5(sketch, document.getElementById('sketch-container'));
