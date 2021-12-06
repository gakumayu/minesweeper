import { Prop, Component, Vue } from 'vue-property-decorator'
import {Cell} from "@/model/Cell";


@Component
export default class CellComp<T> extends Vue{
    @Prop({default:null})
    private cell!: Cell<T>;
    open():void {
	this.$emit("open");
    }
    mark():void{
	this.$emit("mark");
    }
}
