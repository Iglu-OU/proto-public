<template>
	<label class="checkbox" :class="classes">
		<input :name="name" v-model="checked" type="checkbox" class="checkbox__input">
		<span class="checkbox__indicator"></span>
		<span class="checkbox__label"  v-if="label">{{label}}</span>
	</label>
</template>


<script>
	export default {
		data() {
			return {

			}
		},
		props: ["name", "label", "checked", "classes"]
	}
</script>

<style lang="scss">

</style>
