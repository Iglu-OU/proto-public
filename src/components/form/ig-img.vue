<template>
	<p class="image__wrap">
		<img class="image__img" src="../../../static/photo.jpg" alt="" />
	</p>
</template>

<script>
	export default {

	}
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
		&__img {
			position: absolute;
			flex: 1;
			width: 100%;
			height: 100%;
			object-fit: cover;
			font-family: 'object-fit: cover';
			@media (max-width: $break-md - 1px) {
				position: relative
			}
		}
	}

</style>
