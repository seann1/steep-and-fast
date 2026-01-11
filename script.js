import p5 from 'p5';

const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(220);
    };

    p.draw = () => {
        p.translate(p.width/2, p.height/2);
        p.fill(0, 0, 0);
        p.noStroke();

        for (let i = 0; i < 10; i++) {
            p.beginShape();
                p.vertex(-10 + (i*50), -250);
                // cross one
                p.vertex(-20 + (i*50), 0 - (i*10));
                p.vertex(0 + (i*50), 0 - (i*10));
                //
                p.vertex(-20 + (i*50), 250);

                // // cross one
                // p.vertex(-20 + (i*50), 0 - (i*10));
                // p.vertex(0 + (i*50), 0 - (i*10));
                // //

                p.vertex(-0 + (i*50), 250);


                // cross two
                p.vertex(20 + (i*50), -20 - (i*10));
                p.vertex(-0 + (i*50), -20 - (i*10));
                //
                p.vertex(10 + (i*50), -250);
            p.endShape();
        }
            // p.vertex(-10, -250);
            // p.vertex(-30, 250);
            // p.vertex(0, 250);
            // p.vertex(20, -250);
            // p.beginContour();
            //     p.vertex(10, 10);
            //     p.vertex(300, 10);
            //     p.vertex(300, 300);
            //     p.vertex(10, 300);
            // p.endContour();

    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

new p5(sketch, document.getElementById('sketch-container'));
