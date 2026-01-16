import p5 from 'p5';

const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(220);
    };

    let tx = 0;
    let ty = 0;

	function getDistanceFromMouse(x,y) {
        const globalX = x + tx;
        const globalY = y + ty;

		const d = p.dist(globalX, globalY, p.mouseX, p.mouseY) * 5;
		const max = p.dist(0, 0, p.windowWidth, p.windowHeight); // canvas diagonal

		return p.constrain(d / max, 0, 1);
	}

    function xVertCalc(x, y, i, operator) {
        return operator === "-" ? x + (i*50) - (getDistanceFromMouse(x + (i*50), y)*50) :
            x + (i*50) + (getDistanceFromMouse(x + (i*50), y)*50);
    }

    const lowX = -50;
    const middleX = 0;
    const highX = 50;
    p.draw = () => {
		p.background(220);

        tx = p.width / 2 - 250;
        ty = p.height / 2 - 250;

		p.push();
        p.translate(tx, ty);
        p.fill(0, 0, 0);
        p.noStroke();

        for (let i = 0; i < 10; i++) {
			const lerpColorResult = p.lerpColor(p.color(245, 158, 66), p.color(19, 43, 148), getDistanceFromMouse(-10 + (i*50), 250));
			p.fill(lerpColorResult)
            p.beginShape();
                p.vertex(xVertCalc(middleX, 0, i, "-"), 0);
                for (let j = 1; j <= 4; j++) {
                    const vertY = ((500/4)*j) - (i*10);
					
					p.vertex(xVertCalc(lowX, vertY, i, "-"), vertY);
					p.vertex(xVertCalc(middleX, vertY, i, "-"), vertY);
                }

                // bottom vert 1
                p.vertex(xVertCalc(lowX, 500, i, "-"), 500);

                // bottom vert 2
                p.vertex(xVertCalc(middleX, 500, i, "-"), 500);

                for (let k = 4; k >= 1; k--) {
                    const vertY = ((500/4)*k - 20) - (i*10);
					
					p.vertex(xVertCalc(highX, vertY, i, "+"), vertY);
					p.vertex(xVertCalc(middleX, vertY, i, "+"), vertY);
                }

                p.vertex(xVertCalc(highX, 0, i, "-"), 0);
            p.endShape();
        }
		p.pop();
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

new p5(sketch, document.getElementById('sketch-container'));
