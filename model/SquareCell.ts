import {Square} from "./Square"
import {Cell} from "./Cell"

export class SquareCell extends Cell<Square>{
    constructor(num: number, opend:boolean, bomb:boolean, marked:boolean, pos:Square){
	super(num,opend,bomb,marked,pos);
	this.adjacent = function(a:Square):boolean{
	    return (Math.abs(this.pos.x-a.x) + Math.abs(this.pos.y-a.y) == 1)||
		(Math.abs(this.pos.x-a.x) * Math.abs(this.pos.y-a.y) == 1);
	}
    }
    path():string{
	return "M 0 0 l 20 0 l 0 20 l -20 0 z"
    }
    key():string{
	return (this.pos.x).toString(10) + ", " + (this.pos.y).toString();
    }
    transform():string{
	const x = this.pos.x;
	const y = this.pos.y;
	let str: string = "translate(" + (20*x).toString(10)
	    + "," + (20*y).toString(10) +")";
	return str;
    }
    color():string{
	return this.opened ? "pink" : "#533535";
	//return "pink";
    }
}
