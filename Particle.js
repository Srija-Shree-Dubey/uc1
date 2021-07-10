class Particle
{
    constructor(x,y,r)
    {
        var options =
        {
             isStatic : false,
             resitution : 0,
             friction : 1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        
        World.add(world,this.body);
    }
	display()
	{
			var pos = this.body.position;		
			push()
			translate(pos.x, pos.y);
            fill(this.color);
			pop()
	}
}