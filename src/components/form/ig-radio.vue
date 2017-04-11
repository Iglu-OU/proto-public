<template>
	<label class="radio" :class="classes">
		<input :name="name" v-model="model" :checked="checked" type="radio" :value="label"  class="radio__input">
		<span class="radio__indicator"></span>
		<span class="radio__label"  v-if="label">{{label}}</span>
	</label>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: ["name", "label", "checked", "model", "classes"]
	}
</script>

<style lang="scss">

</style>
