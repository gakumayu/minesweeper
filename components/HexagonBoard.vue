<template>
<div>
  <div v-if="!started">
    <v-input></v-input>
    <v-btn v-if="!started" @click="start">start</v-btn>
  </div>
  <div v-else>
    <h1 v-if="gameover">game over</h1>
    <h1 v-if="cleared()">clear</h1>
    <svg v-else width="1000" height="1000">
      <HexagonCellComp v-for="c in cells" :cell="c" @open="open(c)" @mark="mark(c)" :key="c.key()">
      </HexagonCellComp>
    </svg>
  </div>
</div>
</template>

<script lang="ts">
    
    import { Component, Prop ,Watch} from 'vue-property-decorator';
import Board from './Board';
import {Hexagon} from "@/model/Hexagon"
import {HexagonCell} from "@/model/HexagonCell"
import HexagonCellComp from "@/components/HexagonCellComp.vue"

@Component({})
export default class HexagonBoard extends Board<Hexagon>{
    //started:boolean = false;
    cells: HexagonCell[] = [];
    @Prop({default:10}) propSize!: number;
    created(){
	this.cells = [];
	const size:number = this.propSize;
	for (let i=-size; i<=size; i++ ){
	    for (let j=-size; j<=size; j++){
		if(i+j>=-size && i+j<=size){
		    if (Math.random() < 0.25){
			this.cells.push(new HexagonCell(0, false, true, false, {x:i,y:j}));
		    }
		    else{
			this.cells.push(new HexagonCell(0, false, false, false,  {x:i,y:j}));
		    }
		}
	    }
	}
	this.start();
    }
    @Watch('propSize')
    onSizeChanged(newSize:number, oldSize:number){
	this.cells = [];
	const size:number = this.propSize;
	for (let i=-size; i<=size; i++ ){
	    for (let j=-size; j<=size; j++){
		if(i+j>=-size && i+j<=size){
		    if (Math.random() < 0.25){
			this.cells.push(new HexagonCell(0, false, true, false, {x:i,y:j}));
		    }
		    else{
			this.cells.push(new HexagonCell(0, false, false, false,  {x:i,y:j}));
		    }
		}
	    }
	}
	this.start();
    }
}

</script>
