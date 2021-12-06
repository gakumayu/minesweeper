import {Hexagon} from "./Hexagon"
import {Cell} from "./Cell"

export class HexagonCell extends Cell<Hexagon>{
    constructor(num: number, opend:boolean, bomb:boolean, marked:boolean, pos:Hexagon){
	super(num,opend,bomb,marked,pos);
	this.adjacent = function(a:Hexagon):boolean{
	    return(this.pos.x+1 == a.x && this.pos.y == a.y) ||
		(this.pos.x+1 == a.x && this.pos.y-1 == a.y) ||
		(this.pos.x-1 == a.x && this.pos.y == a.y) ||
		(this.pos.x-1 == a.x && this.pos.y+1 == a.y) ||
		(this.pos.x == a.x && this.pos.y+1 == a.y) ||
		(this.pos.x == a.x && this.pos.y-1 == a.y) 
	    
	}
    }
    path():string{
	return "M "
	    + (10*Math.cos(0*Math.PI/3)).toString() + " " + (10*Math.sin(0*Math.PI/3)).toString()
	    + " L " + (10*Math.cos(1*Math.PI/3)).toString() + " " + (10*Math.sin(1*Math.PI/3)).toString()
	    + " L " + (10*Math.cos(2*Math.PI/3)).toString() + " " + (10*Math.sin(2*Math.PI/3)).toString()
	    + " L " + (10*Math.cos(3*Math.PI/3)).toString() + " " + (10*Math.sin(3*Math.PI/3)).toString() 
	    + " L " + (10*Math.cos(4*Math.PI/3)).toString() + " " + (10*Math.sin(4*Math.PI/3)).toString()
	    + " L " + (10*Math.cos(5*Math.PI/3)).toString() + " " + (10*Math.sin(5*Math.PI/3)).toString()
	    + " Z "
    }
    key():string{
	return (this.pos.x).toString(10) + ", " + (this.pos.y).toString();
    }
    transform():string{
	const x = +this.pos.x;
	const y = +this.pos.y;
	const u = 300+(x+y)*20*Math.cos(Math.PI/6)
	const v = 200+(x-y)*20*Math.sin(Math.PI/6)
	let str: string = "translate(" + u.toString(10)
	    + "," + v.toString(10) +")";
	return str;
    }

}
