import {Triangle} from "./Triangle"
import {Cell} from "./Cell"

export class TriangleCell extends Cell<Triangle>{
    constructor(num: number, opend:boolean, bomb:boolean, marked:boolean, pos:Triangle){
	super(num,opend,bomb,marked,pos);
	this.adjacent = function(a:Triangle):boolean{
	    if(this.pos.d == 1){//upward
		return(this.pos.x == a.x && this.pos.y == a.y && a.d == -1) ||
		    (this.pos.x-1 == a.x && this.pos.y == a.y && a.d == -1) ||
		    (this.pos.x == a.x && this.pos.y-1 == a.y && a.d == -1)
	    }else{
		return(this.pos.x+1 == a.x && this.pos.y == a.y && a.d == 1) ||
		    (this.pos.x == a.x && this.pos.y+1 == a.y && a.d == 1) ||
		    (this.pos.x == a.x && this.pos.y == a.y && a.d == 1)
	    }
	}
    }
    path():string{
	const r = 20/Math.sqrt(3)
	if(this.pos.d==1){
	    return "M "
		+(r*Math.cos(Math.PI/2)).toString() + " " + (-r*Math.sin(Math.PI/2)).toString()
		+ " L " + (r*(Math.cos(Math.PI/2+2*Math.PI/3))).toString() + " " + (-r*(Math.sin(Math.PI/2+2*Math.PI/3))).toString()
		+ " L " + (r*(Math.cos(Math.PI/2+2*2*Math.PI/3))).toString() + " " + (-r*(Math.sin(Math.PI/2+2*2*Math.PI/3))).toString()
		+ " Z "
	}
	else{
	    return " M "
		+ (r*(Math.cos(Math.PI/2+2*2*Math.PI/3))).toString() + " " + (-r*(Math.sin(Math.PI/2+2*2*Math.PI/3))).toString()
		+ " l 10 " + (-10*Math.sqrt(3)).toString()
		+ " l -20 0  Z "
	}
    }
    key():string{
	return (this.pos.x).toString(10) + ", " + (this.pos.y).toString() + ", " + (this.pos.d).toString()
    }
    transform():string{
	const x = +this.pos.x;
	const y = +this.pos.y;
	const u = 470+20*x+10*y
	const v = 400-y*20*Math.sin(Math.PI/3)
	let str: string = "translate(" + u.toString(10)
	    + "," + v.toString(10) +")";
	return str;
    }

}
