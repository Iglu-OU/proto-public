<template>
	<div>
		<code webpack>
			<div class="grid">
				<div class="col--lg-6 col--sm-12">
					<div class="box" v-show="config.admin.active">
						<h2>Administraator</h2>
						<p>Administraatorile mõeldud sisu.</p>
					</div>
					<div class="box" v-show="config.user.active">
						<h2>Tavakasutaja</h2>
						<p>Tavakasutajale mõeldud sisu.</p>
					</div>
					<div class="box" v-show="config.anon.active">
						<h2>Anonüümne kasutaja</h2>
						<p>Anonüümsele kasutajale mõeldud sisu.</p>
					</div>
				</div>
			</div>
			<ig-toggler :config="config"></ig-toggler>
		</code>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				config: {
					admin: {
						active: false,
						text: "Administraator"
					},
					user: {
						active: false,
						text: "Tavakasutaja"
					},
					anon: {
						active: true,
						text: "Anonüümne kasutaja"
					},
					canBeAnything: {
						active: false,
						text: "Peida kõik"
					}
				}
			}
		},
	}
</script>

<style scoped>

</style>
