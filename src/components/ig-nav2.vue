<template>
	<nav class="navbar clearfix">
		<div class="container">
			<ul class="navbar__menu">
				<router-link :to="{activeClass: 'active', name: 'proto'}" tag="li">
					<a>Proto</a>
				</router-link>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default{}
</script>


<style>

</style>
