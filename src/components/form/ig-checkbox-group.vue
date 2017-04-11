<template>
	<ul class="checkbox-group" v-bind:class="[classes, {'radio-group--inline': inline}]">
		<li class="checkbox-group__item" v-for="item in options">
			<ig-checkbox :name="id" :checked="item.checked" :label="item.label"> </ig-checkbox>

			<p v-if="item.input && item.checked">
				<ig-input></ig-input>
			</p>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ["options", "inline", "classes"],
		computed: {
			id: function() {
				return this.getId() + this.getId() + this.getId();
			}
		},
		methods: {
			getId: function () {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}
		}
	}

</script>

<style lang="scss">


</style>
