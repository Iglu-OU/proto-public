<template>
	<div class="grid">
		<div class="col--lg-6 col--sm-12">
			<div class="box">
				<h2>Buttons</h2>
				<h3>btn</h3>
				<code webpack>
					<button class="btn">button</button>
				</code>
				<h3>btn--alt</h3>
				<code webpack>
					<button class="btn btn--alt">button</button>
				</code>

				<h3>btn empty</h3>
				<code webpack>
					<button class="btn btn--empty">button</button>
				</code>

				<h3>btn--link</h3>
				<code webpack>
					<button class="btn btn--link">button link</button>
				</code>
			</div>
		</div>

		<div class="col--lg-6 col--sm-12">
			<div class="box">
				<h2>Button controls</h2>
				<h3>
					Default
				</h3>
				<code webpack>
					<div class="controls">
						<button class="btn">button</button>
						<button class="btn">button</button>
					</div>
				</code>

				<h3>
					controls--right
				</h3>
				<code webpack>
					<div class="controls controls--right">
						<button class="btn">button</button>
						<button class="btn">button</button>
					</div>
				</code>

				<h3>
					controls--spaced
				</h3>
				<code webpack>
					<div class="controls controls--spaced">
						<button class="btn">button</button>
						<button class="btn">button</button>
					</div>
				</code>
				<h3>
					controls--spaced example 2
				</h3>
				<code webpack>
					<div class="controls controls--spaced">
						<button class="btn btn--link">button link</button>
						<div>
							<button class="btn btn--link">button link</button>
							<button class="btn btn--alt">button</button>
							<button class="btn">button</button>
						</div>
					</div>
				</code>
				<h3>
					controls--spaced example 3
				</h3>
				<code webpack>
					<div class="controls controls--spaced">
						<a>link</a>
						<div>
							<button class="btn btn--alt">button</button>
							<button class="btn">button</button>
						</div>
					</div>
				</code>
			</div>
		</div>
	</div>
</template>
