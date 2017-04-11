<template>
	<ul class="radio-group" :class="[classes, {'radio-group--inline': inline}]">
		<li class="radio-group__item" v-for="item in options">
			<ig-radio :name="id" :checked="item.checked" :model="value" :label="item.label"> </ig-radio>
			<p v-if="item.input && value == item.label">
				<ig-input></ig-input>
			</p>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				value: ""
			}
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
