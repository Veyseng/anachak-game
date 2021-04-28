<template>
	<b-container class="container">
		<b-row class="line"></b-row>
		<b-row>OUR STORY</b-row>
		<b-row class="justify-content-md-center">
			<b-carousel
	id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators
    img-width="1024"
    img-height="480"
 
  >
    <b-carousel-slide
      img-src="../assets/slider3.png"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="../assets/slider2.png"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="../assets/slider1.png"
    ></b-carousel-slide>
  </b-carousel>
		</b-row>
		<b-row>
			<p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis scelerisque faucibus. Cras aliquet elit vel magna egestas, vel bibendum dui condimentum. Morbi maximus augue purus, ac pulvinar dolor egestas quis. Proin enim metus, commodo nec est ac, facilisis congue risus. Cras lacinia tincidunt porta. Curabitur a metus non tortor luctus bibendum. Donec at vulputate diam, ultrices porta arcu. Vestibulum ultrices vulputate egestas. Morbi vel libero turpis.
			</p>
		</b-row>
		<b-row class="line"> 
		</b-row>
		<b-row>
			OUR VALUE
		</b-row>
		<b-row>
			<b-col sm="4">
				<b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
				<h5>Value 1</h5>
				<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Aenean sagittis scelerisque</p>
			</b-col>
			<b-col sm="4">
				<b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
				<h5>Value 2</h5>
				<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Aenean sagittis scelerisque</p>
			</b-col>
			<b-col sm="4">
				<b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
				<h5>Value 3</h5>
				<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Aenean sagittis scelerisque</p>
			</b-col>
		</b-row>
		<b-row class="line"></b-row>
		<b-row >GET TO KNOW OUR TEAM</b-row>
		<b-row align-content="center">
			<b-col sm class="team-pic">
				<b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
			</b-col>
			<b-col sm >
				<p>NAME: DEVELOPER NAME</p>
				<p>ROlE: DEVELOPER</p>
			</b-col>
			<b-col sm  class="team-pic">
				<b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
			</b-col>
			<b-col sm >
				<p>NAME: DEVELOPER NAME</p>
				<p>ROlE: DEVELOPER</p>
			</b-col>
		</b-row>
		<b-row align-content="center">
			<b-col sm class="team-pic">
				<b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
			</b-col>
			<b-col sm >
				<p>NAME: DEVELOPER NAME</p>
				<p>ROlE: DEVELOPER</p>
			</b-col>
			<b-col sm  class="team-pic">
				<b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
			</b-col>
			<b-col sm >
				<p>NAME: DEVELOPER NAME</p>
				<p>ROlE: DEVELOPER</p>
			</b-col>
		</b-row>
	</b-container>

     
</template>

<script>
export default {
 data() {
      return {
        mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
      }
    }
}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
	*{
		font-family: 'Ubuntu', sans-serif;
	}
	.carousel-indicators {
		background:none;

	}
	.container{
		padding: 5%;
		background-color: #303841 ;
		color: white;
		
	}
	.line{
		display: block;
		padding-top: 5%;
		border-bottom: 1px solid white;
	}
	.row{
		padding: 3%;
	}
	.m1{
		border: 1px solid red;	
	}
</style>