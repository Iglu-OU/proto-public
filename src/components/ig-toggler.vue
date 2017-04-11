<template>
	<div class="toggler" :class="{'toggler--hidden': togglerClosed}">
		<a href="#" class="toggler__toggle"
			:class="{'toggler__toggle--closed': togglerClosed}"
			@click.prevent="togglerClosed = !togglerClosed">
			&#9660;
		</a>
		<ul class="toggler__list">
			<li v-for="row in config">
				<a	href="#" @click.prevent="activate(row)"
					:class="{'active' : row.active}">{{row.active ? '–' : ''}} {{row.text}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				togglerClosed: false
			}
		},
		props: ["config"],
		methods: {
			activate: function(row) {
				for (var key in this.config) {
					this.config[key].active = false;
				}
				row.active = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../scss/partials/_variables.scss";
.toggler {
	width: 150px;
	position: fixed;
	bottom: 0;
	right: 3px;
	padding: 2px 2px 5px;
	background-color: darken($color-proto, 5%);
	font-size: 13px;
	transform: translateY(0);
	transition: all .3s ease-in-out;
	box-shadow: 0px 1px 5px 1px #767e84;
	z-index: 100;
	&__list {
		margin: 0;
		padding: 0;
		list-style: none;
		a {
			display: inline-block;
			color: #fff;
			text-decoration: none;
			border: none;
			width: 100%;
			padding: 7px 10px;
			transition: 0.2s;
			-webkit-transition: 0.2s;
			&:hover {
				background-color: darken($color-proto, 10%);
			}
		}
		li {
			margin-bottom: 0;
		}
		.active {
			background-color: lighten($color-proto, 3%);
			font-weight: bold;
			&:hover {
				background-color: lighten($color-proto, 3%);
				cursor: default;
			}
		}
	}
	&__toggle {
		position: absolute;
		right: 0;
		top: 0;
		display: block;
		padding: 7px 8px;
		font-size: 15px;
		color: #fff;
		background-color: darken($color-proto, 5%);
		border: none;
		transform: rotateX(0deg);
		transition: top .3s ease-in-out;
		&--closed {
			transform: rotateX(180deg);
			top: -30px;
		}
		&:hover {
			text-decoration: none !important;
			background-color: darken($color-proto, 13%);
			transition: 0.2s;
			-webkit-transition: 0.2s;
		}
	}
	&--hidden {
		transform: translateY(100%);
	}
}
</style>
