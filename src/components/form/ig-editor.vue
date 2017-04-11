<template>
	<p class="textarea" :class="classes">
		<label class="textarea__label" v-if="label">
			{{label}}
		</label>
		<img src="http://nerdsmagazine.com/wp-content/uploads/2013/05/WordPress-built-in-editor.jpg" alt="">
	</p>
</template>

<style lang="scss" scoped >
	img {
		display: block;
	}
</style>
