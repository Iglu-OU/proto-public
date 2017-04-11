<template>
	<div class="grid">
		<div class="col--lg-6 col--sm-12">
			<div class="box">
				<h2>Modals</h2>
				<h3>Default without content</h3>
				<code webpack>
					<button class="btn" @click="showModal1 = true">Show Modal</button>
					<ig-modal title="Modal title" :show="showModal1" @close="showModal1 = false">
					</ig-modal>
				</code>

				<h3>Modal with custom header, content & footer</h3>
				<code webpack>
					<button class="btn" @click="showModal2 = true">Show Modal</button>
					<ig-modal :show="showModal2" @close="showModal2 = false">
						<h2 slot="header">custom header</h2>

						<div slot="body">
							<h3>Custom content</h3>
							<p>
								Peanut butter combines greatly with dried ghee.
							</p>
							<p>
								Try pressing cheesecake soaked with worcestershire sauce, whisked with marmalade.
							</p>
						</div>

						<div slot="footer">
							<div class="controls controls--spaced">
								<button @click="showModal2 = false" class="btn btn--alt">Sulge</button>
								<router-link :to="{name: '_buttons'}">
									<button class="btn">Liigu buttons lehele</button>
								</router-link>
							</div>
						</div>
					</ig-modal>
				</code>

				<h3>Small modal</h3>
				<code webpack>
					<button class="btn" @click="showModal3 = true">Show Modal</button>
					<ig-modal title="Modal title 3" size="small" :show="showModal3" @close="showModal3 = false">
					</ig-modal>
				</code>

				<h3>Large modal</h3>
				<code webpack>
					<button class="btn" @click="showModal4 = true">Show Modal</button>
					<ig-modal title="Modal title 4" size="large" :show="showModal4" @close="showModal4 = false">
					</ig-modal>
				</code>
			</div>
		</div>
		<div class="col--lg-6 col--sm-12">
			<div class="box">
				<h2>NB!</h2>
				<p>
					You have to define the show-hide variables in the data section of your page/component
				</p>
				<pre>
<code webpack>
export default {
 data () {
  return {
   showModal1: false,
   showModal2: false,
   showModal3: false,
   showModal4: false,
   showModal5: false,
  }
 }
}</code></pre>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				showModal1: false,
				showModal2: false,
				showModal3: false,
				showModal4: false,
				showModal5: false,
			}
		}
	}
</script>
