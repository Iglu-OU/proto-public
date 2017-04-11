<template>
	<div class="accordion" :class="{'accordion--closed': !contentVisible}">
		<a class="accordion__header h2" @click="toggleContent()">
			{{title}}
			<span class="accordion__toggle" :class="{'accordion__toggle--hidden': !contentVisible}">
				<span class="is-hidden--xs">
					{{contentVisible ? 'Peida' : 'Näita'}}
				</span>
				<i class="accordion__toggle-icon fa fa-chevron-up" aria-hidden="true"></i>
			</span>

		</a>
		<ig-slide>
			<div class="accordion__content" v-show="contentVisible">
				<slot>

				</slot>
			</div>
		</ig-slide>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default {
		data(){
			return {
				contentVisible: true
			}
		},
		props: ["title"],
		methods: {
			toggleContent: function () {
				this.contentVisible = !this.contentVisible;
			}
		}
	}
</script>

<style>


</style>
