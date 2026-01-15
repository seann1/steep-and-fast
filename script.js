import p5 from 'p5';

const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(220);
    };

    p.draw = () => {
        p.translate(p.width/2-250, p.height/2-250);
        p.fill(0, 0, 0);
        p.noStroke();

        for (let i = 0; i < 10; i++) {
            p.beginShape();
                p.vertex(-10 + (i*50), 0);
                for (let j = 1; j <= 4; j++) {
                    const vertY = ((500/4)*j) - (i*10);
                    p.vertex(-20 + (i*50), vertY);
                    p.vertex(0 + (i*50), vertY);
                }

                // bottom vert 1
                p.vertex(-20 + (i*50), 500);

                // bottom vert 2
                p.vertex(-0 + (i*50), 500);

                for (let k = 4; k >= 1; k--) {
                    const vertY = ((500/4)*k - 20) - (i*10);

                    p.vertex(20 + (i*50), vertY);
                    p.vertex(0 + (i*50), vertY);
                }

                p.vertex(10 + (i*50), 0);
            p.endShape();
        }
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

new p5(sketch, document.getElementById('sketch-container'));
