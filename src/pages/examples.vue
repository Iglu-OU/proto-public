<template>
	<div>
		<ig-header></ig-header>
		<ig-nav title=""></ig-nav>


		<div class="container container--flex">
			<ig-subnav>
				<router-link tag="li" active-class="active" :to="{name: '_form'}">
					<a>Form</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_buttons'}">
					<a>Buttons</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_alerts'}">
					<a>Alerts</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_tables'}">
					<a>Tables</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_lists'}">
					<a>Lists</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_typography'}">
					<a>Typography</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_breadcrumb'}">
					<a>Breadcrumb</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_image'}">
					<a>Image</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_grid'}">
					<a>Grid</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_modal'}">
					<a>Modal</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_accordion'}">
					<a>Accordion</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_user'}">
					<a>Content toggler</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_info'}">
					<a>Info box</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_infotext'}">
					<a>Infotext</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_pager'}">
					<a>Pager</a>
				</router-link>
				<router-link tag="li" active-class="active" :to="{name: '_elementui'}">
					<a>Element UI</a>
				</router-link>

				<li><a>Link without href </a></li>
			</ig-subnav>
			<div class="main">
				<h1>Examples leht:</h1>
				<ig-breadcrumb></ig-breadcrumb>
				<router-view>
				</router-view>
			</div>
		</div>
	</div>

</template>


<script>
	export default {}
</script>

<style scoped>

</style>
