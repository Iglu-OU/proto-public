<template>
	<section class="box">
		<h2>Image</h2>
		<div class="grid">
			<div class="col--lg-8 col--sm-12">
				<code webpack>
					<ig-img></ig-img>
				</code>
			</div>
			<div class="col--lg-4 col--sm-12">
				<h1>Lorem ipsum dolor sit amet, id lacus</h1>
				<p>Sapien class aut malesuada elit at, donec magna nulla fermentum, pellentesque adipiscing lacus. Neque libero, nulla eu, elit justo nisl. Curabitur velit a amet. Sollicitudin eleifend, at leo</p>
				<p>Quisque taciti neque, tellus eleifend lectus magna magna enim in. Ante eu quis dui vehicula at at, orci tristique imperdiet tincidunt ipsum velit ultricies, placerat lectus nunc.</p>
				<p>A ipsum velit id purus mauris, sodales nulla sit sed. Pharetra nulla, sed nec sollicitudin, lacus mauris nec urna ut nibh.</p>
			</div>
		</div>
		<h2>Graph default</h2>
		<div class="grid">
			<div class="col--lg-4 col--sm-12">
				<code webpack>
					<ig-imggraph></ig-imggraph>
				</code>
			</div>
			<div class="col--lg-8 col--sm-12">
				<h1>Lorem ipsum dolor sit amet, id lacus</h1>
				<p>Sapien class aut malesuada elit at, donec magna nulla fermentum, pellentesque adipiscing lacus. Neque libero, nulla eu, elit justo nisl. Curabitur velit a amet. Sollicitudin eleifend, at leo</p>
				<p>Quisque taciti neque, tellus eleifend lectus magna magna enim in. Deserunt magna nec ipsum sed. Ante eu quis dui vehicula at at, orci tristique imperdiet tincidunt ipsum velit ultricies, placerat lectus nunc.</p>
			</div>
		</div>
		<div class="grid" style="height: 200px;">
			<div class="col--lg-4 col--sm-6 col--xs-12">
				<h3>chart="pie"</h3>
				<code webpack>
					<ig-imggraph chart="pie" ></ig-imggraph>
				</code>
			</div>
			<div class="col--lg-4 col--sm-6 col--xs-12">
				<h3>chart="area"</h3>
				<code webpack>
					<ig-imggraph chart="area"></ig-imggraph>
				</code>
			</div>
			<div class="col--lg-4 col--sm-6 col--xs-12">
				<h3>chart="bar"</h3>
				<code webpack>
					<ig-imggraph chart="bar"></ig-imggraph>
				</code>
			</div>
		</div>
	</section>
</template>
