<template>
	<div>
		<ig-header2 title=""></ig-header2>
		<ig-nav2 title=""></ig-nav2>

		<div class="container">
			<div class="grid">
				<div class="col--lg-8 col--sm-12">
					<section class="box">
						<h1>Heading</h1>
						<p>
							# install dependencies<br>
							<strong>npm install</strong>
						</p>
						<p>
							# serve with hot reload at localhost:8080<br>
							<strong>npm run dev</strong>
						</p>
						<p>
							# build for production with minification <br>
							<strong>npm run build</strong>
						</p>
					</section>
				</div>
				<div class="col--lg-4 col--sm-12">
					<section class="box">
						<p><img src="~assets/viljandi-haigla-logo.png" alt=""></p>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style scoped>
	.read-lenght {
		max-width: 600px;
	}
</style>
