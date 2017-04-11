<template>
	<p class="question">
		{{label}}
	</p>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: ["label"],
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
