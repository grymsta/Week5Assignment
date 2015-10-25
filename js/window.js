function setup() {
    createCanvas(windowWidth, windowHeight);

    //Top Of Base

        strokeWeight(2);
        stroke('black');
        fill('#96492d');
        rect(375, 20, 295, 30);

    //Bottom Of Base

        strokeWeight(2);
        stroke('black');
        fill('#96492d');
        rect(375, 450, 295, 60);

    //Base Rectangle

        strokeWeight(2);
        stroke('black');
        fill('#96492d');
        rect(400, 50, 250, 400);

    //Inside Panes

        //Pane #1
        strokeWeight(1);
        stroke('black');
        fill('#93d4e7');
        ellipse(455, 115, 100, 120);

        //Pane #2
        strokeWeight(1);
        stroke('black');
        fill('#93d4e7');
        ellipse(595, 115, 100, 120);

        //Pane #3
        strokeWeight(1);
        stroke('black');
        fill('#93d4e7');
        ellipse(455, 250, 100, 120);

        //Pane #4
        strokeWeight(1);
        stroke('black');
        fill('#93d4e7');
        ellipse(595, 250, 100, 120);

        //Pane #5
        strokeWeight(1);
        stroke('black');
        fill('#93d4e7');
        ellipse(455, 385, 100, 120);

        //Pane #6
        strokeWeight(1);
        stroke('black');
        fill('#93d4e7');
        ellipse(595, 385, 100, 120);
}
