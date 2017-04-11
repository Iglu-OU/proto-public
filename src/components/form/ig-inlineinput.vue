<template>
	<p class="inline-input input" :class="classes">
		<label class="input__label" :for="id" v-if="label">
			{{label}}
		</label>
		<!--TODO: add type support-->
		<input type="text" class="input__field" id="id" v-model="value">
	</p>
</template>

<script>
	export default {
	data() {
		return {
		}
	},
	props: ["value", "label", "classes", "type"],
	computed: {
		id: function() {
			function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
			}
			return s4() + s4() + s4();
		}
	}
	}
</script>

<style lang="scss">

</style>
