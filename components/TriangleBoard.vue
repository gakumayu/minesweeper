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
      <TriangleCellComp v-for="c in cells" :cell="c" @mark="mark(c)" @open="open(c)" :key="c.key()">
      </TriangleCellComp>
    </svg>
  </div>
</div>
</template>

<script lang="ts">
    
    import { Component, Prop, Watch} from 'vue-property-decorator';
import Board from './Board';
import {Triangle} from "@/model/Triangle"
import {TriangleCell} from "@/model/TriangleCell"
import TriangleCellComp from "@/components/TriangleCellComp.vue"

@Component({})
export default class TriangleBoard extends Board<Triangle>{
    //started:boolean = false;
    cells: TriangleCell[] = [];
    @Prop({default:10}) propSize!: number;
    created(){
	this.cells = [];
	const size:number = this.propSize;
	for (let i=0; i<=size; i++ ){
	    for (let j=0; j<=size; j++){
		if(i+j>=-size && i+j<=size){
		    if (Math.random() < 0.25){
			this.cells.push(new TriangleCell(0, false, true, false, {x:i,y:j,d:1}));
		    }
		    else{
			this.cells.push(new TriangleCell(0, false, false, false, {x:i,y:j,d:1}));
		    }
		}
	    }
	}
	for (let i=0; i<size; i++ ){ 
	    for (let j=0; j<size; j++){
		if(i+j<size){
		    if (Math.random() < 0.25){
			this.cells.push(new TriangleCell(0, false, true, false, {x:i,y:j,d:-1}));
		    }
		    else{
			this.cells.push(new TriangleCell(0, false, false, false, {x:i,y:j,d:-1}));
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
	for (let i=0; i<=size; i++ ){
	    for (let j=0; j<=size; j++){
		if(i+j>=-size && i+j<=size){
		    if (Math.random() < 0.25){
			this.cells.push(new TriangleCell(0, false, true, false, {x:i,y:j,d:1}));
		    }
		    else{
			this.cells.push(new TriangleCell(0, false, false, false, {x:i,y:j,d:1}));
		    }
		}
	    }
	}
	for (let i=0; i<size; i++ ){ 
	    for (let j=0; j<size; j++){
		if(i+j<size){
		    if (Math.random() < 0.25){
			this.cells.push(new TriangleCell(0, false, true, false, {x:i,y:j,d:-1}));
		    }
		    else{
			this.cells.push(new TriangleCell(0, false, false, false, {x:i,y:j,d:-1}));
		    }
		}
	    } 
	}
	this.start();
    }
}

</script>
