<template>
	<span>
		<input :name="name" type="checkbox" class="radio__field" :id="id" :checked="checked" :value="value">

		<label class="radio__label" :for="id" v-if="label">
			{{label}}
		</label>
	</span>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ["name", "label", "value", "checked"],
		computed: {
			id: function () {
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
