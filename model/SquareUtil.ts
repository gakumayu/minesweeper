import Util from "@/model/Util";
import {Square} from "@/model/Square";

export default class SquareUtil implements Util<Square>{

    adjacent(a:Square, b:Square):boolean{
	return Math.abs(a.x-b.x) + Math.abs(a.y-b.y) == 1;
    }


}
