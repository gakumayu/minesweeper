<template>
  <g @click="open()" @click.right.prevent="mark()" :transform="cell.transform()">
    <path :d="cell.path()" :fill="cell.color()" stroke="black"></path>
    <text v-if="cell.opened && !cell.marked && cell.pos.d==1" x="-3.4" y="3.3" fill="#0D7E91" stroke="#0D7E91" font-size="12">{{cell.num}}</text>
    <text v-if="cell.opened && !cell.marked && cell.pos.d==-1" x="6.3" y="0" fill="#0D7E91" stroke="#0D7E91" font-size="12">{{cell.num}}</text>
    <text v-if="cell.marked &&  cell.pos.d==-1" x="6.3" y="0" fill="#0D7E91" stroke="#0D7E91" font-size="12">🚩</text>
    <text v-if="cell.marked &&  cell.pos.d==1" x="-3.4" y="3.3" fill="#0D7E91" stroke="#0D7E91" font-size="12">🚩</text>
  </g>
</template>
<style>
  .cell{
  user-select: none
  }
</style>
<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {Triangle} from "@/model/Triangle";
import {TriangleCell} from "@/model/TriangleCell";
import CellComp from "@/components/CellComp";


@Component
export default class TriangleCellComp extends CellComp<Triangle>{
}

</script>
