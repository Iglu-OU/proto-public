<template>
	<div>
		<h2>Grid modifiers</h2>
		<pre class="language-scss">
<code disable-loader>
// .grid - this is the main class.
// .grid--equalheight - use this class to stretch column children to 100% height. The child has to have <code>flex: 1 0 auto;</code> set.
// .grid--reverse-xs - use this class if you want to reverse the order of your grid columns. Does not work in IE9.
// .grid--top-lg - use this class if you want to align your columns to top.
// .grid--middle-lg - use this class if you want to align your columns to middle.
// .grid--bottom-lg - use this class if you want to align your columns to bottom.
// .grid--start-lg - use this class if you want to align your columns to start.
// .grid--center-lg - use this class if you want to align your columns to center.
// .grid--end-lg - use this class if you want to align your columns to end.
// .grid--around-lg - use this class if you want to distribute the remaining space in your grid around columns. Does not work in IE9.
// .grid--between-lg - use this class if you want to distribute the remaining space in your grid between columns. Does not work in IE9.
// .grid--no-gutter - use this class to disable all gutters.
// .grid--no-vertical-gutter - use this class to disable vertical gutters.
// .grid--no-horizontal-gutter - use this class disable horizontal gutters.
</code>
</pre>
		<h2>Examples</h2>
		<div class="grid">
			<div class="col--lg-12" v-for="modifier in modifiers">

				<h3>{{modifier}}</h3>
				<div class="grid" :class="modifier">
					<div class="col--lg-4">
						<div class="box">
							<p>1</p>
							<br>
						</div>
					</div>
					<div class="col--lg-4">
						<div class="box">
							<p>
								2
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				modifiers: [
					"default",
					"grid--equalheight",
					"grid--reverse-lg",
					"grid--top-lg",
					"grid--middle-lg",
					"grid--bottom-lg",
					"grid--start-lg",
					"grid--center-lg",
					"grid--end-lg",
					"grid--around-lg",
					"grid--between-lg",
					"grid--no-gutter",
					"grid--no-vertical-gutter",
					"grid--no-horizontal-gutter"
				]
			}
		},
		mounted: function () {
			Prism.highlightElement(this.$el.getElementsByTagName("code")[0]);
		}
	}
</script>

<style>

</style>
