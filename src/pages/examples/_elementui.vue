<template>
	<div class="grid">
		<div class="col--lg-12 col--sm-12">
			<div class="box">
				<h2>Steps</h2>
				<p>
					<a href="http://element.eleme.io/#/en-US/component/steps">http://element.eleme.io/#/en-US/component/steps</a>
				</p>
				<code webpack>
					<el-steps :space="100" :active="1" finish-status="success">
						<el-step title="Done"></el-step>
						<el-step title="Processing"></el-step>
						<el-step title="Step 3"></el-step>
					</el-steps>
				</code>

				<code webpack>
					<el-steps :space="200" :active="1">
						<el-step title="Step 1" description="Some description"></el-step>
						<el-step title="Step 2" description="Some description"></el-step>
						<el-step title="Step 3" description="Some description"></el-step>
					</el-steps>
				</code>
			</div>
			<div class="box">

			</div>
		</div>
	</div>
</template>
