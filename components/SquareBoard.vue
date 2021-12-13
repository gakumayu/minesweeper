<template>
<div>
  <div v-if="!started">
    <v-input></v-input>
    <v-btn v-if="!started" @click="start">start</v-btn>
  </div>
  <div v-else>
    <h1 v-if="gameover">game over</h1>
    <h1 v-if="cleared()">clear</h1>
    <svg width="1000" height="1000">
      <SquareCellComp v-for="c in cells" :cell="c" @open="open(c)" @mark="mark(c)" :key="c.key()">
      </SquareCellComp>
    </svg>
  </div>
</div>
</template>

<script lang="ts">
    
    import { Component, Prop ,Watch} from 'vue-property-decorator';
import Board from './Board';
import {Square} from "@/model/Square"
import {SquareCell} from "@/model/SquareCell"
import SquareCellComp from "@/components/SquareCellComp.vue"

@Component({})
export default class SauareBoard extends Board<Square>{
    //started:boolean = false;
    cells: SquareCell[] = [];
    @Prop({default:10}) propSize!: number;
    created(){
	this.cells = [];
	const size:number = this.propSize;
	for (let i=0; i<=size; i++){
	    for (let j=0; j<=size; j++){
		if (Math.random() < 0.25){
		    this.cells.push(new SquareCell(0, false, true, false, {x:i,y:j}));
		}
		else{
		    this.cells.push(new SquareCell(0, false, false, false, {x:i,y:j}));
		}
	    }
	}
	this.start();
    }
    @Watch('propSize')
    onSizeChanged(newSize:number, oldSize:number){
	this.cells = [];
	const size:number = this.propSize;
	for (let i=0; i<=size; i++){
	    for (let j=0; j<=size; j++){
		if (Math.random() < 0.25){
		    this.cells.push(new SquareCell(0, false, true, false, {x:i,y:j}));
		}
		else{
		    this.cells.push(new SquareCell(0, false, false, false, {x:i,y:j}));
		}
	    }
	}
	this.start();
    }
}
</script>
