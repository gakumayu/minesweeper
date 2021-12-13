<template>
<div>
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
  <v-container fluid>
    <v-row justify="space-around">
      <v-menu
	bottom
	origin="center center"
	transition="Triangle"
	>
	<template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#F4BEEE"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Triangle
          </v-btn>
	</template>
	
	<v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
	    @click="select('triangle',3*(i+1))"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
	</v-list>
      </v-menu>
      
      <v-menu
	transition="Square"
	bottom
	right
	>
	<template v-slot:activator="{ on, attrs }">
          <v-btn
            class="##B4FE98"
            color="#B4FE98"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Square
          </v-btn>
	</template>
	
	<v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
	    @click="select('square',2*(i+1))"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
	</v-list>
      </v-menu>
      
      <v-menu
	transition="Hexagon"
	bottom
	>
	<template v-slot:activator="{ on, attrs }">
          <v-btn
            class="#A8ECE7"
            color="#A8ECE7"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Hexagon
          </v-btn>
	</template>
	<v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
	    @click="select('hexagon',2*(1+i))"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
	</v-list>
      </v-menu>
    </v-row>
  </v-container>
  <triangleboard v-if="game.shape=='triangle'" :propSize="game.level"></triangleboard>
  <squareboard v-if="game.shape=='square'" :propSize="game.level"></squareboard>
  <hexagonboard v-if="game.shape=='hexagon'" :propSize="game.level"></hexagonboard>
</div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import squareboard from "@/components/SquareBoard.vue";
import hexagonboard from "@/components/HexagonBoard.vue";
import triangleboard from "@/components/TriangleBoard.vue";
//import Vue from 'vue'
import Vuetify from 'vuetify/lib'


export default{
    components:{
	hexagonboard,
	squareboard,
	triangleboard
    },
    data: () => ({
	items: [
            { title: 'Level 1' },
            { title: 'Level 2' },
            { title: 'Level 3' },
            { title: 'Level 4' },
	    { title: 'Level 5' },
	    { title: 'Level 6' },
	    { title: 'Level 7' },
	],
	game: { shape: 'square' , level: 1}
    }),
    methods:{
	select(shape,level){
	    console.log("select "+ shape + level)
	    this.game={shape:shape,level:level}
	}
    }
}
</script>
