import p5 from 'p5';

const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(220);
    };

    p.draw = () => {
        p.translate(p.width/2-250, p.height/2);
        p.fill(0, 0, 0);
        p.noStroke();

        for (let i = 0; i < 10; i++) {
            p.beginShape();
                p.vertex(-10 + (i*50), -250);
                for (let j = 1; j <= 4; j++) {
                    const vertY = ((500/4)*j - 250) - (i*10);
                    p.vertex(-20 + (i*50), vertY);
                    p.vertex(0 + (i*50), vertY);
                    // if (vertY > -200 && vertY < 200) {
                    //     p.vertex(-20 + (i*50), vertY);
                    //     p.vertex(0 + (i*50), vertY);
                    // }
                }

                // bottom vert 1
                p.vertex(-20 + (i*50), 250);

                // bottom vert 2
                p.vertex(-0 + (i*50), 250);

                for (let k = 4; k >= 1; k--) {
                    const vertY = ((500/4)*k - 270) - (i*10);

                    p.vertex(20 + (i*50), vertY);
                    p.vertex(0 + (i*50), vertY);
                    // if (vertY > -220 && vertY < 220) {
                    //     p.vertex(20 + (i*50), vertY);
                    //     p.vertex(0 + (i*50), vertY);
                    // }
                }

                p.vertex(10 + (i*50), -250);
            p.endShape();
        }
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

new p5(sketch, document.getElementById('sketch-container'));
