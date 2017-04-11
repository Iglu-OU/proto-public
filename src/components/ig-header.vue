<template>
	<div class="header clearfix">
		<div class="container clearfix">
			<p class="header__name">
				<router-link :to="{name: 'home'}">
					Innovatsioonikliinik: prototüüp
				</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default{}
</script>

<style scoped>
	.container {
		background-color: transparent;
	}
</style>
