<template>
<div>
  <div v-if="!started">
    <v-input></v-input>
    <v-btn v-if="!started" @click="start">start</v-btn>
  </div>
  <div v-else>
    <h1 v-if="gameover">game over</h1>
    <svg width="600" height="600">
      <SquareCellComp v-for="c in cells" :cell="c" @open="open(c)" @mark="mark(c)" :key="c.key()">
      </SquareCellComp>
    </svg>
  </div>
</div>
</template>

<script lang="ts">
    
    import { Component, Prop } from 'vue-property-decorator';
import Board from './Board';
import {Square} from "@/model/Square"
import {SquareCell} from "@/model/SquareCell"
import SquareCellComp from "@/components/SquareCellComp.vue"

@Component({})
export default class SauareBoard extends Board<Square>{
    //started:boolean = false;
    cells: SquareCell[] = [];
    created(){
	this.cells = [];
	const size:number = 10;
	for (let i=0; i<=size; i++){
	    for (let j=0; j<=size; j++){
		if (Math.random() < 0.1){
		    this.cells.push(new SquareCell(0, false, true, false, {x:i,y:j}));
		}
		else{
		    this.cells.push(new SquareCell(0, false, false, false, {x:i,y:j}));
		}
	    }
	}
    }
}

</script>
