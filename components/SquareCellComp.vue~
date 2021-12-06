<template>
  <g @click="open()" :transform="cell.transform()">
    <path :d="cell.path()" :fill="cell.color()" stroke="black"></path>
    <text v-if="cell.opened" x="5" y="15" stroke="blue">{{cell.num}}</text>
  </g>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {Square} from "@/model/Square";
import {SquareCell} from "@/model/SquareCell";
import CellComp from "@/components/CellComp";


@Component
export default class SquareCellComp extends CellComp<Square>{
}

</script>
