<template>
<g transform="translate(400,300)" @click="start" @mouseover="hovered" @mouseleave="leaved" style="cursor:pointer;">
  <ellipse rx="300" ry="150"  :fill="fill" :stroke="stroke" :stroke-width="strokewidth"></ellipse>
  <transition>
    <text x="-160" y="20" fill="#1F3C88" stroke="white" font-size="50">GAME START</text>
  </transition>
</g>
</template>

<script>
export default{
    data(){
	return{
	    strokewidth:10,
	    fill:"#DBC6EB",
	    stroke:"#ABC2E8"
	}
    },
    methods:{
	start(){
	    this.$emit('start')
	},
	hovered(){
	    this.strokewidth=50
	    this.fill="#E5DF88"
	    this.stroke="#A37EBA"
	    //console.log("hoverd")
	},
	leaved(){
	    this.strokewidth=10
	    this.fill="#DBC6EB"
	    this.stroke="#ABC2E8"
	}
    }
}
</script>

<style>
  .v-enter{
  opacity: 0;
  },
  .v-enter-to{
  opacity: 1;
  },
  .v-enter-active{
  transition: opacity 1s;
  }
</style>
