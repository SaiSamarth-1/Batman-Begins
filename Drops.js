class Drops {
    constructor(x, y, r) {
        var options={
			isStatic:false,
			restitution :0.1,
            friction :0.001,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
    }

    update() {
        if(this.body.position.y >= 700){
            Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)});
        }
    }
    display() {
        // var angle = this.body.angle;
        // push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        fill('blue');
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
    }
}