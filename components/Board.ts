import { Component, Vue } from 'vue-property-decorator'
import {Cell} from "@/model/Cell"

@Component
export default class Board<T> extends Vue{
    cells: Cell<T>[] = [];
    started: boolean = true;
    gameover: boolean = false;

    start():void{
	this.started = true;
	this.gameover = false;
	this.setNumOfNeiBomb();
	console.log("start", this.started);
    }

    setNumOfNeiBomb():void{
	for (let a of this.cells){
	    let count = 0;
	    for (let b of this.cells){
		if (a.adjacent(b.pos) && b.bomb){
		    count++
		}
	    }
	    a.num = count;
	}
    }
    open(cell: Cell<T>):void{
	if(this.gameover){
	    return
	}
	//console.log(cell);
	if(cell.bomb){
	    this.gameover = true;
	    console.log(cell)
	    return
	}
	if (cell.opened){
	    return
	}
	else{
	    cell.open();
	}
	if (cell.bomb || cell.num > 0 ){
	    return
	}
	else{
	    for (let a of this.cells){
		if (cell.adjacent(a.pos)){
		    this.open(a);
		}
	    }
	}
    }
    mark(cell: Cell<T>):void{
	if(this.gameover){
	    return
	}
	cell.mark();//Cell.tsのmarkが呼び出される
	console.log(this.cells)
    }
    cleared():boolean{
	for(let cell of this.cells){
	    if(cell.bomb != cell.marked){
		return false
	    }
	}// 間違いがない状態
	return true
    }
}
