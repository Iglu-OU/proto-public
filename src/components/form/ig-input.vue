<template>
	<span class="input" :class="classes">
		<label class="input__label" :for="id" v-if="label">
			{{label}}
		</label>
		<!--TODO: add type support-->
		<input type="text"
			   class="input__field"
			   :classes="alertClass"
			   :id="id"
			   v-model="value"
		>
		<ig-alert-inline :alert="alert" :title="alertText"></ig-alert-inline>
	</span>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ["value", "label", "classes", "type", "alert", "alertText"],
		computed: {
			id: function () {
				function s4() {
					return Math.floor((1 + Math.random()) * 0x10000)
						.toString(16)
						.substring(1);
				}

				return s4() + s4() + s4();
			},
			alertClass: function () {
				return alert ? 'input__field--' + alert : "";
			}
		}
	}
</script>

<style lang="scss">
</style>
