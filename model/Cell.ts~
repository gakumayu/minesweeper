import Util from "@/model/Util"

export class Cell<T>{
    num: number;
    opened: boolean;
    bomb: boolean;
    pos: T;
    constructor(num: number, opened:boolean, bomb:boolean, pos:T){
	this.num = num;
	this.opened = opened;
	this.bomb = bomb;
	this.pos = pos;
    }
    open():void{
	this.opened=true;
	//console.log(this);
    }
    color():string{
	return this.opened ? "pink" : "gray";
	//return "pink";
    }
    adjacent!: (a:T) => boolean;
    
}
