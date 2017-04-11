<template>
	<span class="select" :class="classes">
		<label class="select__label" :for="id" v-if="label">
			{{label}}
		</label>
		<select class="select__field" :id="id" v-model="selected">
			<option v-for="option in options" :value="option.value">
			{{ option.text }}
			</option>
		</select>
	</span>
</template>

<script>
	export default {
	data() {
		return {
		}
	},
	props: ["value", "label", "classes", "options", "selected" ],
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
