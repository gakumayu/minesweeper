<template>
  <g class="cell" @click="open()" @click.right.prevent="mark()" :transform="cell.transform()">
    <path :d="cell.path()" :fill="cell.color()" stroke="black"></path>
    <text v-if="cell.opened && !cell.marked" x="5" y="15" fill="#0D7E91" stroke="#0D7E91">{{cell.num}}</text>
     <text v-if="cell.marked" x="5" y="15" fill="#0D7E91" stroke="#0D7E91">🚩</text>
  </g>
</template>

<style>
  .cell{
  user-select: none
  }
</style>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {Square} from "@/model/Square";
import {SquareCell} from "@/model/SquareCell";
import CellComp from "@/components/CellComp";


@Component
export default class SquareCellComp extends CellComp<Square>{
}

</script>
