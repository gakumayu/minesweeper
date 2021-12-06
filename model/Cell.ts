import Util from "@/model/Util"

export class Cell<T>{
    num: number;
    opened: boolean;
    bomb: boolean;
    pos: T;
    marked: boolean;
    constructor(num: number, opened:boolean, bomb:boolean, marked:boolean, pos:T){
	this.num = num;
	this.opened = opened;
	this.bomb = bomb;
	this.marked = marked;
	this.pos = pos;
    }
    open():void{
	this.opened=true;
	//console.log(this);
    }
    mark():void{
	this.marked=!(this.marked);
	console.log(this);
    }
    color():string{
	    return this.opened ? "#FFF3C7" : "#533535";
    }
    adjacent!: (a:T) => boolean;
    
}
