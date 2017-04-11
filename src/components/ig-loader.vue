<template>
	<div class="loader">
		<div class="loader__dot"></div>
		<div class="loader__dot"></div>
		<div class="loader__dot"></div>
	</div>
</template>

<style lang="scss">
	$animation-speed: 1000ms;
	$dot-size: 6px;
	@mixin animation($delay: 0ms) {
		animation: fx $animation-speed ease infinite $delay;
	}
	.loader {
		display: inline-block;
	}

	.loader__dot {
		width: $dot-size;
		height: $dot-size;
		border: ($dot-size / 5) solid #0277bd;
		border-radius: 50%;
		float: left;
		margin: 0 ($dot-size / 2);
		transform: scale(0);
		@include animation();
		&:nth-child(2) {
			@include animation($animation-speed * 0.3);
		}
		&:nth-child(3) {
			@include animation($animation-speed * 0.6);
		}
		.loader--lg & {
			width: $dot-size * 2;
			height: $dot-size * 2;
			border: ($dot-size * 2 / 5) solid #0277bd;
		}
		.loader--xl & {
			width: $dot-size * 3;
			height: $dot-size * 3;
			border: ($dot-size * 3 / 5) solid #0277bd;
		}
	}



	@keyframes fx {
		50% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
