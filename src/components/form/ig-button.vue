<template>
	<router-link :to="link">
		<button class="btn" :classes="classes" v-if="label">
			{{label}}
		</button>
	</router-link>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ["value", "label", "classes", "link"],
		computed: {
			id: function () {
				function s4() {
					return Math.floor((1 + Math.random()) * 0x10000)
						.toString(16)
						.substring(1);
				}

				return s4() + s4() + s4();
			}
		},
		mounted: () => {
			if (!link) {
				this.classes = this.classes + " empty";
			}
		}
	}


</script>

<style lang="scss">

</style>
