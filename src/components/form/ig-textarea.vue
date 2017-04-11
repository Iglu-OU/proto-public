<template>
	<span class="textarea" :class="classes">
		<label class="textarea__label" :for="id" v-if="label">
			{{label}}
		</label>
		<textarea class="textarea__field" :id="id" v-model="value"></textarea>
	</span>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ["value", "label", "classes"],
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
