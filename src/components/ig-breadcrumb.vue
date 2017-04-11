<template>
	<ol class="breadcrumb">
		<li class="breadcrumb__item">
			<router-link to="/">Home</router-link>
		</li>
		<li class="breadcrumb__item" v-for="crumb in crumbs">
			<router-link :to="{'name': crumb}">{{crumb}}</router-link>
		</li>
		<li class="breadcrumb__item is-active">
			{{current}}
		</li>
	</ol>
</template>

<script>
	export default{
		data(){
			return {}
		},
		computed: {
			crumbs: function () {
				console.log("path", this.$route.path);
				let path = this.$route.path;
				let crumbs = path.split("/");
				crumbs.splice(0, 1);
				crumbs.splice(crumbs.length - 1, 1);
				return crumbs;
			},
			current: function () {
				return this.$route.name
			}
		}
	}
</script>

<style>


</style>
