<template>
	<section class="dev-toggler" v-bind:class="{'dev-toggler--hidden': devTogglerClosed}">
		<a href="#" class="dev-toggler__toggle"
			v-bind:class="{'dev-toggler__toggle--closed': devTogglerClosed}"
			v-on:click.prevent="devTogglerClosed = !devTogglerClosed">
		</a>
		<div class="dev-toggler__content">
			<slot>

			</slot>
		</div>
	</section>
</template>

<script>
export default {
	data(){
		return {
			devTogglerClosed: true
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../scss/partials/_variables.scss";
.dev-toggler {
	position: fixed;
	left: 0;
	bottom: 0;
	max-width: 600px;
	min-height: 50px;
	width: 100%;
	margin: 0;
	background-color: darken($color-proto, 5%);
	padding: 20px 30px;
	font-size: 15px;
	transition: all .3s ease-in-out;
	box-shadow: 0 1px 5px 1px #767e84;
	max-height: 100vh;
	overflow-y: scroll;
	&__content {
		color: #fff;
	}
	&__toggle {
		&:after {
			display: block;
			position: absolute;
			right: 0;
			top: 0;
			content: "\f129";
			font-family: "Ionicons";
			width: 40px;
			height: 40px;
			padding: 9px;
			font-size: 20px;
			color: #fff;
			background-color: darken($color-proto, 5%);
			border: none;
			transition: top .3s ease-in-out;
		}
		&--closed:after {
			content: "\f11d";
			top: -40px;
			left: 0px;
		}
		&:hover:after {
			background-color: darken($color-proto, 10%);
		}
	}
	&--hidden {
		transform: translateY(100%);
		box-shadow: 3px 1px 3px 1px #767e84;
		overflow-y: visible;
	}
}
</style>
