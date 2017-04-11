<template>
	<span>
		<!--TODO: add type support-->
		<input type="text" class="input__field" :id="id" v-model="value" :placeholder="tmp">
		<router-link :to="link || ''">
			<button class="btn" :classes="[classes || 'btn--primary', link || 'empty']" v-if="label">
				{{label}}
			</button>
		</router-link>
	</span>
</template>

<script>
	export default {
	data() {
		return {
		}
	},
	props: ["value", "label", "classes", "link", "tmp"],
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
