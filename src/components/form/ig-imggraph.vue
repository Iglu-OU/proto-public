<template>
	<p class="image__wrap">
		<span class="image__chart" :class="classes"></span>
	</p>
</template>

<script>
export default {
	props: ["chart"],
	computed: {
	    classes: function() {
	        return "image__chart--" + this.chart;
		}
	}
};
</script>

<style lang="scss" scoped >
	@import "../../scss/partials/_variables.scss";
	.image {
		&__wrap {
			display: flex;
			position: relative;
			height: 100%;
			margin: 0;
			@media (max-width: $break-md - 1px) {
				display: block;
			}
		}
		&__chart {
			background: #f3f8f9 url("~static/graph3.svg") no-repeat 50% 50%;
			position: absolute;
			flex: 1;
			width: 100%;
			height: 100%;
			@media (max-width: $break-md - 1px) {
				position: relative;
				display: block;
				height: 200px;
			}
		}
		&__chart--pie {
			background: #f3f8f9 url("~static/graph1.svg") no-repeat 50% 50%;
		}
		&__chart--area {
			background: #f3f8f9 url("~static/graph2.svg") no-repeat 50% 50%;
		}
		&__chart--bar {
			background: #f3f8f9 url("~static/graph3.svg") no-repeat 50% 50%;
		}
	}
</style>
